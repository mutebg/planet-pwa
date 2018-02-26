import { findPlanetIndex } from '../helpers';
import Slider from './slider';

const Astro = ({ planets, current, onClick, active }) => {
	const currentPlanetIndex = findPlanetIndex(current);
	const viewFn = ({ img }) => (
		<div class="astro__planet" style={{ backgroundImage: `url(${img})` }} />
	);

	const astroStyle = active
		? {
				transform: `scale(10) translateY(30%)`,
				transition: `1s linear all`
			}
		: null;

	return (
		<div class="astro" onClick={onClick} style={astroStyle}>
			<div class="astro__bg" />
			<div class="astro__face">
				<Slider
					className=""
					items={planets.map(item => {
						item.key = item.name;
						return item;
					})}
					current={currentPlanetIndex}
					viewFn={viewFn}
				/>
			</div>
		</div>
	);
};

export default Astro;
