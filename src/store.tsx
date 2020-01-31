import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { setLanguageReducer, currentState } from './reducers/reducer';
import { tempLanguageType } from './types/reducer_types';

export const store = createStore(setLanguageReducer, currentState, composeWithDevTools(applyMiddleware()));

var lang: string | null = localStorage.getItem('lang');

if (localStorage && lang !== null) {
	const INITIAL: tempLanguageType = {
		type: 'INITIAL',
		toSetLang: (lang as unknown) as 'en' | 'de'
	};

	store.dispatch(INITIAL);
}
