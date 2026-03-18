const nav = document.querySelector(".nav__hidden");
const burgerBtn = document.querySelector(".burger-btn");
const navItem = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.toggle("nav__hidden--active");

	navBtnBars.classList.remove("black-bars-color");

	navItem.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav__hidden--active");
		});
	});
	navItemAnimation();
};

const navItemAnimation = () => {
	let delayTime = 0;

	navItem.forEach((item) => {
		item.classList.toggle("nav-items-animation");
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

burgerBtn.addEventListener("click", handleNav);
handleCurrentYear();

window.addEventListener("scroll", handleObserver);
