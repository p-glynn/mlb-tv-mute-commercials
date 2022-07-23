function checkAds() {
    const mediaControls = getOrSetCachedValue('mediaControls');
    const commercialsClass = getOrSetCachedValue('commercialsClass');
    const video = getOrSetCachedValue('video');
    var hasCommercialsClass = mediaControls.classList.contains(commercialsClass);
    if (hasCommercialsClass) {
        video.muted = true;
    } else {
        video.muted = false;
    }
}



function getOrSetCachedValue(propName) {
    var windowValue = window[propName];
    if (windowValue) {
        return windowValue;
    } else {
        var returnValue;
        switch (propName) {
            case 'mediaControls':
                window.mediaControls = document.querySelector('.mlbtv-media-controls');
                returnValue = window.mediaControls;
                break;
            case 'commercialsClass':
                window.commercialsClass = 'mlbtv-media-controls--ads-controls';
                returnValue = window.commercialsClass;
                break;
            case 'video':
                window.video = document.querySelector(".mlbtv-media-player > video");
                returnValue = window.video;
            default:
                break;
        }
        return returnValue;
    }
}



setInterval(checkAds, 1000);
