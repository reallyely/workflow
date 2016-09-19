import React from 'react';

const SubTask = ({subTask}) => (
	<div>
		<ul>
			{subtasks.map(subTask => { return (<li>subTask.subTask</li>)})}
		</ul>
	</div>
);

SubTask.propTypes = {
	subTask: React.PropTypes.object
};

export default SubTask;
