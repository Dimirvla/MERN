import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Route exact path="/" component={Landing} />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</Switch>
			</Router>
			<Alert />
		</Provider>
	);
}

export default App;
