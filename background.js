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


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
        checkAdsInterval();
        setInterval(checkAdsInterval, 2000);
    }
});