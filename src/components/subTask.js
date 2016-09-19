import React from 'react';
import Timer from 'material-ui/svg-icons/image/timer'
import TimerOff from 'material-ui/svg-icons/image/timer-off'

const SubTask = ({subTasks}) => (
	<div>
		<ul>
			{
				subTasks.map(subTask => {
					return (<li key={subTask.subTask}>{`${subTask.subTask}: ${subTask.type} - ${subTask.status}`} <Timer hoverColor="red"/> <TimerOff hoverColor="red"/></li>)
				})
			}
		</ul>
	</div>
);

SubTask.propTypes = {
	subTask: React.PropTypes.object
};

export default SubTask;
