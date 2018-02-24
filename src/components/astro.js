import { findPlanetIndex } from '../helpers';

const Astro = ({ planets, current, onClick }) => {
	const currentPlanetIndex = findPlanetIndex(current);

	return (
		<div class="astro" onClick={onClick}>
			<div class="astro__bg" />
			<div class="astro__face">
				<div
					class="astro__wrapper"
					style={{ transform: `translateX(${currentPlanetIndex * -12.5}%)` }}
				>
					{planets.map(({ img }, index) => (
						<div
							class={
								'astro__item' +
								(index === currentPlanetIndex ? ' astro__item--active' : '')
							}
							style={{ backgroundImage: `url(${img})` }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Astro;
