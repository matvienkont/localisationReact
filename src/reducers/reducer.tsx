import { State, Action, tempLanguageType } from '../types/reducer_types';

export const currentState: State = {
	lang: 'en'
};

export const setLanguageReducer = (state: State = currentState, action: Action | tempLanguageType): State => {
	switch (action.type) {
		case 'SET_EN':
			return { lang: action.toSetLang };
		case 'SET_DE':
			return { lang: action.toSetLang };
		case 'INITIAL':
			return { lang: action.toSetLang };
		default:
			return state;
	}
};
