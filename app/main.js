import Menu from "./js/mm-menu.js"
import SettingsMenu from "./js/mm-settings-menu.js"
import ModuleSettings from "./js/mm-module-settings.js"
import Headroom from "./js/headroom.js"

import styles from './styles/magicmirror.scss';

(function () {
    var myElement = document.querySelector("header");
    var headroom  = new Headroom(myElement);

    headroom.init(); // http://wicky.nillia.ms/headroom.js/

    let menu = new Menu("sub-nav", "content", "profile");
    let settingsMenu = new SettingsMenu("mirror-settings-menu");
    
    // Module Settings
    let modules = document.getElementsByClassName("module");

    [].forEach.call(modules, function (module) {
        new ModuleSettings(module);
    });
})();