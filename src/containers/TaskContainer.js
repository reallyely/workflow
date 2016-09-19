import React from 'react'
import TaskCard from '../components/TaskCard';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import Search from 'material-ui/svg-icons/action/search';

const TaskContainer = ({tasks}) => {
	return (
		<div>
			<AppBar title="Title" iconElementLeft={<span/>}>
				<TextField
				inputStyle={{color:"white"}}
				floatingLabelStyle={{color:"white"}}
				hintText={<Search style={{color:"white"}}/>}
				fullWidth={true}
				/>
			</AppBar>
			<div style={{margin:'30px', padding: '30px'}}>
				<div>
					{tasks.map(task => {return ( <TaskCard key={task.task} task={task}/>)})}
				</div>
			</div>
		</div>
	)
}

TaskContainer.propTypes = {
	tasks: React.PropTypes.array
}
export default TaskContainer;
