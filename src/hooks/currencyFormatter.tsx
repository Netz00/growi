const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});

export default function currencyFormatter(number: number) {
	return formatter.format(number);
}
