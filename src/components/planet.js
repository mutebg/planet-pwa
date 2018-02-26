import { shadeColor } from '../helpers';
const Planet = ({ name, color, active, index }) => (
	<div
		class="planet"
		style={{
			background: `linear-gradient(to bottom, ${color} 0%, ${shadeColor(
				color,
				30
			)} 100%)`,
			transform: `rotate(${index * 45}deg) translateY(-150px) scale(${
				active ? 1 : 0.6
			})`
		}}
	/>
);

export default Planet;
