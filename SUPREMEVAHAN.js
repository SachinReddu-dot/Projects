'use strict';


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) 
{
	navToggler[i].addEventListener("click", function () {
		navbar.classList.toggle("active");
		ovrelay.classList.toggle("active");
	});
}

for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function () {
		navbar.classList.remove("active");
		overlay.classList.remove("active");
	});
}




const header = document.queryselector("[data-header]");
const backtopbtn - document.queryselector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
	if (window.scrollY > 100) 
		{
			.classList.add("active");
			backtopbtn.classList.add("active");
		} 
	else 
		{
			header.classList.remove("active");
			backtopbtn.classList.remove("active");
		}
});