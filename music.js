var playlist = /** @class */ (function () {
    function playlist(name) {
        this.playlist_name = name;
    }
    playlist.prototype.getplaylistname = function () {
        return this.playlist_name;
    };
    return playlist;
}());
var addplaylist = document.querySelector("#playlist");
addplaylist.addEventListener('click', function () {
    var input = document.createElement('input');
    var button = document.createElement('button');
});
function myFunctionP1() {
    var prev = document.getElementById('audio_button');
    prev.src = "http://www.afinerweb.com/music/bensound-slowmotion.1.mp3";
}
function myFunctionP2() {
    var next = document.getElementById('audio_button');
    next.src = "http://www.afinerweb.com/music/bensound-slowmotion.2.mp3";
}
function myFunctionP3() {
    var play = document.getElementById('audio_button');
    play.src = "BTS - Fake Love.mp3";
}
function myplaylist() {
    var val = document.getElementById("input").value;
    var h4 = document.createElement('h4');
    h4.innerText = val;
    var li = document.querySelector("#playlisttag");
    li.append(h4);
}
