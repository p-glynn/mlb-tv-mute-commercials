// mutation observer not working on mlb.com for some reason
function commercialsObserver() {
    console.log('here')
    var foo = sessionStorage.getItem('mlbtvMuteCommercialsExtensionActive') == 'true'
    if (!sessionStorage.getItem('mlbtvMuteCommercialsExtensionActive') == 'true') {
        return;
    }

    const mediaControls = document.querySelector('.mlbtv-media-controls');
    const commercialsClass = 'mlbtv-media-controls--ads-controls';
    const video = document.querySelector('.mlbtv-media-player > video');

    
    const observer = new MutationObserver(function(mutations) {
        console.log(mutations)
        mutations.forEach(function(mutation) {
            console.log(mutation)
            if (mutation.attributeName === 'class') {
                let hasCommercialsClass = mediaControls.classList.contains(commercialsClass);
                console.log(hasCommercialsClass);
                // var newClassState = mutation.target.classList.contains(commercialsClass);
                // if (hasCommercialsClass !== newClassState) {
                //     hasCommercialsClass = newClassState;
                //     if (newClassState)
                //         console.log("class added!");
                //     else
                //         console.log("class removed!");
                //     }
                // }
            }
        });
    });

    observer.observe(document.querySelector('.mlbtv-media-controls'), {
        attributes: true,
        attributeFilter: ['class']
    });
}


function getOrSetCachedValue(propName) {
    let sessionValue = sessionStorage.getItem(propName);
    if (sessionValue && sessionValue != 'null') {
        console.log(' has session value')
        return sessionValue;
    } else {
        switch (propName) {
            case 'mediaControls':
                sessionValue = document.querySelector('.mlbtv-media-controls').outerHTML;
                break;
            case 'commercialsClass':
                sessionValue = 'mlbtv-media-controls--ads-controls';
                break;
            case 'video':
                sessionValue = document.querySelector(".mlbtv-media-player > video").outerHTML;
                break;
            default:
                break;
        }
        sessionStorage.setItem(propName, sessionValue);
        return sessionValue;
    }
}