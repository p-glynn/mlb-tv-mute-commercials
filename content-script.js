function checkAdsInterval() {
    if (sessionStorage.getItem('mlbtvMuteCommercialsExtensionActive') != 'true') {
        return;
    }

    const mediaControls = document.querySelector('.mlbtv-media-controls');
    const commercialsClass = 'mlbtv-media-controls--ads-controls';
    const video = document.querySelector(".mlbtv-media-player > video");
    const hasCommercialsClass = mediaControls.classList.contains(commercialsClass);

    if (hasCommercialsClass) {
        video.muted = true;
    } else {
        video.muted = false;
    }
}




chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let { extensionActive } = request;
        if (extensionActive) {
            setInterval(checkAdsInterval, 2000);
        }
        sessionStorage.setItem('mlbtvMuteCommercialsExtensionActive', extensionActive);
        sendResponse({ extensionActive: extensionActive });
        return true; // to send response correctly
    }
);
