import React from 'react';
import { connect } from 'react-redux';
import { State, Action } from '../types/reducer_types';
import { Dispatch } from 'redux';
import { SET_DE, SET_EN } from '../actions/setLangActions';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

type Props = { lang?: 'en' | 'de' };

export class SecondPage extends React.Component<Props & dispatchProps, State> {
	render() {
		const { lang, changeLanguage } = this.props;

		return (
			<div>
				<Link to="/">
					<h1>PAGE 2</h1>
				</Link>
				<h1>{lang}</h1>
				<h2>
					<FormattedMessage id={'text'} />
				</h2>
				<button value="de" onClick={() => changeLanguage(SET_DE)}>
					DE
				</button>
				<button value="en" onClick={() => changeLanguage(SET_EN)}>
					EN
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state: State) => {
	return {
		lang: state.lang
	};
};

type dispatchProps = { changeLanguage: (action: Action) => void };

const mapDispatchToProps = (dispatch: Dispatch<Action>): dispatchProps => ({
	changeLanguage: (action: Action) => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
