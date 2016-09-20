import React from 'react';
import Timer from 'material-ui/svg-icons/image/timer'
import TimerOff from 'material-ui/svg-icons/image/timer-off'
import moment from 'moment'
import { Flex, Grid } from 'reflexbox'

const SubTask = ({subTask}) => {
	let timeLogged = moment.duration(subTask.timeLogged, 'seconds')
	return (
		<Flex key={subTask.subTask}>
			<Grid col={8} px={2} align="middle">
				{`${subTask.subTask}: ${subTask.type} - ${subTask.status}`}
			</Grid>
			<Grid col={4} px={2} align="middle">
				<Timer onClick={(e)=>{console.log(e.target);}} hoverColor="red"/><TimerOff hoverColor="red"/>
				<span>{timeLogged.humanize()}</span>
			</Grid>
		</Flex>
	)
};

SubTask.propTypes = {
	subTask: React.PropTypes.object
};

export default SubTask;
