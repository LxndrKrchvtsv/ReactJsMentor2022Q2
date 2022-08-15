export const validatePosterPath = (value: string) => {
	const reg = /^http|s:\/\/[A-Za-z0-9.]+/;
	if (!value.match(reg)) return 'Invalid URL, Address must begins with https://';
	return null;
};

export const validateEmptyString = (value: string) => {
	if (value === '') return 'Title is not allowed to be empty';
	return null;
};

export const validateNumber = (value: string) => {
	if (!Number(value)) return 'Rating must be a number';
	if (!parseFloat(value)) return 'Rating must be a number';
	return null;
};

export const validateGenres = (value: []) => {
	if (value.length === 0) return 'Genres does not contain 1 required value(s)';
	return null;
};
