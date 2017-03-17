export default class SettingsMenu {
	constructor(menuCssClass) {
		this.SELECTED_CLASS = "selected";
		this.menuCssClass = menuCssClass;
		this.menu = document.getElementsByClassName(this.menuCssClass)[0];
		this.menuItems = this.menu.children;
		this.menu.addEventListener("click", (e) => {
			this.selectItem(e);
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