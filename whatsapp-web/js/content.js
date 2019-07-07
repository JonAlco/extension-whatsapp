// get the URL of the page
var url = document.location.href;

console.log(url);
// if not on a docs.microsoft.com domain
if (url.indexOf("//docs.microsoft.com") <= -1) {
    // send inactive icons
    browser.runtime.sendMessage({
        "iconPath20": "images/icons-whatsapp-off-20.png",
        "iconPath40": "images/icons-whatsapp-off-40.png"
    });
}