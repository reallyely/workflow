import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTaskContainer from '../containers/SubTaskContainer'

const TaskCard = ({task}) => (
	<div>
		<Card>
			<CardHeader title={<strong>{task.task}</strong>} subtitle={`Type: ${task.type}`}/>
			<CardText>
				<p>
					{task.description}
				</p>
				<ul>
					<SubTaskContainer subTasks={task.subTasks}/>
				</ul>
			</CardText>
		</Card>
	</div>
);

TaskCard.propTypes = {
	task: React.PropTypes.object
};

export default TaskCard;
