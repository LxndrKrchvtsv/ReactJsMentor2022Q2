import { useReducer } from 'react';

const SET_FORM_FIELD = 'SET_FORM_FIELD';

const initialState = {
	title: '',
	url: '',
	genreSelected: [],
	releaseDate: '',
	rating: '',
	runtime: '',
	overview: '',
};

type Payload = {
	key: string;
	value: string | string[];
};

type Action = {
	type: typeof SET_FORM_FIELD;
	payload: Payload;
};

const movieFormReducer = (state: typeof initialState, action: Action) => {
	switch (action.type) {
		case SET_FORM_FIELD:
			return {
				...state,
				[action.payload.key]: action.payload.value,
			};
		default:
			return state;
	}
};

export const useMovieForm = () => {
	const [state, dispatch] = useReducer(movieFormReducer, initialState);

	const setFormField = (payload: Payload) => {
		dispatch({
			type: SET_FORM_FIELD,
			payload,
		});
	};

	return { state, setFormField };
};
