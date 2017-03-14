export default class SettingsMenu {
	constructor(menuCssClass) {
		this.SELECTED_CLASS = "selected";
		this.CONTENT_CLASS = "content-header-list";
		this.menuCssClass = menuCssClass;
		this.menuItems = this.getMenuItems();
		this.addClickEvent();
	}   

	addClickEvent() {
		let menu = document.getElementsByClassName(this.menuCssClass)[0];
		menu.addEventListener("click", (e) => {
			this.selectItem(e);
		});
	}

	getMenuItems() {
		let menu = document.getElementsByClassName(this.menuCssClass)[0];
		let items = menu.getElementsByTagName("li");
		
		return items;
	}

	selectItem(e) {
		e.preventDefault();

		let item = e.target;
		let el = null;

		if (item.tagName !== 'li') {
				el = item.closest("li")
		}

		if(el.classList.contains(this.SELECTED_CLASS)) {
			el.classList.remove(this.SELECTED_CLASS);	

			// Update content
			for(const child of el.childNodes) {
				if(child.nodeName === "DIV") {
					child.style.display = "none";
				}

			}

			return;			
		}

		// Update menu
		for(const item of this.menuItems) {
			if(item !== el) {
				item.classList.remove(this.SELECTED_CLASS);
				item.getElementsByClassName(this.CONTENT_CLASS)[0].style.display = "none";
				
			} else {
				item.classList.add(this.SELECTED_CLASS);
			}

		}

		// Update content
		for(const child of el.childNodes) {
			if(child.nodeName === "DIV") {
				child.style.display = "block";
			}

		}

	}
} 