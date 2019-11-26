import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register user

export const register = ({ name, email, password }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ name, email, password });

	try {
		console.log('====================================');
		console.log(body);
		const res = await axios.post('/api/users', body, config);
		console.log(res.body);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		const errors = error.response.data.errors;
		console.log('====================================');
		console.log(errors);
		console.log('====================================');

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: REGISTER_FAIL
		});
	}
};
