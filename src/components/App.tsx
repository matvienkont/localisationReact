import React from 'react';
import '../styles/App.css';
import { IntlProvider } from 'react-intl';
import messages from '../messages/message';
import { State } from '../types/reducer_types';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import LangSetter from './LangSetter';
import SecondPage from './SecondPage';
import { createBrowserHistory as createHistory } from 'history';

type Props = { lang: 'en' | 'de' };

const history = createHistory();

export class App extends React.Component<Props> {
	render() {
		const { lang } = this.props;
		return (
			<IntlProvider locale={lang} messages={messages[lang]}>
				<Router history={history}>
					<div>
						<Switch>
							<Route exact path="/" component={LangSetter} />
							<Route path="/s" component={SecondPage} />
						</Switch>
					</div>
				</Router>
			</IntlProvider>
		);
	}
}

const mapStateToProps = (state: State) => {
	localStorage.setItem('lang', state.lang);
	return {
		lang: state.lang
	};
};

export default connect(mapStateToProps)(App);
