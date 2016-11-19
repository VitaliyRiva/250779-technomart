	var link = document.querySelector(".login");
	var popup = document.querySelector(".modal-content-login");
	var close = popup.querySelector(".modal-content-close");
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]");
	var storage = localStorage.getItem("login");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-content-show");

	if (storage) {
	login.value = storage;
	password.focus();
	} else {
	login.focus();
	}
});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function(event) {
		if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		} else {
		localStorage.setItem("login", login.value);
		}
	});

		window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
			}
		}
	});
	var catalogbuy = document.querySelectorAll(".buy");
	var catalogbuypopup = document.querySelector(".modal-content-cart");
	var catalogbuyclose = catalogbuypopup.querySelector(".modal-content-close");
	var catalogbuychekout = catalogbuypopup.querySelector(".checkout");
	var catalogbuycontshopp = catalogbuypopup.querySelector(".contshopp");

	for (var i = 0; i < catalogbuy.length; i++) {
		catalogbuy[i].addEventListener("click", function(event) {
		event.preventDefault();
	catalogbuypopup.classList.add("modal-content-show");
	});
	}
		catalogbuychekout.addEventListener("click", function(event) {
		event.preventDefault();
		catalogbuypopup.classList.remove("modal-content-show");
	});
		catalogbuycontshopp.addEventListener("click", function(event) {
		event.preventDefault();
		catalogbuypopup.classList.remove("modal-content-show");
	});
		catalogbuyclose.addEventListener("click", function(event) {
		event.preventDefault();
		catalogbuypopup.classList.remove("modal-content-show");
	});
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (catalogbuypopup.classList.contains("modal-content-show")) {
			catalogbuypopup.classList.remove("modal-content-show");
			}
		}
	});
	var feedbackform = document.querySelector(".write-us");
	var feedbackformpopup = document.querySelector(".modal-content-feedback");
	var feedbackformclose = feedbackformpopup.querySelector(".modal-content-close");
	var feedbackformsend = feedbackformpopup.querySelector("form");
	var feedbackformlogin = feedbackformpopup.querySelector("[name=user-name]");
	var feedbackformemail = feedbackformpopup.querySelector("[name=user-email]");
	var storage = localStorage.getItem("login-name");

		feedbackform.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackformpopup.classList.add("modal-content-show");
		feedbackformlogin.focus();
	});
	feedbackform.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackformpopup.classList.add("modal-content-show");
		if (storage) {
		login.value = storage;
		password.focus();
		} else {
		login.focus();
		}
	});
		feedbackformsend.addEventListener("submit", function(event) {
			if (!feedbackformlogin.value || !feedbackformemail.value) {
			event.preventDefault();
			feedbackformpopup.classList.remove("modal-error");
			feedbackformpopup.offsetWidth = feedbackformpopup.offsetWidth;
			feedbackformpopup.classList.add("modal-error");
		} else {
		localStorage.setItem("login-name", feedbackformlogin.value);
		}
	});
	feedbackformclose.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackformpopup.classList.remove("modal-content-show");
		feedbackformpopup.classList.remove("modal-error");
	});
		window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (feedbackformpopup.classList.contains("modal-content-show")) {
			feedbackformpopup.classList.remove("modal-content-show");
			feedbackformpopup.classList.remove("modal-error");
			}
		}
	});
	var mapOpen = document.querySelector(".map");
	var mapPopup = document.querySelector(".modal-content-map");
	var mapClose = mapPopup.querySelector(".modal-content-close");

	mapOpen.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.add("modal-content-show");
	});
	mapClose.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.remove("modal-content-show");
	});
		window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
			}
		}
	});