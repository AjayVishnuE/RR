const progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = () => {
	const scroll = document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (scroll / height) * 100;

	if (scrolled <= 1) {
		progressBar.style.height = 1 + "%";
	} else if (scrolled >= 2 && scrolled <= 100) {
		progressBar.style.height = scrolled + "%";
	}
};