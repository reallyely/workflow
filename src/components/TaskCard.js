import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import SubTaskContainer from '../containers/SubTaskContainer'

import BugReport from 'material-ui/svg-icons/action/bug-report'
import QuestionAnswer from 'material-ui/svg-icons/action/question-answer'
import NoteAdd from 'material-ui/svg-icons/action/note-add'

const TaskCard = ({task}) => {
	return (
		<div>
			<Card>
				<CardHeader
					title={<strong>{task.task}</strong>}
					subtitle={`Type: ${task.type}`}
					avatar={
						task.type.match('New Requirement') ? <NoteAdd color="blue"/> :
						task.type.match('Defect') ? <BugReport color="red"/> :
						task.type.match('Consultation') ? <QuestionAnswer color="orange"/> :
						null
					 }/>
				<CardText>
					<div>
						<p>
							{task.description}
						</p>
						<SubTaskContainer subTasks={task.subTasks}/>
					</div>
				</CardText>
			</Card>
		</div>
	)
};

TaskCard.propTypes = {
	task: React.PropTypes.object
};

export default TaskCard;
