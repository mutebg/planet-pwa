import { h, Component } from 'preact';
import { route } from 'preact-router';
import planets from '../planets';
import { findPlanetIndex } from '../helpers';
import Solar from '../components/solar';
import Astro from '../components/astro';

export default class Home extends Component {
	state = {
		current: 0
	};

	move = direction => {
		const { current } = this.state;
		this.setState({
			current: direction === 'prev' ? current - 1 : current + 1
		});
	};

	onClick = () => {
		const el = document.querySelector('.astro');
		const planet = el.querySelector('.astro__wrapper');
		el.style.transform = `scale(10) translateY(15%)`;
		el.style.transition = `1s linear all`;
		planet.style.transform = `translateY(100%)`;
		planet.style.transition = `1s linear all`;
		el.addEventListener(
			'transitionend',
			ev => {
				const url = '/details/' + findPlanetIndex(this.state.current);
				route(url);
			},
			{ once: true }
		);
	};

	render({}, { current }) {
		const prev = () => this.move('prev');
		const next = () => this.move('next');
		return (
			<div>
				<Astro planets={planets} current={current} onClick={this.onClick} />
				<button class="nav-btn nav-btn--prev" onClick={prev}>
					prev
				</button>
				<button class="nav-btn nav-btn--next" onClick={next}>
					next
				</button>
				<div class="solar-container">
					<Solar planets={planets} current={current} onClick={this.onClick} />
				</div>
			</div>
		);
	}
}

// const Solar = ({ planets, current }) => {
// 	const deg = current * 45;
// 	const currentPlanetIndex = findPlanetIndex(current);
// 	return (
// 		<div class="solar">
// 			<div
// 				class="solar__circle"
// 				style={{ transform: `rotate(${deg * -1}deg)` }}
// 			>
// 				{planets.map((plan, index) => (
// 					<Planet
// 						key={plan.name}
// 						{...plan}
// 						index={index}
// 						active={index === currentPlanetIndex}
// 					/>
// 				))}
// 			</div>
// 			<div class="solar__current">
// 				<PlanetNames planets={planets} current={currentPlanetIndex} />
// 			</div>
// 		</div>
// 	);
// };
//
// const Planet = ({ name, color, active, index }) => (
// 	<div
// 		class="planet"
// 		style={{
// 			backgroundColor: color,
// 			transform: `rotate(${index * 45}deg) translateY(-150px) scale(${
// 				active ? 1 : 0.6
// 			})`
// 		}}
// 	/>
// );
//
// const PlanetNames = ({ planets, current }) => (
// 	<div class="planet-names">
// 		<div
// 			class="planet-names__wrapper"
// 			style={{ transform: `translateX(${current * -12.5}%)` }}
// 		>
// 			{planets.map(({ name }, index) => (
// 				<div
// 					class={
// 						'planet-names__item' +
// 						(index === current ? ' planet-names__item--active' : '')
// 					}
// 				>
// 					{name}
// 				</div>
// 			))}
// 		</div>
// 	</div>
// );
