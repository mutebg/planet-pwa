export const findPlanetIndex = index =>
	index % 8 >= 0 ? index % 8 : 8 + index % 8;
