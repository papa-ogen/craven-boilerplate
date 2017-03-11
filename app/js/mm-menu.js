export default class Menu {
	constructor(menuCssClass, contentCssClass, selectedId = null) {
		this.SELECTED_CLASS = "selected";
		this.menuCssClass = menuCssClass;
		this.contentCssClass = contentCssClass;
		this.selectedId = selectedId;
		this.menuItems = this.getMenuItems();
		this.contentItems = this.getContentItems();
		this.addClickEvent();

		if(this.selectedId) {
			// Update menu
			for(const item of this.menuItems) {

				if(item.dataset.navId === this.selectedId) {
					item.classList.add(this.SELECTED_CLASS);
				} else {
					item.classList.remove(this.SELECTED_CLASS);
				}

			}

			// Update content
			for(const content of this.contentItems) {

				if(content.dataset.contentId === this.selectedId) {
					content.style.display = "block";

				} else {
					content.style.display = "none";

				}
			}
		}
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

	getContentItems() {
		let items = document.getElementsByClassName(this.contentCssClass);
		
		return items;
	}	

	selectItem(e) {
		e.preventDefault();

		let item = e.target;
		let el = null, id = null;

		if (item.tagName !== 'li') {
				el = item.closest("li")
				id = el.dataset.navId;
		}

		if(el.classList.contains(this.SELECTED_CLASS)) return;

		// Update menu
		for(const item of this.menuItems) {

			if(item !== el) {
				item.classList.remove(this.SELECTED_CLASS);
			} else {
				item.classList.add(this.SELECTED_CLASS);
			}

		}

		// Update content
		for(const content of this.contentItems) {

			if(content.dataset.contentId === id) {
				content.style.display = "block";

			} else {
				content.style.display = "none";

			}
		}

	}
} 