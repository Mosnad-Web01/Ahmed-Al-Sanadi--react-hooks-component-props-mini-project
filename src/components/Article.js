export default function Article({
	title,
	date = 'January 1, 1970',
	preview,
	minutes,
}) {
	function determineReadingTime(min) {
		const emoji = min < 30 ? '☕️' : '🍱';
		const divisor = min < 30 ? 5 : 10;
		return emoji.repeat(Math.ceil(min / divisor)) + `${min} min read`;
	}

	return (
		<article>
			<h3>{title}</h3>
			<small>{date}</small>
			<p>{preview}</p>
			<p>{determineReadingTime(minutes)}</p>
		</article>
	);
}
