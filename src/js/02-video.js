import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.on('timeupdate', throttle(onUpdate, 1000));
function onUpdate(data) {
    localStorage.setItem(KEY, data.seconds.toString());
}
try {
    player.setCurrentTime(localStorage.getItem(KEY));
} catch (error) {
    error;
}
