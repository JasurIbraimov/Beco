// window.addEventListener('DOMContentLoaded', () => {
	const sideBar = document.querySelector('.sidebar');
	const sideBarItems = sideBar.querySelectorAll('.sidebar__item');
	const header =	document.querySelector('.header');
	const headerTitle = header.querySelector('.header__title');
	const sideBarCloseBtn = sideBar.querySelector('.sidebar__close');
	const overlay = sideBar.querySelector('.sidebar__overlay');
	
	// set active class to SideBarItem
	function removeActiveClass() {
		sideBarItems.forEach(item => {
			item.classList.remove('sidebar__item_active')
		});
	}
	function addActiveClass(i = 0) {
		sideBarItems[i].classList.add('sidebar__item_active');
	}

	addActiveClass();
	sideBar.addEventListener('click', (e) => {
		const target = e.target;
		if(target && (target.classList.contains('sidebar__item')) || target.parentNode.classList.contains('sidebar__item')) {
			sideBarItems.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					removeActiveClass();
					addActiveClass(i);
					setHeaderTitle(item);
				}

			})
		}
	})

	// Change Header Title
	function setHeaderTitle(item) {
		headerTitle.textContent = item.querySelector('.sidebar__item-title').textContent
	}
	
	// Show or hide sidebar depending on the screen width
	function toggleVisibilityOfSideBar(activeClass) {
		sideBarCloseBtn.addEventListener('click', () => {
			if(sideBar.classList.contains(activeClass)) {
				sideBar.classList.remove(activeClass);
			} else {
				sideBar.classList.add(activeClass)
			}
		});
	}

	// Click on overlay hides the sidebar
	function hideSideBar(activeClass) {
		overlay.addEventListener('click', () => {
			if(sideBar.classList.contains(activeClass)) {
				sideBar.classList.remove(activeClass)
			}
		});
	}
	if(document.body.offsetWidth <= 768 && document.body.offsetWidth > 320) {
		toggleVisibilityOfSideBar('show');
		hideSideBar('show');
	} else if (document.body.offsetWidth <= 320) {
		toggleVisibilityOfSideBar('show-slightly')
		hideSideBar('show-slightly');
	}

	// Onscroll with 320px width screen
	if(document.body.offsetWidth <= 320) {
		window.addEventListener('scroll', () => {
			header.classList.add('onscroll');
			if(window.pageYOffset == 0) {
				header.classList.remove('onscroll');
			}
		}) 
	}
// });

