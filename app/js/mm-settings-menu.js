export default class SettingsMenu {
	constructor(menuCssClass) {
		this.SELECTED_CLASS = "selected";
		this.CONTENT_CLASS = "content-header-list";
		this.menuItems = this.getMenuItems();
		// this.contentItems = this.getContentItems();
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

	// getContentItems() {
	// 	let items = document.getElementsByClassName(this.contentCssClass);
		
	// 	return items;
	// }	

	selectItem(e) {
		e.preventDefault();

		let item = e.target;
		let el = null;

		if (item.tagName !== 'li') {
				el = item.closest("li")
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