document.getElementById("js-mlbtv-mute-activate").addEventListener("click", activateHandler);
document.getElementById("js-mlbtv-mute-deactivate").addEventListener("click", deactivateHandler);

function activateHandler() {
    sessionStorage.setItem('extensionActive', true);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {extensionActive: true}, function(response) {
            console.log(response);
        });
    });
}

function deactivateHandler() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {extensionActive: false}, function(response) {
            console.log(response);
        });
    });
}