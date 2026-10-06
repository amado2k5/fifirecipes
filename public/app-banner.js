/* FiFi Recipes — "also available as an app" banner.
 * Shows a dismissible bar at the top of the page when the visitor is on a
 * device that has a FiFi Recipes app: iPhone, iPad, Apple TV, Android, Fire TV. */
(function () {
  var APPS = {
    iphone:  { url: 'https://apps.apple.com/ca/app/fifi-recipes/id6817888908', store: 'App Store', icon: 'apple',
               en: 'FiFi Recipes is also an app for your iPhone', ar: 'وصفات فيفي متوفرة أيضاً كتطبيق لهاتف آيفون' },
    ipad:    { url: 'https://apps.apple.com/ca/app/fifi-recipes/id6817888908', store: 'App Store', icon: 'apple',
               en: 'FiFi Recipes is also an app for your iPad', ar: 'وصفات فيفي متوفرة أيضاً كتطبيق لجهاز آيباد' },
    tvos:    { url: 'https://apps.apple.com/ca/app/fifi-recipes-tv/id6817959251', store: 'App Store', icon: 'apple',
               en: 'FiFi Recipes is also an app for your Apple TV', ar: 'وصفات فيفي متوفرة أيضاً كتطبيق لجهاز Apple TV' },
    android: { url: 'https://android.fifi.cooking/', store: 'Google Play', icon: 'play',
               en: 'FiFi Recipes is also an app for your Android device', ar: 'وصفات فيفي متوفرة أيضاً كتطبيق لجهاز أندرويد' },
    firetv:  { url: 'https://www.amazon.ca/dp/B0HLH9TNRB', store: 'Amazon Appstore', icon: 'amazon',
               en: 'FiFi Recipes is also an app for your Fire TV', ar: 'وصفات فيفي متوفرة أيضاً كتطبيق لجهاز Fire TV' }
  };
  var ICONS = {
    apple: '<path fill="currentColor" d="M12.15 6.9c-.95 0-2.42-1.08-3.96-1.04-2.04.03-3.91 1.18-4.96 3.01-2.12 3.68-.55 9.1 1.52 12.09 1.01 1.45 2.21 3.09 3.79 3.04 1.52-.07 2.09-.99 3.94-.99 1.83 0 2.35.99 3.96.95 1.64-.03 2.68-1.48 3.68-2.95 1.16-1.69 1.64-3.33 1.66-3.42-.04-.01-3.18-1.22-3.22-4.86-.03-3.04 2.48-4.49 2.6-4.56-1.43-2.09-3.62-2.32-4.39-2.38-2-.16-3.68 1.09-4.61 1.09zm3.38-3.07c.84-1.01 1.4-2.43 1.25-3.83-1.21.05-2.66.8-3.53 1.82-.78.9-1.45 2.34-1.27 3.71 1.34.1 2.72-.69 3.56-1.7z" transform="scale(.9) translate(1 -1)"/>',
    play: '<path fill="#00d2ff" d="M3.6 1.5 13.7 12 3.6 22.5c-.4-.3-.6-.8-.6-1.4V2.9c0-.6.2-1.1.6-1.4z"/><path fill="#00f076" d="m17.1 8.5-3.4 3.5L3.6 1.5c.4-.2.9-.2 1.5.1z"/><path fill="#ff3a44" d="m17.1 15.5-12 6.9c-.6.3-1.1.3-1.5.1L13.7 12z"/><path fill="#ffd500" d="m20.6 10.2-3.5-1.7-3.4 3.5 3.4 3.5 3.5-1.9c1.1-.7 1.1-2.7 0-3.4z"/>',
    amazon: '<path fill="currentColor" d="M2 16.6c.2-.3.5-.3.9-.1 2.7 1.6 5.7 2.4 8.9 2.4 2.1 0 4.2-.4 6.2-1.2l.5-.2c.3-.1.6-.2.7.1.2.4-.1.6-.5.9-1.8 1.3-4.5 2-6.8 2-3.3 0-6.3-1.2-8.7-3.3-.3-.2-.3-.4-.2-.6zm18.2-.9c-.4-.5-2.4-.3-3.3-.2-.3 0-.3-.2-.1-.4 1.600-1.100 4.200-.8 4.500-.4.300.4-.1 3-1.600 4.200-.2.200-.4.100-.3-.1.300-.800 1.100-2.600.8-3.100zM12.3 4.800c-2.400 0-5 1.100-5 4.200 0 2 1.100 3.300 2.700 3.300 1.200 0 1.900-.4 2.600-1.200.3.600.5.900 1 1.400.1.100.3.100.4 0l1.400-1.300c.1-.1.100-.3 0-.4-.4-.5-.8-1-.8-2V6.600c0-1.100-.9-1.800-2.300-1.800zm.2 5.500c-.4.700-.9 1.100-1.500 1.100-.8 0-1.200-.6-1.200-1.500 0-1.800 1.500-2.100 2.700-2.100v.7c0 .7 0 1.200 0 1.800z"/>'
  };

  function detect() {
    var ua = navigator.userAgent || '';
    if (/AppleTV|tvOS/i.test(ua)) return 'tvos';
    if (/\bAFT[A-Z0-9]*\b/.test(ua)) return 'firetv';
    if (/iPad/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ipad';
    if (/iPhone|iPod/.test(ua)) return 'iphone';
    // Fire tablets run Fire OS and cannot install from Google Play.
    if (/Android/.test(ua) && !/Silk|\bKF[A-Z]{2,}\b/.test(ua)) return 'android';
    return null;
  }

  function dismissed() {
    try { var t = +localStorage.getItem('fifi-app-banner-dismissed'); return t && Date.now() - t < 30 * 864e5; }
    catch (e) { return false; }
  }

  function show() {
    var kind = detect();
    if (!kind || dismissed() || document.getElementById('fifi-app-banner')) return;
    var app = APPS[kind];
    var ar = /^ar|^ur|^fa|^ku|^ps|^he/i.test(document.documentElement.lang || '');
    var text = ar ? app.ar : app.en;
    var cta = ar ? 'افتح' : (kind === 'android' ? 'Get it' : 'View');
    var bar = document.createElement('div');
    bar.id = 'fifi-app-banner';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'FiFi Recipes app');
    bar.setAttribute('dir', ar ? 'rtl' : 'ltr');
    bar.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fdf4e3;' +
      'border-bottom:1.5px solid #f0e2c8;color:#43311f;font:600 14px/1.3 -apple-system,"Segoe UI",Roboto,sans-serif;position:relative;z-index:1000';
    bar.innerHTML =
      '<button type="button" aria-label="' + (ar ? 'إغلاق' : 'Close') + '" style="all:unset;cursor:pointer;font-size:22px;line-height:1;padding:4px 6px;color:#6f5b41">&times;</button>' +
      '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" style="flex:none;color:#43311f">' + ICONS[app.icon] + '</svg>' +
      '<span style="flex:1;min-width:0">' + text + '<br><span style="font-weight:500;color:#6f5b41;font-size:12px">' + app.store + '</span></span>' +
      '<a href="' + app.url + '" style="flex:none;background:#4d9426;color:#fff;text-decoration:none;border-radius:999px;padding:7px 16px;font-weight:700">' + cta + '</a>';
    bar.querySelector('button').addEventListener('click', function () {
      try { localStorage.setItem('fifi-app-banner-dismissed', String(Date.now())); } catch (e) {}
      bar.remove();
    });
    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show); else show();
})();
