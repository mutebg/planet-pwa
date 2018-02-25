const Slider = ({ items, current, className = '', viewFn }) => {
	const prevItem = items[current - 1] || items[items.length - 1];
	const currentItem = items[current];
	const nextItem = items[current + 1] || items[0];
	const currentItems = [prevItem, currentItem, nextItem];

	return (
		<div class={'slider ' + className}>
			<div class="slider__wrapper">
				{currentItems.map((item, index) => (
					<div
						key={item.key}
						style={{ transform: `translateX(${(index - 1) * 100}%)` }}
						class={
							'slider__item' + (index === 1 ? ' slider__item--active' : '')
						}
					>
						{viewFn(item)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
