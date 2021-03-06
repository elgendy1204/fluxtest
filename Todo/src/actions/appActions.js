import ActionTypes from '../constants/constants.js';
import appDispatcher from '../dispatcher/appDispatcher.js';

const Actions = {
	addTodo(text) {
		appDispatcher.dispatch({
			actionType: ActionTypes.ADD_TODO,
			text,
		});
	},
};

export default Actions;