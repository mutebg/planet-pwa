import Slider from './slider';

const PlanetNames = ({ planets, current }) => (
	<Slider
		className="planet-names"
		items={planets.map(item => {
			item.key = item.name;
			return item;
		})}
		current={current}
		viewFn={({ name }) => name}
	/>
);

export default PlanetNames;
