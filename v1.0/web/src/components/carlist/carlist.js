import $ from 'jquery'

var ws;
ws = new WebSocket("ws://10.3.131.7:888");
ws.onmessage = function(_msg){
    // console.log(_msg.data);
}