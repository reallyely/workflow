import React from 'react';
import Timer from 'material-ui/svg-icons/image/timer'
import TimerOff from 'material-ui/svg-icons/image/timer-off'
import moment from 'moment'

const flexColumnStart = {
	display: 'flex',
	justifyContent: 'flex-start',
	flexDirection: 'column'
}

const flexRowSpaceAround = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
}
const flexColumnEnd = {
	justifyContent: 'center',
	flexDirection: 'column'
}

const SubTask = ({subTasks}) => {
	return (
		<div style={flexColumnStart}>
				{
					subTasks.map(subTask => {
						let timeLogged = moment.duration(subTask.timeLogged, 'seconds')
						return (
							<div key={subTask.subTask} style={flexRowSpaceAround}>{`${subTask.subTask}: ${subTask.type} - ${subTask.status}`}
								<div style={flexColumnEnd}>
									<Timer hoverColor="red"/> <TimerOff hoverColor="red"/>
									<span>{timeLogged.humanize()}</span>
								</div>
							</div>
						)
					})
				}
		</div>
	)
};

SubTask.propTypes = {
	subTask: React.PropTypes.object
};

export default SubTask;
