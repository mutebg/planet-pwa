import planets from '../planets';
const Details = ({ id }) => {
	const { img, name, text } = planets[id];
	return (
		<div class="details">
			<div class="details__bg" />
			<div class="details__content">
				<h2 class="details__name">{name}</h2>
				<div class="details__info">{text}</div>
			</div>
			<div class="details__planet">
				<img src={img} />
			</div>
		</div>
	);
};

export default Details;
