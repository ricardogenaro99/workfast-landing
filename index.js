window.addEventListener("load", () => {
	const menu = document.getElementById("menu");
	const btn = document.getElementById("btn-hamburger");
	const items = document.getElementsByClassName("item_menu");

	btn.addEventListener("click", () => {
		menu.classList.toggle("active");
	});

	for (const item of items) {
		item.addEventListener("click", () => {
			if (!item.classList.contains("target_app")) {
				menu.classList.remove("active");
			}
		});
	}
});
