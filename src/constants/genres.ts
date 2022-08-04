export enum Genres {
	ALL = 'ALL',
	DOCUMENTARY = 'DOCUMENTARY',
	COMEDY = 'COMEDY',
	HORROR = 'HORROR',
	CRIME = 'CRIME',
}

export const movieCardGenres = [Genres.DOCUMENTARY, Genres.COMEDY, Genres.CRIME, Genres.HORROR];

export const toggleGenres = [Genres.ALL, ...movieCardGenres];
