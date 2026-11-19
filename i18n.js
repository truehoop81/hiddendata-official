/**
 * HiddenData Official Website - Core I18N Engine
 * Handles instant client-side language switching, auto-detection, persistence,
 * and unified mobile navigation drawer interactions.
 */

export function initMobileMenu() {
  if (typeof window === "undefined" || window.__hdMobileMenuInitialized) return;
  window.__hdMobileMenuInitialized = true;

  const menuBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileNavDrawer");
  const backdrop = document.getElementById("mobileNavBackdrop");
  const closeBtn = document.getElementById("mobileNavClose");

  if (!menuBtn || !drawer) return;

  function setOpen(isOpen) {
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.classList.toggle("is-active", isOpen);
    drawer.classList.toggle("is-open", isOpen);
    drawer.setAttribute("aria-hidden", String(!isOpen));
    if (backdrop) {
      backdrop.classList.toggle("is-open", isOpen);
      backdrop.setAttribute("aria-hidden", String(!isOpen));
    }
    document.body.classList.toggle("nav-open", isOpen);
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isCurrentlyOpen = menuBtn.getAttribute("aria-expanded") === "true";
    setOpen(!isCurrentlyOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(false);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", () => setOpen(false));
  }

  // Close when clicking on any link inside the drawer
  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
    }
  });

  // Auto-close when viewport expands back to desktop (>= 992px)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992 && menuBtn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
    }
  });
}

export function initI18n(dictionary) {
  const supportedLangs = Object.keys(dictionary);

  const langDirs = {
    "en": "",
    "ko": "ko",
    "ja": "ja",
    "zh_TW": "zh-TW",
    "es": "es",
    "de": "de",
    "fr": "fr",
    "pt_BR": "pt-BR"
  };

  function getCurrentSubdirLang() {
    try {
      const pathname = window.location.pathname || "";
      if (pathname.includes("/ko/")) return "ko";
      if (pathname.includes("/ja/")) return "ja";
      if (pathname.includes("/zh-TW/")) return "zh_TW";
      if (pathname.includes("/es/")) return "es";
      if (pathname.includes("/de/")) return "de";
      if (pathname.includes("/fr/")) return "fr";
      if (pathname.includes("/pt-BR/")) return "pt_BR";
    } catch (_) {}
    return null;
  }

  function detectLanguage() {
    // 1. URL Query Parameter (?lang=...) - Priority for backwards compatibility
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang");
      if (queryLang && supportedLangs.includes(queryLang)) {
        return queryLang;
      }
    } catch (_) {}

    // 2. Static subdirectory path matching (/ko/, /ja/, /zh-TW/, ...)
    const subdirLang = getCurrentSubdirLang();
    if (subdirLang && supportedLangs.includes(subdirLang)) {
      return subdirLang;
    }

    // 3. Document HTML lang attribute if statically rendered and non-default
    try {
      const docLang = document.documentElement.lang;
      const mappedDocLang = docLang === "zh-TW" ? "zh_TW" : (docLang === "pt-BR" ? "pt_BR" : docLang);
      if (mappedDocLang && mappedDocLang !== "en" && supportedLangs.includes(mappedDocLang)) {
        return mappedDocLang;
      }
    } catch (_) {}

    // 4. LocalStorage (only when on root path without explicit subdirectory)
    try {
      const stored = localStorage.getItem("hd_site_lang");
      if (stored && supportedLangs.includes(stored)) {
        return stored;
      }
    } catch (_) {}

    // 5. Browser Language
    const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (navLang.startsWith("ko")) return "ko";
    if (navLang.startsWith("ja")) return "ja";
    if (navLang.includes("tw") || navLang.includes("hk") || navLang.includes("hant")) return "zh_TW";
    if (navLang.startsWith("zh")) return "zh_TW";
    if (navLang.includes("br") || (navLang.startsWith("pt") && navLang.includes("br"))) return "pt_BR";
    if (navLang.startsWith("pt")) return "pt_BR";
    if (navLang.startsWith("es")) return "es";
    if (navLang.startsWith("de")) return "de";
    if (navLang.startsWith("fr")) return "fr";

    return "en";
  }

  function applyLanguage(lang) {
    if (!dictionary[lang]) {
      lang = "en";
    }

    const dict = dictionary[lang];
    document.documentElement.lang = lang === "zh_TW" ? "zh-TW" : (lang === "pt_BR" ? "pt-BR" : lang);

    if (dict.pageTitle) {
      document.title = dict.pageTitle;
    }

    // Apply data-i18n keys
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        // If content contains HTML tags, use innerHTML, else textContent
        if (dict[key].includes("<") && dict[key].includes(">")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Apply attribute i18n
    const attrElements = document.querySelectorAll("[data-i18n-attr]");
    attrElements.forEach((el) => {
      const mappings = el.getAttribute("data-i18n-attr").split(",");
      mappings.forEach((m) => {
        const [attr, key] = m.split(":").map((s) => s.trim());
        if (attr && key && dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });

    // Update switcher dropdown
    const switcher = document.getElementById("langSwitcher");
    if (switcher && switcher.value !== lang) {
      switcher.value = lang;
    }

    // Persist
    try {
      localStorage.setItem("hd_site_lang", lang);
    } catch (_) {}

    // Update URL query parameter silently if on root path without subdirectory
    if (!getCurrentSubdirLang()) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url.toString());
      } catch (_) {}
    }
  }

  function switchPageLanguage(targetLang) {
    if (!supportedLangs.includes(targetLang)) return;
    try {
      localStorage.setItem("hd_site_lang", targetLang);
    } catch (_) {}

    const currentSubdir = getCurrentSubdirLang();
    const pathname = window.location.pathname || "";
    const filename = pathname.split("/").pop() || "index.html";
    const currentFile = filename.endsWith(".html") ? filename : "index.html";
    const targetDir = langDirs[targetLang];

    let targetUrl = "";
    if (currentSubdir) {
      // In a subdirectory (e.g. /ko/index.html)
      if (targetLang === "en") {
        targetUrl = "../" + currentFile;
      } else {
        targetUrl = "../" + targetDir + "/" + currentFile;
      }
    } else {
      // In root directory (e.g. /index.html)
      if (targetLang === "en") {
        applyLanguage("en");
        return;
      } else {
        targetUrl = "./" + targetDir + "/" + currentFile;
      }
    }

    if (window.location.hash) {
      targetUrl += window.location.hash;
    }

    window.location.href = targetUrl;
  }

  // Setup dropdown listener
  const switcher = document.getElementById("langSwitcher");
  if (switcher) {
    switcher.addEventListener("change", (e) => {
      const selected = e.target.value;
      switchPageLanguage(selected);
    });
  }

  // Initial render
  const initialLang = detectLanguage();
  applyLanguage(initialLang);

  // Initialize unified mobile menu interactions
  initMobileMenu();

  return {
    getCurrentLang: () => document.documentElement.lang,
    setLanguage: applyLanguage,
  };
}
