chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let { extensionActive } = request;
        // if (extensionActive) {
        //     checkAdsInterval();
        //     setInterval(checkAdsInterval, 2000);
        // }
        sessionStorage.setItem('mlbtvMuteCommercialsExtensionActive', extensionActive);
        sendResponse({ extensionActive: extensionActive });
        return true; // to send response correctly
    }
);
