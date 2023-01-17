const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

export default function abbreviateNumber(number: number) {
	// what tier? (determines SI symbol)
	// eslint-disable-next-line no-bitwise
	const tier = (Math.log10(Math.abs(number)) / 3) | 0;

	// if zero, we don't need a suffix
	if (tier === 0) return number;

	// get suffix and determine scale
	const suffix = SI_SYMBOL[tier];
	const scale = 10 ** (tier * 3);

	// scale the number
	const scaled = number / scale;

	// format number and add suffix
	return scaled.toFixed(1) + suffix;
}
