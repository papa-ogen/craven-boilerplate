import Menu from "./js/mm-menu.js"
import SettingsMenu from "./js/mm-settings-menu.js"
import Headroom from "./js/headroom.js"

require('./styles/magicmirror.scss');

(function () {
    var myElement = document.querySelector("header");
    var headroom  = new Headroom(myElement);

    headroom.init(); // http://wicky.nillia.ms/headroom.js/

    let menu = new Menu("sub-nav", "content", "mirror");
    let settingsMenu = new SettingsMenu("mirror-settings-menu");
})();