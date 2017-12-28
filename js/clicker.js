var addUp = (function () {
	var count = 0;

	return function () {
		var element = document.getElementById("counter1");
		if (element) {
			element.innerHTML = ++count;
		}
	}
}());

document.getElementById("xmen1").addEventListener("click", addUp, false);
