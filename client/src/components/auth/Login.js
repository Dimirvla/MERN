import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		name: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const onSubmit = async e => {};
	return (
		<section className="container">
			<h1 className="large text-primary">Sign in</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign into your account
			</p>
			<form className="form" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<input type="email" value={email} onChange={e => onChange(e)} placeholder="Email Address" name="email" />
				</div>
				<div className="form-group">
					<input
						type="password"
						value={password}
						onChange={e => onChange(e)}
						placeholder="Password"
						name="password"
						minLength="6"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			<p className="my-1">
				Don't have an account? <Link to="/register">Sign In</Link>
			</p>
		</section>
	);
};

export default Login;
