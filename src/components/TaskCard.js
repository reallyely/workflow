import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTaskContainer from '../containers/SubTaskContainer'

const TaskCard = ({task}) => (
	<div>
		<Card>
			<CardHeader title={`Parent Task ${task.task}`} subtitle={`Type: ${task.type}`}/>
			<CardText>
				<ul>
					<SubTaskContainer subTasks={task.subtasks}/>
				</ul>
			</CardText>
		</Card>
	</div>
);

TaskCard.propTypes = {
	task: React.PropTypes.object
};

export default TaskCard;
