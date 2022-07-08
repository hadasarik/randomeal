let button = document.getElementById('pick-random')

button.onclick = function () {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['src/content.js'],
        });
    });
    window.close();
};
