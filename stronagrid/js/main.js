const burgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-mobile");
const navLink = document.querySelectorAll(".nav__link");
const burgerColor = document.querySelector(".hamburger-inner");
const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const navOpen = () => {
	burgerIcon.classList.toggle("is-active");
	nav.classList.toggle("nav-mobile--active");

	navLink.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav-mobile--active");
		});
	});

	navLink.forEach((item) => {
		item.addEventListener("click", () => {
			burgerIcon.classList.remove("is-active");
		});
	});
};

function colorSwap() {
	burgerColor.classList.toggle("hamburger--darkColor");

	navLink.forEach((item) => {
		item.addEventListener("click", () => {
			burgerColor.classList.remove("hamburger--darkColor");
		});
	});
}
burgerIcon.addEventListener("click", colorSwap);

handleCurrentYear();
burgerIcon.addEventListener("click", navOpen);
