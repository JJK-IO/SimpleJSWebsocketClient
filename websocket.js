
var wsUri = "wss://localhost:8765/";
var websocket;

function openSocket() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function (evt) {
        onOpen(evt);
    };

    websocket.onclose = function (evt) {
        onClose(evt);
    };

    websocket.onmessage = function (evt) {
        onMessage(evt);
    };

    websocket.onerror = function (evt) {
        onError(evt);
    };
}

function sendData(json) {
    websocket.send(json);
}

function onOpen(evt) {
    console.log("CONNECTED");
}

function onClose(evt) {
    console.log("DISCONNECTED");
}

function onMessage(evt) {
    console.log('RESPONSE:');
    console.log(evt.data);
}

function onError(evt) {
    console.log('ERROR:');
    console.log(evt.data);
}

window.addEventListener("load", init, false);
