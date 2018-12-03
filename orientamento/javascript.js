window.onload = function() {
	document.getElementById("second").addEventListener("click", function () {
		var menu = document.getElementById("first");
		if (menu.classList.contains("hidden")) {
			menu.classList.remove("hidden");
			document.body.classList.add("margin");
		} else {
			menu.classList.add("hidden");
			document.body.classList.remove("margin");
		}
	})
};

