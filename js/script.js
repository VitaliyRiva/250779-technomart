	// Работа с модальным окном Вход
	var link = document.querySelector(".login");
	var popup = document.querySelector(".modal-content-login");
	var close = popup.querySelector(".modal-content-close");

	// Отлов действия у формы чтоб был заполнен Логин и пароль

	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]");
	if (window.localStorage) {
	var storageName = localStorage.getItem("login");
}
	// Открытие модального окна "Форма входа"
	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-content-show");

	// Хранилище
		if (storageName) {
			login.value = storageName;
			password.focus();
		} else {
			login.focus();
		}
	});
	// Закрытие модального окна на кнопку "Крестик"
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popup.classList.remove("modal-error");
	});

	//Отлов действия в форме на заполняемость Логина и Пароля
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
	// Закрытие на клавишу "ESC"
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
				popup.classList.remove("modal-content-show");
				popup.classList.remove("modal-error");
			}
		}
	});
	// Работа с модальным окном "Обратная связь"
	var feedbackform = document.querySelector(".write-us");
	var feedbackformpopup = document.querySelector(".modal-content-feedback");
	var feedbackformclose = feedbackformpopup.querySelector(".modal-content-close");
	var feedbackformsend = feedbackformpopup.querySelector("form");
	var feedbackformlogin = feedbackformpopup.querySelector("[name=user-name]");
	var feedbackformemail = feedbackformpopup.querySelector("[name=user-email]");
	if (window.localStorage) {
	var storageLogin = localStorage.getItem("login-name");
}
		// Открытие модального окна  "Обратная связь" и фокуса на поле Имя
	feedbackform.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackformpopup.classList.add("modal-content-show");
		feedbackformlogin.focus();
	});
		// Локальное хранилище
	feedbackform.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackformpopup.classList.add("modal-content-show");
		if (storageLogin) {
			feedbackformlogin.value = storageLogin;
			feedbackformemail.value = storageLogin;
			feedbackformemail.focus();
		} else {
			feedbackformlogin.focus();
		}
	});
	//Отлов действия в форме на заполняемость "Имени и Емэйла"
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
		// Закрытие модального окна
	feedbackformclose.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackformpopup.classList.remove("modal-content-show");
		feedbackformpopup.classList.remove("modal-error");
	});
	// Закрытие на клавишу ESC
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (feedbackformpopup.classList.contains("modal-content-show")) {
				feedbackformpopup.classList.remove("modal-content-show");
				feedbackformpopup.classList.remove("modal-error");
			}
		}
	});
	// Работа с модальным окном "Карта"
	var mapOpen = document.querySelector(".map");
	var mapPopup = document.querySelector(".modal-content-map");
	var mapClose = mapPopup.querySelector(".modal-content-close");

	// Открытие модального окна "Карта"
	mapOpen.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.add("modal-content-show");
	});
	// Закрытие модального окна на кнопку "Крестик"
	mapClose.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.remove("modal-content-show");
	});
		// Закрытие на клавишу "ESC"
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (mapPopup.classList.contains("modal-content-show")) {
				mapPopup.classList.remove("modal-content-show");
			}
		}
	});