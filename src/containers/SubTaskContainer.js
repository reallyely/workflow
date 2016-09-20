import React from 'react';
import SubTask from '../components/SubTask'

export default React.createClass({
	getInitialState() {
		return {
			timeLogged: this.props.timeLogged
		};
	},
	getDefaultProps() {
		return {
			subTasks: []
		};
	},
	render() {
		return (
			<div>
					{
						this.props.subTasks.map(subTask => {
							return (
								<SubTask key={subTask.subTask} subTask={subTask} />
							)
						})
					}
			</div>
		);
	}

});
