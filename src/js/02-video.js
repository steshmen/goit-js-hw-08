import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 


player.on('timeupdate', throttle(onUpdate, 1000));
function onUpdate(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}
player.setCurrentTime(JSON.parse(localStorage.getItem(KEY)).seconds || 0);
