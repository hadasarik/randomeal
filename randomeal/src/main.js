let button = document.getElementById('pick-random')

button.onclick = function () {
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.executeScript(
            tab.id,
            {
                code: 'getRandomeal();'
            });
    });
    window.close();
};
