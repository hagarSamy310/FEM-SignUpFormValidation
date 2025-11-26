const form = document.getElementById("form");
const subscribeButton = document.getElementById("subscription-btn");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));
	const validEmail = /^[\w.-]+\@[A-Za-z0-9-.]+\.[A-Za-z]{2,}$/;
	validEmail.test(data.email) ? showSuccessMessage() : showError();
});

function showSuccessMessage() {
	const pageComponents = document.querySelectorAll(".image-wrapper, .content");
	pageComponents.forEach((component) => {
		component.style.display = "none";
	});
	document.querySelector(".success").style.display = "flex";
	document.querySelector('main').classList.add('success-state');
	document.querySelector('#user-email').textContent = emailInput.value;
}

function showError() {
	emailInput.classList.add("error");
	document.getElementById("error-msg").style.opacity = "1";

	emailInput.addEventListener("input", () => {
		emailInput.classList.remove("error");
		document.getElementById("error-msg").style.opacity = "0";
	});
}

function backToMainPage () {
	const pageComponents = document.querySelectorAll(".image-wrapper, .content");
	pageComponents.forEach((component) => {
		component.style.display = "block";
	});
	document.querySelector(".success").style.display = "none";
	document.querySelector('main').classList.remove('success-state')
}

document.getElementById('dismiss-btn').addEventListener('click', backToMainPage);
