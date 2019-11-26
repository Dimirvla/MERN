import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTransition, animated } from 'react-spring';

const Alert = ({ alerts }) => {
	const transitions = useTransition(alerts, item => item.id, {
		from: { transform: 'translate3d(0,40px,0)', opacity: 0 },
		enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
		leave: { transform: 'translate3d(0,-40px,0)', opacity: 0 }
	});
	return (
		<div className={'alert-container'}>
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<div className={`alert alert-${item.alertType}`}>{item.msg}</div>{' '}
				</animated.div>
			))}
		</div>
	);
};

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
