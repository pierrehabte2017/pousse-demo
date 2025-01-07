
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/polyfills.CqZeYl46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/app.BlLlWdjy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/VaultedContact.GKz1rs78.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DeliveryMethodSelectorSection.CQAnaBon.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useUnauthenticatedErrorModal.Bq_dQLAW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/AmazonPayPCIButton.C7anrLez.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/CheckoutAsGuest.DkNYG4P7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useRefEffect.C4uVLD6s.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayLogo.pjQlxH-5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PickupPointCarrierLogo.CyLGjkCu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/hooks.Dq-iwL9p.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LocalizationExtensionField.CvD1mdtV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useShowShopPayOptin.L7mNNMLD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Rollup.CpBOhDpB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useShopPayRequiresVerification.DTL_w_F_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Section.yC5ogepv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/GooglePayPCIButton.XoXc5E0Y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PayButtonSection.BaTEyzDH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/RageClickCapture.tPF2f_c_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useInstallmentsErrorHandler.DJk3818B.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index.DuQzt2fb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DutyOptions.BRprNR1T.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/SubscriptionPriceBreakdown.CwmT_DoA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useAmazonContact.9DkyFutf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/StockProblemsLineItemList.DWHDrFy1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useGetBuyWithPrimeCheckoutSessionId.CynxJPq1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index.C0zryze5.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/app.BtDbFeTa.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/VaultedContact.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/DeliveryMethodSelectorSection.Gt99Mw9F.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/CheckoutAsGuest.CUoq2pCx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/Rollup.mj3hAev9.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/1063/7402/files/id-pousse_2_x320.svg?v=1683035592"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  