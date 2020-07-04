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
    var checkgen = document.getElementById('styleselect2').value;
    if (checkgen === '2')
        prev.src = "DJ_JOKER_REMIX(256k).mp3";
    else if (checkgen === '1')
        prev.src = "BTS - Fake Love.mp3";
    else if (checkgen === '3')
        prev.src = "01 - How You Like That.mp3";
}
function myplaylist() {
    var val = document.getElementById("input").value;
    var h4 = document.createElement('h4');
    h4.innerText = val;
    var li = document.querySelector("#playlisttag");
    li.append(h4);
}
function ratingcalculate() {
    var rate = document.getElementById("styleselect").value;
    var comment = document.getElementById("inputcomment").value;
    var h4 = document.createElement('h4');
    h4.innerText = "rating:" + rate + "/5";
    var anotherh4 = (document.createElement('h4'));
    anotherh4.innerText = '"' + comment + '".';
    var li = document.querySelector("#commentlist");
    li.append(h4);
    li.append(anotherh4);
}
