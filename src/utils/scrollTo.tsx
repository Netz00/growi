// t = current time
// b = start value
// c = change in value
// d = duration
function easeInOutQuad(t: number, b: number, c: number, d: number) {
	const t1 = t / (d / 2);
	if (t1 < 1) return (c / 2) * t1 * t1 + b;
	const t2 = t1 - 1;
	return (-c / 2) * (t2 * (t2 - 2) - 1) + b;
}

export function scrollTo(element: HTMLElement, to: number, duration: number) {
	const start = element.scrollTop;
	const change = to - start;
	let currentTime = 0;
	const increment = 20;

	const animateScroll = function a() {
		currentTime += increment;
		const val = easeInOutQuad(currentTime, start, change, duration);
		// eslint-disable-next-line no-param-reassign
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}
