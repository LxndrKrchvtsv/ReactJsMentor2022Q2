export interface StateGenreToggle {
	readonly genres: string[];
	activeGenre: number;
}

export interface StateCounter {
	count: number;
	label: string;
}

export interface StateSearch {
	queryString: string;
}

export interface PropsButton {
	handler: () => void;
	label: string;
	classButton?: string;
}

export interface PropsEmpty {}

export interface StateEmpty {}
