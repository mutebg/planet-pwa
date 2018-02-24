const Planet = ({ name, color, active, index }) => (
	<div
		class="planet"
		style={{
			backgroundColor: color,
			transform: `rotate(${index * 45}deg) translateY(-150px) scale(${
				active ? 1 : 0.6
			})`
		}}
	/>
);

export default Planet;
