/*
 * Currently disabled and currently using CSS only
*/
export default class ModuleSettings {
	constructor(module) {
		this.MODULE_CLASS = "module";
		this.SELECTED_CLASS = "module-settings-display";
		this.SETTINGS_CLASS = "module-settings";
		this.module = module;
		this.module.addEventListener("click", (e) => {
			// this.selectItem(e);
		});
	}   

	selectItem(e) {
		e.preventDefault();

		let item = e.target;
		let el = null;

		if (item.tagName !== 'li') {
				el = item.closest("li")
		}

		// If selected remove class and hide content
		if(el.classList.contains(this.SELECTED_CLASS)) {
			el.classList.remove(this.SELECTED_CLASS);	

			return;			
		}

		// Update menu
		for(const item of this.menuItems) {
			if(item !== el) {
				item.classList.remove(this.SELECTED_CLASS);
				
			} else {
				item.classList.add(this.SELECTED_CLASS);
			}

		}

	}
} 