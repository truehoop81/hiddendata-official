/**
 * HiddenData Official Website - Privacy & Terms Page I18N Dictionary
 * 8 Supported Languages: ko, en, ja, zh_TW, es, de, fr, pt_BR
 */

export const PRIVACY_I18N = {
  ko: {
    pageTitle: "HiddenData - 개인정보처리방침 및 이용약관 / 환불 정책",
    navHome: "← 홈으로 돌아가기",
    navPrivacy: "개인정보처리방침",
    navTerms: "이용약관 및 환불 정책",
    mainTitle: "개인정보처리방침 및 이용약관",
    lastUpdated: "최종 업데이트: 2026년 3월 1일 | 시행일자: 2026년 3월 1일",
    
    // Privacy Policy Section
    secPrivacyTitle: "1. 개인정보처리방침 (Privacy Policy)",
    zkTitle: "1.1 나만 열 수 있는 완전 비공개 보안(Zero-Knowledge) 원칙",
    zkP1: "HiddenData(이하 '당사' 또는 '본 소프트웨어')는 사용자의 완전한 데이터 프라이버시를 보장하기 위해 설계된 독립형 완전 비공개(Zero-Knowledge) 보안 미디어 금고 솔루션입니다.",
    zkP2: "본 소프트웨어는 최고 등급 AES-256-GCM 암호화 및 슈퍼컴퓨터로도 뚫을 수 없는 단방향 비밀번호 보호 알고리즘을 사용합니다. 사용자의 마스터 비밀번호, 암호화 키, 평문 파일 및 미디어 원본은 오직 사용자의 로컬 기기 메모리에서만 처리되며, 당사의 원격 서버로 일절 전송되거나 보관되지 않습니다. 개발자를 포함한 그 누구도 사용자의 비밀번호를 열람하거나 임의로 데이터를 복호화할 수 없습니다.",
    
    gdriveTitle: "1.2 Google Drive API 사용 및 사용자 데이터 정책 준수 (Limited Use)",
    gdriveP1: "HiddenData는 클라우드 금고 백업 및 크로스 플랫폼(PC Chrome 확장 프로그램 ↔ Android 모바일 앱) 데이터 동기화를 위하여 Google Drive REST API를 사용합니다.",
    gdriveP2: "당사는 Google API 서비스 사용자 데이터 정책(Google API Services User Data Policy) 및 제한적 사용 요구사항(Limited Use Requirements)을 엄격히 준수합니다:",
    gdriveLi1: "최소 권한 원칙(Least Privilege): 당사는 오직 'https://www.googleapis.com/auth/drive.file' 권한만을 요청합니다. 이 권한은 HiddenData를 통해 사용자가 직접 생성하거나 업로드한 암호화 파일(.enc), 마스터 설정 파일(.hiddendata_vault_config.json), 그리고 라이선스 동기화 파일(.hiddendata_pro_license.json)에만 한정적으로 접근할 수 있습니다.",
    gdriveLi2: "타 파일 접근 불가: 당사의 소프트웨어는 사용자의 Google Drive에 저장된 다른 개인 문서, 사진, 폴더 등 HiddenData와 무관한 파일에 대해 일절 접근할 수 없으며 조회 권한조차 보유하지 않습니다.",
    gdriveLi3: "제3자 비공개 및 AI 학습 금지: Google 사용자 데이터는 제3자 광고주, 데이터 브로커에게 절대 판매되거나 전송되지 않으며, 인공지능(AI) 또는 기계학습(ML) 모델의 학습 목적으로 사용되지 않습니다.",
    
    permsTitle: "1.3 Chrome 확장 프로그램 권한 명세",
    permsIntro: "PC 크롬 확장 프로그램은 보안 기능 동작을 위해 아래의 필수 권한만을 사용합니다:",
    permSidePanel: "sidePanel: 브라우징 작업 중 화면 분할을 통해 편리하게 독립형 보안 금고를 열람할 수 있도록 사이드 패널 UI를 제공합니다.",
    permStorage: "storage: 로컬 환경설정(테마, 선택된 금고 경로) 및 비밀번호 오입력 차단을 위한 안전 검증 해시를 브라우저 내부에 안전하게 저장합니다.",
    permIdentity: "identity: 사용자의 명시적 요청 시 Google Drive 클라우드 금고 연동 및 Pro 라이선스 동기화를 위한 안전한 OAuth2 로그인 토큰을 발급받습니다.",
    permActiveTab: "activeTab: 웹서핑 중 사용자가 직접 선택한 이미지나 파일을 암호화 금고로 드래그 앤 드롭하여 가져올 때 안전한 컨텍스트를 지원합니다.",
    
    dataRetentionTitle: "1.4 데이터 보존 및 삭제 정책",
    dataRetentionP: "당사는 원격 서버에 사용자의 개인정보나 파일 데이터를 일절 저장하지 않으므로, 데이터의 삭제는 전적으로 사용자의 제어 하에 있습니다. 사용자가 로컬 금고 폴더를 삭제하거나, Google Drive에서 HiddenData_Vault 폴더를 삭제하면 해당 데이터는 영구히 파기되며 당사에는 어떠한 잔여 데이터도 남지 않습니다.",

    // Terms of Service & Refund Section
    secTermsTitle: "2. 이용약관 및 환불 정책 (Terms of Service & Refund Policy)",
    termsAcceptTitle: "2.1 서비스 이용 계약 체결",
    termsAcceptP: "HiddenData 소프트웨어(PC 확장 프로그램 및 Android 모바일 앱)를 다운로드, 설치 또는 사용함으로써 귀하는 본 약관에 동의하게 됩니다. 본 약관에 동의하지 않으시는 경우 소프트웨어의 사용을 즉시 중단하셔야 합니다.",
    
    disclaimerTitle: "2.2 마스터 비밀번호 분실에 대한 중요 안내 (비밀번호 복구 불가 안내)",
    disclaimerWarning: "⚠️ 중요 고지: HiddenData는 개발자도 열 수 없는 완전 비공개(Zero-Knowledge) 암호화를 적용하므로, 사용자가 마스터 비밀번호를 분실할 경우 개발자를 포함한 그 누구도 이를 복원하거나 초기화할 수 있는 뒷문(백도어)이 기술적으로 존재하지 않습니다. 마스터 비밀번호의 안전한 보관 및 백업 책임은 전적으로 사용자 본인에게 있으며, 비밀번호 분실로 인한 데이터 접근 불가에 대해 개발자 및 서비스 제공자는 일체의 책임을 지지 않습니다.",
    
    licenseTitle: "2.3 Pro 라이선스 결제 및 제공 조건",
    licenseP1: "HiddenData Pro 라이선스는 정기 결제가 발생하는 구독 모델이 아닌, 1회 결제로 영구히 소유하는 평생 라이선스(Lifetime License)입니다.",
    licenseP2: "공식 결제 서비스(Lemon Squeezy)를 통해 1회 결제를 완료하면 내 구글 계정으로 PC와 폰 모두에서 평생 소장하는 정품 라이선스가 발급됩니다. 본 라이선스는 PC Chrome 확장 프로그램과 Android 모바일 앱(얼리액세스 APK 및 향후 정식 출시판) 모두에서 Google 계정 동기화를 통해 추가 결제 없이 동시에 영구 활성화됩니다.",
    
    refundTitle: "2.4 14일 환불 정책 (Refund Policy - Lemon Squeezy 준수)",
    refundP1: "당사는 Lemon Squeezy(공식 상거래 대행사, Merchant of Record)의 표준 소비자 보호 규정을 완벽하게 준수합니다.",
    refundP2: "디지털 소프트웨어 라이선스의 특성상 결제 즉시 기능이 활성화되지만, 결제일로부터 14일 이내에 기술적 결함으로 인해 소프트웨어의 정상적인 구동이 불가능하거나 서비스에 만족하지 못하신 경우 전액 환불을 요청하실 수 있습니다.",
    refundLi1: "환불 요청 방법: 주문 번호(Order ID) 및 결제 시 입력하신 이메일 주소를 기재하여 공식 고객지원팀(truehoop81@gmail.com)으로 문의해 주시면 영업일 기준 24~48시간 이내에 확인 후 환불 처리를 도와드립니다.",
    refundLi2: "환불 제한 사항: 마스터 비밀번호 분실로 인한 본인 데이터 열람 불가 사유 등 소프트웨어 자체의 결함이 아닌 사용자의 관리 부주의로 인한 사유는 디지털 콘텐츠 특성상 환불이 제한될 수 있습니다.",
    
    contactTitle: "2.5 개발자 문의 및 고객지원",
    contactP: "소프트웨어 사용 중 기술적 문제, 라이선스 활성화 오류, 또는 제안 사항이 있으신 경우 언제든지 아래의 공식 창구로 문의해 주시기 바랍니다.",
    contactEmail: "공식 고객지원 이메일: truehoop81@gmail.com",
    
    footerTerms: "이용약관 및 환불 정책",
    footerPrivacy: "개인정보처리방침",
    footerCopyright: "© 2026 HiddenData Team. All rights reserved."
  },

  en: {
    pageTitle: "HiddenData - Privacy Policy, Terms of Service & Refund Policy",
    navHome: "← Back to Home",
    navPrivacy: "Privacy Policy",
    navTerms: "Terms & Refund Policy",
    mainTitle: "Privacy Policy, Terms of Service & Refund Policy",
    lastUpdated: "Last Updated: March 1, 2026 | Effective Date: March 1, 2026",
    
    secPrivacyTitle: "1. Privacy Policy",
    zkTitle: "1.1 Zero-Knowledge Security Architecture Principles",
    zkP1: "HiddenData ('we', 'us', or 'the Software') is an independent zero-knowledge encrypted media vault studio engineered to guarantee absolute data privacy.",
    zkP2: "The Software employs top-tier AES-256-GCM symmetric encryption and uncrackable one-way password protection. Your master password, encryption keys, and raw media files are processed exclusively inside your local device's memory and are never transmitted to or stored on our servers. Nobody, including the software developers, can access your password or decrypt your data.",
    
    gdriveTitle: "1.2 Google Drive API Usage & Compliance with Limited Use Requirements",
    gdriveP1: "HiddenData utilizes the Google Drive REST API solely for cloud vault backup and cross-platform synchronization between the PC Chrome Extension and the Android Mobile Application.",
    gdriveP2: "We strictly adhere to the Google API Services User Data Policy, including the Limited Use requirements:",
    gdriveLi1: "Principle of Least Privilege: We request only the 'https://www.googleapis.com/auth/drive.file' scope. This scope is strictly restricted to encrypted files (.enc), the master configuration file (.hiddendata_vault_config.json), and the license sync file (.hiddendata_pro_license.json) created directly by HiddenData.",
    gdriveLi2: "No Access to Other Files: The Software has no permission, access, or ability to view or modify any of your other documents, photos, or folders stored in your Google Drive.",
    gdriveLi3: "No Third-Party Transfer or AI Training: Google user data is never sold, transferred to third-party brokers or advertisers, nor used to train artificial intelligence (AI) or machine learning (ML) models.",
    
    permsTitle: "1.3 Chrome Extension Permissions Specification",
    permsIntro: "The PC Chrome extension requests only the essential permissions required for its vault operations:",
    permSidePanel: "sidePanel: Provides the side panel interface to inspect and manage your vault while browsing.",
    permStorage: "storage: Safely persists local preferences and the Zero-Knowledge Verifier hash inside your local browser to reject incorrect passwords instantly.",
    permIdentity: "identity: Acquires secure OAuth2 tokens upon your explicit request to connect Google Drive and sync your Pro license.",
    permActiveTab: "activeTab: Facilitates secure drag-and-drop ingestion of web images or files into your encrypted vault.",
    
    dataRetentionTitle: "1.4 Data Retention & Deletion Policy",
    dataRetentionP: "Because we never store user data or master passwords on remote servers, data deletion is entirely under your control. Deleting your local vault folder or removing the HiddenData_Vault folder from Google Drive completely and permanently deletes your data.",

    secTermsTitle: "2. Terms of Service & Refund Policy",
    termsAcceptTitle: "2.1 Agreement to Terms",
    termsAcceptP: "By downloading, installing, or using the HiddenData PC Chrome extension or Android mobile application, you agree to be bound by these Terms of Service. If you do not agree, do not use the Software.",
    
    disclaimerTitle: "2.2 Master Password Non-Recoverability Warning (Zero-Knowledge)",
    disclaimerWarning: "⚠️ CRITICAL WARNING: HiddenData implements mathematically unyielding Zero-Knowledge encryption. If you lose your master password, there is NO backdoor and NO recovery mechanism. Neither the developer nor any third party can restore your password or recover your data. You are solely responsible for securing your master password.",
    
    licenseTitle: "2.3 Pro Lifetime License Terms",
    licenseP1: "HiddenData Pro is sold as a one-time purchase Lifetime License with zero recurring subscription fees.",
    licenseP2: "Upon completing payment through Lemon Squeezy (our official Merchant of Record), a permanent genuine license bound to your Google account is issued. This license permanently activates Pro features across both the PC Chrome Extension and Android Mobile App (early-access APK and production releases) via Google account synchronization without additional fees.",
    
    refundTitle: "2.4 14-Day Money-Back Guarantee (Lemon Squeezy Policy)",
    refundP1: "We comply fully with the consumer protection standards of Lemon Squeezy (Merchant of Record).",
    refundP2: "Although digital licenses are delivered and activated immediately, if you experience technical defects preventing software operation or are dissatisfied within 14 days of purchase, you may request a 100% full refund.",
    refundLi1: "How to Request a Refund: Email our official support team at truehoop81@gmail.com with your Order ID and purchase email address. We review and process valid refunds within 24–48 business hours.",
    refundLi2: "Limitations: Refunds may be denied if the request is due to user negligence (such as forgotten master passwords) rather than defects in the software itself.",
    
    contactTitle: "2.5 Developer Support & Contact Information",
    contactP: "For technical inquiries, license troubleshooting, or feature suggestions, please contact:",
    contactEmail: "Official Support Email: truehoop81@gmail.com",
    
    footerTerms: "Terms & Refund Policy",
    footerPrivacy: "Privacy Policy",
    footerCopyright: "© 2026 HiddenData Team. All rights reserved."
  },

  ja: {
    pageTitle: "HiddenData - プライバシーポリシー ＆ 利用規約・返金ポリシー",
    navHome: "← ホームに戻る",
    navPrivacy: "プライバシーポリシー",
    navTerms: "利用規約と返金ポリシー",
    mainTitle: "プライバシーポリシー ＆ 利用規約",
    lastUpdated: "最終更新日: 2026年3月1日 | 発効日: 2026年3月1日",
    
    secPrivacyTitle: "1. プライバシーポリシー (Privacy Policy)",
    zkTitle: "1.1 完全プライベート(Zero-Knowledge)セキュリティ原則",
    zkP1: "HiddenData（以下「当ソフトウェア」）は、完全なデータプライバシーを保証するために設計された完全非公開暗号化メディア金庫です。",
    zkP2: "当ソフトウェアは軍用規格のAES-256-GCM暗号化およびスーパーコンピュータでも破れない安全なマスターパスワード保護技術を採用しています。マスターパスワード、暗号化キー、平文データはお客様の端末メモリ上でのみ処理され、当社のサーバーに送信・保管されることは一切ありません。開発者を含め、第三者がお客様のパスワードを閲覧したりデータを復号することは不可能です。",
    
    gdriveTitle: "1.2 Google Drive API の利用および限定使用要件の遵守",
    gdriveP1: "HiddenDataは、クラウドバックアップおよびPC・Android間のデータ同期のためにGoogle Drive REST APIを利用します。",
    gdriveP2: "当社はGoogle APIサービスのユーザーデータポリシーおよび限定使用要件(Limited Use)を厳格に遵守します:",
    gdriveLi1: "最小権限の原則: 当ソフトウェアは「https://www.googleapis.com/auth/drive.file」権限のみを要求します。これはHiddenDataを通じて直接作成された暗号化ファイル(.enc)および設定ファイルにのみアクセスを限定するものです。",
    gdriveLi2: "他ファイルへのアクセス不可: お客様のGoogle Driveに保存されている他のドキュメントや写真には一切アクセスできません。",
    gdriveLi3: "第三者提供およびAI学習の禁止: ユーザーデータが広告主や第三者に提供されることはなく、AIモデルのトレーニングに利用されることもありません。",
    
    permsTitle: "1.3 Chrome拡張機能の権限仕様",
    permsIntro: "PC版Chrome拡張機能は、安全な金庫動作のために以下の必要最小限の権限のみを使用します:",
    permSidePanel: "sidePanel: ブラウジング中にサイドパネルから金庫を快適に操作するためのUIを提供します。",
    permStorage: "storage: ローカル設定およびマスターパスワード誤入力防止用の暗号検証ハッシュをブラウザ内に安全に保存します。",
    permIdentity: "identity: Google Drive連携およびProライセンス同期のための安全なOAuth2認証を行います。",
    permActiveTab: "activeTab: Web上の画像やファイルを暗号化金庫へドラッグ＆ドロップで取り込む際に使用します。",
    
    dataRetentionTitle: "1.4 データの保持と削除ポリシー",
    dataRetentionP: "当社のサーバーにはユーザーデータが保存されないため、データの削除はお客様自身で完全に管理できます。ローカルフォルダやGoogle Drive内のHiddenData_Vaultフォルダを削除することで、データは恒久的に消去されます。",

    secTermsTitle: "2. 利用規約および返金ポリシー (Terms & Refund Policy)",
    termsAcceptTitle: "2.1 規約への同意",
    termsAcceptP: "HiddenDataをダウンロード、インストール、またはご利用いただくことで、本規約に同意したものとみなされます。",
    
    disclaimerTitle: "2.2 パスワード紛失に関する重要事項 (復元不可のご案内)",
    disclaimerWarning: "⚠️ 重要な警告: HiddenDataは開発者も解除できない完全非公開（Zero-Knowledge）暗号化を採用しているため、マスターパスワードを紛失した場合、データを復旧する手段（バックドア）は技術的に存在しません。パスワードの保管責任はお客様にあります。",
    
    licenseTitle: "2.3 Pro永久ライセンスの提供条件",
    licenseP1: "HiddenData Proは月額サブスクリプションではなく、1回のお支払いで永久に利用可能な買い切り型(Lifetime)ライセンスです。",
    licenseP2: "Lemon Squeezyを通じて購入が完了すると、暗号署名付きライセンスが発行されます。Googleアカウントの同期により、PC Chrome拡張機能とAndroidアプリの双方で追加費用なく永久にProが有効化されます。",
    
    refundTitle: "2.4 14日間の返金保証 (Lemon Squeezy 準拠)",
    refundP1: "当社は公式販売代行会社 Lemon Squeezy の消費者保護基準を遵守します。",
    refundP2: "デジタルライセンスの性質上、購入後即時に有効化されますが、技術的な不具合により正常に動作しない場合など、購入後14日以内であれば全額返金を申請いただけます。",
    refundLi1: "返金申請方法: 注文番号と購入時のメールアドレスを記載し、公式サポート(truehoop81@gmail.com)までご連絡ください。",
    refundLi2: "免責事項: パスワード紛失など、ソフトウェア自体の不具合によらない個人的な過失による場合は返金をお断りすることがあります。",
    
    contactTitle: "2.5 サポートおよびお問い合わせ",
    contactP: "技術的なご質問やライセンスに関するお問い合わせは下記までお気軽にご連絡ください。",
    contactEmail: "公式サポートメール: truehoop81@gmail.com",
    
    footerTerms: "利用規約と返金ポリシー",
    footerPrivacy: "プライバシーポリシー",
    footerCopyright: "© 2026 HiddenData Team. All rights reserved."
  },

  zh_TW: {
    pageTitle: "HiddenData - 隱私權政策、服務條款與退款政策",
    navHome: "← 返回首頁",
    navPrivacy: "隱私權政策",
    navTerms: "服務條款與退款政策",
    mainTitle: "隱私權政策、服務條款與退款政策",
    lastUpdated: "最後更新日期：2026年3月1日 | 生效日期：2026年3月1日",
    
    secPrivacyTitle: "1. 隱私權政策 (Privacy Policy)",
    zkTitle: "1.1 100% 完全隱私 (Zero-Knowledge) 安全架構原則",
    zkP1: "HiddenData（以下簡稱「本軟體」或「我們」）是一套旨在保證絕對資料隱私的獨立完全私密媒體金庫解決方案。",
    zkP2: "本軟體採用頂級 AES-256-GCM 加密與超級電腦也無法破解的單向主密碼保護技術。您的主密碼、加密密鑰與原始媒體僅於您的本機記憶體中運算處理，絕不會上傳或儲存於我們的伺服器。包含開發者在內的任何第三方，皆無法查看您的密碼或解密您的資料。",
    
    gdriveTitle: "1.2 Google Drive API 使用與有限使用規範遵循 (Limited Use)",
    gdriveP1: "HiddenData 僅使用 Google Drive REST API 進行雲端金庫備份以及 PC Chrome 擴充功能與 Android 行動版之間的跨裝置資料同步。",
    gdriveP2: "我們嚴格遵守 Google API 服務使用者資料政策 (Google API Services User Data Policy) 及有限使用條款 (Limited Use Requirements)：",
    gdriveLi1: "最小權限原則：我們僅申請 'https://www.googleapis.com/auth/drive.file' 權限。此權限僅能存取由 HiddenData 直接建立的加密檔案 (.enc)、主設定檔與授權同步檔。",
    gdriveLi2: "無法讀取其他檔案：本軟體完全無法存取或窺探您 Google Drive 中儲存的其他私人文件、相片或資料夾。",
    gdriveLi3: "禁止第三方分享與 AI 訓練：Google 使用者資料絕不販售或提供給第三方廣告商，亦絕不用於訓練人工智慧 (AI) 或機器學習模型。",
    
    permsTitle: "1.3 Chrome 擴充功能權限說明",
    permsIntro: "PC Chrome 擴充功能僅要求確保金庫正常運作之必要權限：",
    permSidePanel: "sidePanel：提供側邊面板介面，讓您在瀏覽網頁時隨時取用金庫。",
    permStorage: "storage：於本機瀏覽器內安全儲存設定偏好與防範錯誤密碼嘗試的安全驗證雜湊值。",
    permIdentity: "identity：於您明確要求時取得安全的 OAuth2 憑證以連動 Google Drive 並同步 Pro 授權。",
    permActiveTab: "activeTab：協助您安全地將網路圖片或檔案拖放匯入至加密金庫中。",
    
    dataRetentionTitle: "1.4 資料保留與刪除政策",
    dataRetentionP: "由於我們不在遠端伺服器保留任何使用者資料，資料刪除完全由您掌控。刪除本機金庫或 Google Drive 上的金庫資料夾，即可永久銷毀資料。",

    secTermsTitle: "2. 服務條款與退款政策 (Terms & Refund Policy)",
    termsAcceptTitle: "2.1 同意條款",
    termsAcceptP: "下載、安裝或使用 HiddenData 軟體即表示您同意接受本服務條款。若您不同意，請勿使用本軟體。",
    
    disclaimerTitle: "2.2 主密碼遺失重要通知 (無法找回密碼之架構說明)",
    disclaimerWarning: "⚠️ 重要通知：HiddenData 採用連開發者也無法破解的完全隱私 (Zero-Knowledge) 架構。若您忘記主密碼，本軟體在技術上絕無任何後門可供重設。保管主密碼之責任由使用者自行承擔。",
    
    licenseTitle: "2.3 Pro 終身授權購買與條款",
    licenseP1: "HiddenData Pro 為單次購買的終身授權 (Lifetime License)，絕無每月定期訂閱費用。",
    licenseP2: "透過官方特約商戶 Lemon Squeezy 完成付款後，將發行綁定個人 Google 帳號的終身正版授權憑證。透過 Google 帳號同步，PC 與 Android 雙版本皆可永久同步解鎖 Pro 功能，無需額外付費。",
    
    refundTitle: "2.4 14 天退款保證 (Lemon Squeezy 政策規範)",
    refundP1: "我們完全遵守 Lemon Squeezy 的全球消費者保護標準。",
    refundP2: "雖然數位產品於購買後即時交付，但若在購買日起 14 天內因軟體技術瑕疵導致無法正常使用，您可提出全額退款申請。",
    refundLi1: "退款申請管道：請檢附您的訂單編號 (Order ID) 與購買時的電子郵件信箱，來信至官方技術支援信箱 truehoop81@gmail.com。",
    refundLi2: "退款限制：因個人遺失主密碼導致無法解密檔案等人為疏失，非屬軟體瑕疵，數位授權恕無法受理退款。",
    
    contactTitle: "2.5 客戶支援與聯絡方式",
    contactP: "如有任何問題或授權疑慮，歡迎隨時與我們聯繫：",
    contactEmail: "官方客戶支援信箱：truehoop81@gmail.com",
    
    footerTerms: "服務條款與退款政策",
    footerPrivacy: "隱私權政策",
    footerCopyright: "© 2026 HiddenData Team. All rights reserved."
  },

  es: {
    pageTitle: "HiddenData - Política de Privacidad, Términos y Reembolso",
    navHome: "← Volver al Inicio",
    navPrivacy: "Política de Privacidad",
    navTerms: "Términos y Reembolso",
    mainTitle: "Política de Privacidad, Términos de Servicio y Reembolso",
    lastUpdated: "Última actualización: 1 de marzo de 2026 | Fecha de vigencia: 1 de marzo de 2026",
    
    secPrivacyTitle: "1. Política de Privacidad (Privacy Policy)",
    zkTitle: "1.1 Principios de Seguridad y Privacidad Absoluta (Zero-Knowledge)",
    zkP1: "HiddenData ('el Software') es una solución de bóveda privada diseñada bajo una estricta arquitectura 100% confidencial (Zero-Knowledge) para garantizar la privacidad absoluta de sus datos.",
    zkP2: "El Software utiliza cifrado de alto nivel AES-256-GCM y protección con contraseña maestra inviolable. Su contraseña maestra, claves de descifrado y archivos multimedia se procesan exclusivamente en la memoria de su dispositivo local y nunca se transmiten ni almacenan en nuestros servidores. Nadie, incluidos los desarrolladores, puede ver su contraseña ni descifrar sus archivos.",
    
    gdriveTitle: "1.2 Uso de Google Drive API y Cumplimiento de 'Limited Use'",
    gdriveP1: "HiddenData utiliza la API de Google Drive únicamente para copias de seguridad en la nube y sincronización entre la extensión de PC y la aplicación móvil Android.",
    gdriveP2: "Cumplimos estrictamente con la Política de Datos de Usuario de los Servicios de Google API, incluidos los requisitos de Uso Limitado (Limited Use):",
    gdriveLi1: "Principio de privilegio mínimo: Solo solicitamos el permiso 'https://www.googleapis.com/auth/drive.file', restringido a los archivos cifrados (.enc) y de configuración creados directamente por HiddenData.",
    gdriveLi2: "Sin acceso a otros archivos: El Software no tiene permiso ni capacidad para ver o modificar ningún otro documento, foto o carpeta de su Google Drive.",
    gdriveLi3: "Prohibición de venta a terceros y entrenamiento de IA: Los datos de Google nunca se venden ni se transfieren a intermediarios publicitarios, ni se utilizan para entrenar modelos de Inteligencia Artificial (IA).",
    
    permsTitle: "1.3 Permisos de la Extensión de Chrome",
    permsIntro: "La extensión de PC Chrome solo solicita los permisos esenciales para su funcionamiento:",
    permSidePanel: "sidePanel: Proporciona la interfaz del panel lateral para administrar su bóveda mientras navega.",
    permStorage: "storage: Guarda de forma segura las preferencias locales y el hash de verificación de seguridad en el navegador.",
    permIdentity: "identity: Permite la autenticación segura OAuth2 al conectar su cuenta de Google Drive para la sincronización Pro.",
    permActiveTab: "activeTab: Permite arrastrar y soltar imágenes o archivos web directamente a la bóveda cifrada.",
    
    dataRetentionTitle: "1.4 Retención y Eliminación de Datos",
    dataRetentionP: "Al no almacenar datos en servidores externos, el borrado de sus archivos está totalmente en sus manos. Al eliminar su carpeta de bóveda local o la carpeta HiddenData_Vault en Google Drive, los datos se destruyen permanentemente.",

    secTermsTitle: "2. Términos de Servicio y Política de Reembolso",
    termsAcceptTitle: "2.1 Aceptación de los Términos",
    termsAcceptP: "Al descargar, instalar o utilizar HiddenData, usted acepta estos Términos de Servicio.",
    
    disclaimerTitle: "2.2 Advertencia de No Recuperabilidad de la Contraseña Maestra (Zero-Knowledge)",
    disclaimerWarning: "⚠️ ADVERTENCIA CRÍTICA: HiddenData implementa cifrado de Privacidad Absoluta (Zero-Knowledge) matemáticamente estricto. Si olvida su contraseña maestra, NO existe ninguna puerta trasera ni mecanismo de recuperación. Ni el desarrollador ni terceros pueden recuperar sus datos. La custodia de su contraseña es de su exclusiva responsabilidad.",
    
    licenseTitle: "2.3 Licencia Pro de por Vida",
    licenseP1: "HiddenData Pro se adquiere mediante pago único con licencia de por vida (Lifetime License), sin tarifas de suscripción periódicas.",
    licenseP2: "Tras completar el pago a través de Lemon Squeezy, se genera una licencia original permanente vinculada a su cuenta de Google. Esta licencia desbloquea Pro de forma permanente tanto en PC como en Android sin coste adicional.",
    
    refundTitle: "2.4 Garantía de Reembolso de 14 Días (Lemon Squeezy)",
    refundP1: "Cumplimos con las normativas de protección al consumidor de Lemon Squeezy (Merchant of Record).",
    refundP2: "Si dentro de los 14 días posteriores a la compra experimenta problemas técnicos que impidan el uso del software o no queda satisfecho, puede solicitar un reembolso completo.",
    refundLi1: "Cómo solicitarlo: Envíe un correo a truehoop81@gmail.com con su número de orden (Order ID) y el correo utilizado en la compra.",
    refundLi2: "Restricciones: La pérdida u olvido de su contraseña maestra no constituye un defecto del software y no califica para reembolso.",
    
    contactTitle: "2.5 Soporte y Contacto",
    contactP: "Para asistencia técnica o consultas sobre su licencia, escríbanos a:",
    contactEmail: "Correo oficial de soporte: truehoop81@gmail.com",
    
    footerTerms: "Términos y Política de Reembolso",
    footerPrivacy: "Política de Privacidad",
    footerCopyright: "© 2026 HiddenData Team. Todos los derechos reservados."
  },

  de: {
    pageTitle: "HiddenData - Datenschutzerklärung, AGB & Rückerstattungsrichtlinie",
    navHome: "← Zurück zur Startseite",
    navPrivacy: "Datenschutz",
    navTerms: "AGB & Rückerstattung",
    mainTitle: "Datenschutzerklärung, Nutzungsbedingungen & Rückerstattung",
    lastUpdated: "Zuletzt aktualisiert: 1. März 2026 | Gültig ab: 1. März 2026",
    
    secPrivacyTitle: "1. Datenschutzerklärung (Privacy Policy)",
    zkTitle: "1.1 Zero-Knowledge-Sicherheitsprinzip",
    zkP1: "HiddenData ('die Software') ist ein unabhängiges Zero-Knowledge-Medientresor-Studio, das für absolute Datensicherheit entwickelt wurde.",
    zkP2: "Die Software nutzt militärische AES-256-GCM-Verschlüsselung und unknackbaren Master-Passwort-Schutz. Ihr Master-Passwort, Entschlüsselungsschlüssel und Mediendateien verbleiben ausschließlich im Speicher Ihres lokalen Geräts und werden niemals an unsere Server gesendet. Niemand, auch nicht die Entwickler, kann Ihre Daten einsehen oder entschlüsseln.",
    
    gdriveTitle: "1.2 Google Drive API & Einhaltung der 'Limited Use'-Vorgaben",
    gdriveP1: "HiddenData verwendet die Google Drive REST API ausschließlich für das Cloud-Backup und die Synchronisation zwischen PC und Android-App.",
    gdriveP2: "Wir halten uns strikt an die Richtlinien für Nutzerdaten der Google API-Dienste und deren 'Limited Use'-Anforderungen:",
    gdriveLi1: "Prinzip der geringsten Rechte: Wir fordern nur den Bereich 'https://www.googleapis.com/auth/drive.file' an, der den Zugriff strikt auf von HiddenData erstellte .enc-Dateien und Konfigurationsdateien beschränkt.",
    gdriveLi2: "Kein Zugriff auf andere Dateien: Die Software hat keinerlei Zugriff auf andere persönliche Dokumente, Fotos oder Ordner in Ihrem Google Drive.",
    gdriveLi3: "Keine Weitergabe an Dritte & kein KI-Training: Google-Nutzerdaten werden weder an Dritte verkauft noch zum Trainieren von Modellen für künstliche Intelligenz (KI) verwendet.",
    
    permsTitle: "1.3 Berechtigungen der Chrome-Erweiterung",
    permsIntro: "Die PC Chrome-Erweiterung nutzt ausschließlich technisch erforderliche Berechtigungen:",
    permSidePanel: "sidePanel: Ermöglicht die komfortable Nutzung des Tresors über die Browser-Seitenleiste.",
    permStorage: "storage: Speichert lokale Einstellungen und den Sicherheits-Prüfhash sicher im Browser.",
    permIdentity: "identity: Gewährleistet sichere OAuth2-Authentifizierung bei der Verknüpfung mit Google Drive.",
    permActiveTab: "activeTab: Erleichtert das sichere Hinzufügen von Web-Bildern oder Dateien in den Tresor per Drag-and-Drop.",
    
    dataRetentionTitle: "1.4 Datenspeicherung & Löschung",
    dataRetentionP: "Da keine Daten auf unseren Servern gespeichert werden, liegt die Datenlöschung vollständig in Ihren Händen. Wenn Sie Ihren lokalen Tresor oder den HiddenData_Vault-Ordner auf Google Drive löschen, werden alle Daten unwiderruflich vernichtet.",

    secTermsTitle: "2. Nutzungsbedingungen & Rückerstattungsrichtlinie",
    termsAcceptTitle: "2.1 Zustimmung zu den Bedingungen",
    termsAcceptP: "Mit dem Herunterladen oder der Nutzung von HiddenData erklären Sie sich mit diesen Bedingungen einverstanden.",
    
    disclaimerTitle: "2.2 Warnung vor Unwiederbringlichkeit des Master-Passworts",
    disclaimerWarning: "⚠️ WICHTIGER HINWEIS: HiddenData basiert auf kompromissloser Zero-Knowledge-Verschlüsselung. Bei Verlust des Master-Passworts gibt es technisch KEINE Hintertür und KEINE Möglichkeit zur Wiederherstellung. Die Verantwortung für die Verwahrung des Passworts liegt allein beim Nutzer.",
    
    licenseTitle: "2.3 Pro Lebenslange Lizenz",
    licenseP1: "HiddenData Pro wird als Einmalkauf (Lifetime License) ohne wiederkehrende Abogebühren angeboten.",
    licenseP2: "Nach Abschluss des Kaufs über Lemon Squeezy wird eine dauerhafte Originallizenz ausgestellt, die an Ihr Google-Konto gebunden und auf PC und Android ohne Zusatzkosten gültig ist.",
    
    refundTitle: "2.4 14 Tage Geld-zurück-Garantie (Lemon Squeezy)",
    refundP1: "Wir halten uns vollständig an die Verbraucherschutzstandards von Lemon Squeezy (Merchant of Record).",
    refundP2: "Sollte die Software innerhalb von 14 Tagen nach dem Kauf technische Mängel aufweisen oder Sie nicht zufrieden sein, erstatten wir Ihnen den vollen Betrag zurück.",
    refundLi1: "Antragstellung: Senden Sie Ihre Bestellnummer und E-Mail-Adresse an truehoop81@gmail.com.",
    refundLi2: "Einschränkungen: Ein Verlust des Master-Passworts stellt keinen Softwaremangel dar und berechtigt nicht zur Rückerstattung.",
    
    contactTitle: "2.5 Entwickler-Support & Kontakt",
    contactP: "Bei Fragen oder technischen Problemen wenden Sie sich bitte an:",
    contactEmail: "Offizielle Support-E-Mail: truehoop81@gmail.com",
    
    footerTerms: "AGB & Rückerstattung",
    footerPrivacy: "Datenschutzerklärung",
    footerCopyright: "© 2026 HiddenData Team. Alle Rechte vorbehalten."
  },

  fr: {
    pageTitle: "HiddenData - Politique de Confidentialité, Conditions & Remboursement",
    navHome: "← Retour à l'Accueil",
    navPrivacy: "Confidentialité",
    navTerms: "Conditions & Remboursement",
    mainTitle: "Politique de Confidentialité, Conditions d'Utilisation & Remboursement",
    lastUpdated: "Dernière mise à jour : 1er mars 2026 | Date d'effet : 1er mars 2026",
    
    secPrivacyTitle: "1. Politique de Confidentialité (Privacy Policy)",
    zkTitle: "1.1 Architecture de Sécurité et Confidentialité Absolue (Zero-Knowledge)",
    zkP1: "HiddenData ('le Logiciel') est une solution de coffre-fort multimédia conçue selon une architecture Zero-Knowledge pour garantir une confidentialité absolue.",
    zkP2: "Le Logiciel utilise un chiffrement AES-256-GCM de haut niveau et une protection par mot de passe maître inviolable. Votre mot de passe maître, vos clés et vos fichiers bruts sont traités exclusivement dans la mémoire de votre appareil local et ne sont jamais envoyés à nos serveurs. Personne, y compris les développeurs, ne peut déchiffrer vos données.",
    
    gdriveTitle: "1.2 Utilisation de l'API Google Drive & Respect des Règles 'Limited Use'",
    gdriveP1: "HiddenData utilise l'API REST Google Drive uniquement pour la sauvegarde cloud et la synchronisation entre l'extension PC et l'application mobile Android.",
    gdriveP2: "Nous respectons rigoureusement la politique de données utilisateur des services API Google, y compris les exigences d'utilisation limitée (Limited Use) :",
    gdriveLi1: "Principe du moindre privilège : Nous ne demandons que l'autorisation 'https://www.googleapis.com/auth/drive.file', restreinte aux fichiers .enc et de configuration créés par HiddenData.",
    gdriveLi2: "Aucun accès à vos autres fichiers : Le Logiciel ne peut en aucun cas consulter ou modifier vos autres documents ou photos sur Google Drive.",
    gdriveLi3: "Ni revente ni entraînement d'IA : Les données Google ne sont jamais vendues à des tiers ni utilisées pour entraîner des modèles d'intelligence artificielle.",
    
    permsTitle: "1.3 Permissions de l'Extension Chrome",
    permsIntro: "L'extension PC Chrome ne requiert que les autorisations strictement indispensables :",
    permSidePanel: "sidePanel : Affiche le volet latéral pour consulter votre coffre sans interrompre votre navigation.",
    permStorage: "storage : Enregistre localement vos préférences et le hachage de vérification de sécurité.",
    permIdentity: "identity : Assure une authentification OAuth2 sécurisée lors de la connexion à Google Drive.",
    permActiveTab: "activeTab : Permet l'importation sécurisée d'images par glisser-déposer vers le coffre chiffré.",
    
    dataRetentionTitle: "1.4 Conservation & Suppression des Données",
    dataRetentionP: "Aucune donnée n'étant stockée sur nos serveurs, la suppression de vos données est entièrement sous votre contrôle. En supprimant votre dossier local ou le dossier HiddenData_Vault sur Google Drive, vos données sont définitivement détruites.",

    secTermsTitle: "2. Conditions d'Utilisation & Politique de Remboursement",
    termsAcceptTitle: "2.1 Acceptation des Conditions",
    termsAcceptP: "En téléchargeant ou en utilisant HiddenData, vous acceptez les présentes conditions.",
    
    disclaimerTitle: "2.2 Avertissement de Non-Récupération du Mot de Passe Maître",
    disclaimerWarning: "⚠️ AVERTISSEMENT CRUCIAL : HiddenData applique un chiffrement Zero-Knowledge absolu. En cas de perte de votre mot de passe maître, il n'existe techniquement AUCUNE porte dérobée ni possibilité de récupération. Vous êtes seul responsable de la conservation de votre mot de passe.",
    
    licenseTitle: "2.3 Licence Pro à Vie",
    licenseP1: "HiddenData Pro est proposé en achat unique avec licence à vie (Lifetime License), sans abonnement récurrent.",
    licenseP2: "Après validation du paiement via Lemon Squeezy, une licence authentique permanente liée à votre compte Google est délivrée, valable sur PC et Android sans frais supplémentaires.",
    
    refundTitle: "2.4 Garantie de Remboursement de 14 Jours (Lemon Squeezy)",
    refundP1: "Nous respectons pleinement les normes de protection des consommateurs de Lemon Squeezy (Merchant of Record).",
    refundP2: "Si un problème technique empêche l'utilisation du logiciel dans les 14 jours suivant l'achat, vous pouvez demander un remboursement intégral.",
    refundLi1: "Procédure : Envoyez votre numéro de commande et adresse e-mail à truehoop81@gmail.com.",
    refundLi2: "Restrictions : L'oubli du mot de passe maître ne constitue pas un défaut du logiciel et n'ouvre pas droit au remboursement.",
    
    contactTitle: "2.5 Contact & Support",
    contactP: "Pour toute question technique ou relative à votre licence, contactez-nous :",
    contactEmail: "E-mail de support officiel : truehoop81@gmail.com",
    
    footerTerms: "Conditions & Remboursement",
    footerPrivacy: "Politique de Confidentialité",
    footerCopyright: "© 2026 HiddenData Team. Tous droits réservés."
  },

  pt_BR: {
    pageTitle: "HiddenData - Política de Privacidade, Termos & Reembolso",
    navHome: "← Voltar ao Início",
    navPrivacy: "Privacidade",
    navTerms: "Termos & Reembolso",
    mainTitle: "Política de Privacidade, Termos de Serviço & Reembolso",
    lastUpdated: "Última atualização: 1 de março de 2026 | Data de vigência: 1 de março de 2026",
    
    secPrivacyTitle: "1. Política de Privacidade (Privacy Policy)",
    zkTitle: "1.1 Princípios de Segurança e Total Privacidade (Zero-Knowledge)",
    zkP1: "O HiddenData ('o Software') é uma solução de cofre de mídia criptografado projetada com arquitetura Zero-Knowledge para assegurar privacidade irrestrita.",
    zkP2: "O Software adota criptografia de ponta AES-256-GCM e proteção por senha mestra inviolável. Sua senha mestra, chaves e arquivos originais são processados exclusivamente na memória RAM local e nunca são enviados aos nossos servidores. Ninguém, nem mesmo os desenvolvedores, pode visualizar sua senha ou descriptografar seus dados.",
    
    gdriveTitle: "1.2 Uso da Google Drive API & Conformidade com Requisitos de Uso Limitado",
    gdriveP1: "O HiddenData utiliza a API do Google Drive exclusivamente para backup na nuvem e sincronização entre a extensão para PC e o aplicativo móvel Android.",
    gdriveP2: "Cumprimos rigorosamente a Política de Dados de Usuário dos Serviços de API do Google e as exigências de Uso Limitado (Limited Use):",
    gdriveLi1: "Princípio do menor privilégio: Solicitamos apenas o escopo 'https://www.googleapis.com/auth/drive.file', restrito aos arquivos .enc e de configuração criados diretamente pelo HiddenData.",
    gdriveLi2: "Sem acesso a outros arquivos: O Software não possui permissão para ler ou modificar qualquer outro documento ou foto do seu Google Drive.",
    gdriveLi3: "Sem venda a terceiros ou treinamento de IA: Dados do Google nunca são vendidos ou compartilhados com corretores de anúncios, nem usados para treinar Inteligência Artificial (IA).",
    
    permsTitle: "1.3 Permissões da Extensão Chrome",
    permsIntro: "A extensão para PC Chrome solicita apenas permissões estritamente necessárias:",
    permSidePanel: "sidePanel: Fornece a interface do painel lateral para acessar o cofre enquanto navega.",
    permStorage: "storage: Armazena com segurança preferências locais e o hash de verificação de segurança.",
    permIdentity: "identity: Permite autenticação OAuth2 segura para conexão com o Google Drive e sincronização Pro.",
    permActiveTab: "activeTab: Permite arrastar e soltar imagens web com segurança diretamente para o cofre criptografado.",
    
    dataRetentionTitle: "1.4 Retenção e Exclusão de Dados",
    dataRetentionP: "Como não guardamos dados de usuários em servidores remotos, a exclusão dos dados fica 100% em suas mãos. Ao apagar sua pasta local ou a pasta HiddenData_Vault no Google Drive, seus dados são permanentemente destruídos.",

    secTermsTitle: "2. Termos de Serviço & Política de Reembolso",
    termsAcceptTitle: "2.1 Aceitação dos Termos",
    termsAcceptP: "Ao baixar, instalar ou utilizar o HiddenData, você concorda com estes Termos de Serviço.",
    
    disclaimerTitle: "2.2 Aviso de Impossibilidade de Recuperação da Senha Mestra (Zero-Knowledge)",
    disclaimerWarning: "⚠️ AVISO CRÍTICO: O HiddenData adota criptografia Zero-Knowledge estrita. Se você esquecer sua senha mestra, tecnicamente NÃO existe nenhuma porta dos fundos ou método de recuperação. A guarda da sua senha é de sua inteira responsabilidade.",
    
    licenseTitle: "2.3 Licença Pro Vitalícia",
    licenseP1: "O HiddenData Pro é oferecido como pagamento único com licença vitalícia (Lifetime License), sem cobranças de assinatura periódica.",
    licenseP2: "Após a compra via Lemon Squeezy, uma licença original vitalícia vinculada à sua conta Google é emitida, ativando o Pro de forma permanente no PC e no Android sem taxas extras.",
    
    refundTitle: "2.4 Garantia de Reembolso de 14 Dias (Lemon Squeezy)",
    refundP1: "Seguimos integralmente as diretrizes de proteção ao consumidor da Lemon Squeezy (Merchant of Record).",
    refundP2: "Se houver defeito técnico que impeça o funcionamento ou se não estiver satisfeito em até 14 dias após a compra, você poderá solicitar o reembolso integral.",
    refundLi1: "Como solicitar: Envie seu número de pedido (Order ID) e e-mail da compra para truehoop81@gmail.com.",
    refundLi2: "Restrições: O esquecimento da senha mestra não constitui defeito do software e não qualifica para reembolso.",
    
    contactTitle: "2.5 Suporte do Desenvolvedor & Contato",
    contactP: "Para dúvidas ou suporte, entre em contato pelo e-mail:",
    contactEmail: "E-mail de suporte oficial: truehoop81@gmail.com",
    
    footerTerms: "Termos & Reembolso",
    footerPrivacy: "Política de Privacidade",
    footerCopyright: "© 2026 HiddenData Team. Todos os direitos reservados."
  }
};
