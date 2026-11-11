/**
 * HiddenData Official Website - Core I18N Engine
 * Handles instant client-side language switching, auto-detection, and persistence.
 */

export function initI18n(dictionary) {
  const supportedLangs = Object.keys(dictionary);

  function detectLanguage() {
    // 1. URL Query Parameter (?lang=...)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang");
      if (queryLang && supportedLangs.includes(queryLang)) {
        return queryLang;
      }
    } catch (_) {}

    // 2. LocalStorage
    try {
      const stored = localStorage.getItem("hd_site_lang");
      if (stored && supportedLangs.includes(stored)) {
        return stored;
      }
    } catch (_) {}

    // 3. Browser Language
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

    // Update URL query parameter silently
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    } catch (_) {}
  }

  // Setup dropdown listener
  const switcher = document.getElementById("langSwitcher");
  if (switcher) {
    switcher.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }

  // Initial render
  const initialLang = detectLanguage();
  applyLanguage(initialLang);

  return {
    getCurrentLang: () => document.documentElement.lang,
    setLanguage: applyLanguage,
  };
}
