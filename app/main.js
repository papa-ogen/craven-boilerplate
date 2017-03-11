import Menu from "./js/mm-menu.js"
import SettingsMenu from "./js/mm-settings-menu.js"

require('./styles/magicmirror.scss');

(function () {
    let menu = new Menu("sub-nav", "content", "mirror");
    let settingsMenu = new Menu("mirror-settings-menu");
})();