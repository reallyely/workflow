import React from 'react';
import SubTask from '../components/SubTask'

export default React.createClass({

	render() {
		return (
			<div>
				<SubTask subTasks={this.props.subTasks} />
			</div>
		);
	}

});
