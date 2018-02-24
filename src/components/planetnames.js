const PlanetNames = ({ planets, current }) => (
	<div class="planet-names">
		<div
			class="planet-names__wrapper"
			style={{ transform: `translateX(${current * -12.5}%)` }}
		>
			{planets.map(({ name }, index) => (
				<div
					class={
						'planet-names__item' +
						(index === current ? ' planet-names__item--active' : '')
					}
				>
					{name}
				</div>
			))}
		</div>
	</div>
);

export default PlanetNames;
