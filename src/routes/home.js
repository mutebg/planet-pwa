import { h, Component } from 'preact';
import { route } from 'preact-router';
import planets from '../planets';
import { findPlanetIndex } from '../helpers';
import Solar from '../components/solar';
import Astro from '../components/astro';

export default class Home extends Component {
	state = {
		current: 2,
		activeAstro: false
	};

	move = direction => {
		const { current } = this.state;
		this.setState({
			current: direction === 'prev' ? current - 1 : current + 1
		});
	};

	onClick = () => {
		this.setState({
			activeAstro: true
		});

		setTimeout(() => {
			const url = '/details/' + findPlanetIndex(this.state.current);
			route(url);
		}, 1000);
	};

	render({}, { current, activeAstro }) {
		const prev = () => this.move('prev');
		const next = () => this.move('next');
		return (
			<div>
				<Astro
					planets={planets}
					current={current}
					active={activeAstro}
					onClick={this.onClick}
				/>
				<button class="nav-btn nav-btn--prev" onClick={prev}>
					<svg
						fill="currentColor"
						height="24"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
						<path d="M0-.5h24v24H0z" fill="none" />
					</svg>
				</button>
				<button class="nav-btn nav-btn--next" onClick={next}>
					<svg
						fill="currentColor"
						height="24"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
						<path d="M0-.25h24v24H0z" fill="none" />
					</svg>
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
