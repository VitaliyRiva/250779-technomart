	// Работа с модальным окном при клике у товара на "Купить"
	var catalogbuy = document.querySelectorAll(".buy");
	var catalogbuypopup = document.querySelector(".modal-content-cart");
	var catalogbuyclose = catalogbuypopup.querySelector(".modal-content-close");
	var catalogbuychekout = catalogbuypopup.querySelector(".checkout");
	var catalogbuycontshopp = catalogbuypopup.querySelector(".contshopp");

	// Цикличность действия вызова окна у товара на "Купить"
	for (var i = 0; i < catalogbuy.length; i++) {
		catalogbuy[i].addEventListener("click", function(event) {
		event.preventDefault();
	catalogbuypopup.classList.add("modal-content-show");
	});
	}
	// Закрытие модального окна на кнопку "Оформить заказ"
		catalogbuychekout.addEventListener("click", function(event) {
		event.preventDefault();
		catalogbuypopup.classList.remove("modal-content-show");
	});
		// Закрытие модального окна на кнопку "Продолжить покупки"
		catalogbuycontshopp.addEventListener("click", function(event) {
		event.preventDefault();
		catalogbuypopup.classList.remove("modal-content-show");
	});
		// Закрытие модального окна на кнопку "Крестик"
		catalogbuyclose.addEventListener("click", function(event) {
		event.preventDefault();
		catalogbuypopup.classList.remove("modal-content-show");
	});
		// Закрытие на клавишу "ESC"
		window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (catalogbuypopup.classList.contains("modal-content-show")) {
			catalogbuypopup.classList.remove("modal-content-show");
			}
		}
	});