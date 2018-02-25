import { findPlanetIndex } from '../helpers';
import Slider from './slider';

const Astro = ({ planets, current, onClick }) => {
	const currentPlanetIndex = findPlanetIndex(current);
	const viewFn = ({ img }) => (
		<div class="astro__planet" style={{ backgroundImage: `url(${img})` }} />
	);

	return (
		<div class="astro" onClick={onClick}>
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
