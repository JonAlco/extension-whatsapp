// get the buttons by id
// let aliceblue = document.getElementById('aliceblue');
// let cornsilk = document.getElementById('cornsilk');
// let reset = document.getElementById('reset');

// use tabs.insertCSS to change header color on button click

// aliceblue
// aliceblue.onclick = () => {
//   browser.tabs.insertCSS({code: "body { background: aliceblue !important; }"});
// };

// // cornsilk
// cornsilk.onclick = () => {
//   browser.tabs.insertCSS({code: "body { background: cornsilk !important; }"});
// };

// // back to original
// reset.onclick = () => {
//   browser.tabs.insertCSS({code: "body { background: none !important; }"});
// };

//window.location.href = 'https://web.whatsapp.com/';

if ( "Notification" in window ) {
    let ask = Notification.requestPermission();

    ask.then( permissions => {
        if (permissions === "granted") {
        let message = new Notification ("Title", { body: "Hello Nurse", icon: "icons/icon.png" });

        }
    });
}