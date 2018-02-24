import { findPlanetIndex } from '../helpers';
import Planet from './planet';
import PlanetNames from './planetnames';
const Solar = ({ planets, current, onClick }) => {
	const deg = current * 45;
	const currentPlanetIndex = findPlanetIndex(current);
	return (
		<div class="solar" onClick={onClick}>
			<div
				class="solar__circle"
				style={{ transform: `rotate(${deg * -1}deg)` }}
			>
				{planets.map((plan, index) => (
					<Planet
						key={plan.name}
						{...plan}
						index={index}
						active={index === currentPlanetIndex}
					/>
				))}
			</div>
			<div class="solar__current">
				<PlanetNames planets={planets} current={currentPlanetIndex} />
			</div>
		</div>
	);
};

export default Solar;
