/**
 * HiddenData Early-Access Tester Quota Configuration
 * 
 * Set `isFull: true` when the 50-tester limit is reached on Google Play Console.
 * This dynamically disables the opt-in buttons on early-access.html and displays
 * the quota-exhausted notification banner directing users to standalone APK downloads.
 */
window.TESTER_CONFIG = {
  isFull: false,
  maxQuota: 50,
  currentCount: 24, // Current registered testers
  updatedAt: "2026-11-17",
  closedMessageKey: "earlyAccessClosedAlert",
  openMessageKey: "earlyAccessOpenNotice"
};
