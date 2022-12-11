// Скрипт для карточек

function changeColor(card) {
	if (card.classList.length == 1) {
		card.classList.add("selected");
	} else {
		card.classList.remove("selected");
	}
}

// Скрипт для карусели
let buttonLeft = document.querySelector(".left");
let buttonRight = document.querySelector(".right");
let images = document.querySelectorAll(".carousel__content img");
let i = 0;
buttonRight.onclick = function () {
	if (i < images.length - 1) {
		images[i].style.display = "none";
		i = i + 1;
		images[i].style.display = "block";
	} else if (i == images.length - 1) {
		images[i].style.display = "none";
		i = i + 1;
	}
	if (i > images.length - 1) {
		i = 0;
		images[i].style.display = "block";
	}
};

buttonLeft.onclick = function () {
	if (i == 0) {
		while (i < images.length - 1) {
			images[i].style.display = "none";
			i++;
		}
		i = images.length - 1;
		images[i].style.display = "block";
	} else if (i < images.length - 1 && i > 0) {
		images[i].style.display = "none";
		i = i - 1;
		images[i].style.display = "block";
	} else if (i == images.length - 1) {
		images[i].style.display = "none";
		i = i - 1;
		images[i].style.display = "block";
	}
};
