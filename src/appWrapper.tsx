import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/App';

export class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

export default AppWrapper;
