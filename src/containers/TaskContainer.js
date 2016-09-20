import React from 'react'
import TaskCard from '../components/TaskCard';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField'
import Search from 'material-ui/svg-icons/action/search';

import _ from 'lodash'

export default React.createClass({
	propTypes: {
		tasks: React.PropTypes.array
	},
	getDefaultProps() {
		return {
			tasks: []
		};
	},
	getInitialState() {
		return {
			filteredTasks: this.props.tasks
		};
	},
	filterTasks (e) {
		const filterText = e.target.value
		const reg = new RegExp(`\\b${filterText}\\.*\\b`, "gi")

		const filtered = this.props.tasks.filter(task => {
			return _.find(task, function(o) {
				if (filterText) {
					if (typeof o === 'string') {
						return o.search(reg) > -1;
					}
				} else {
					return true;
				}
			})
		});

		this.setState({
			filteredTasks: filtered
		})
	},
	componentWillUpdate(nextProps, nextState) {
	},
	render() {
		return (
			<div>
				<Toolbar>
				<ToolbarGroup style={{width:'100%'}}>
						<TextField
						hintText={<Search />}
						fullWidth={true}
						onChange={(e) => {this.filterTasks(e)}}
						/>
					</ToolbarGroup>
				</Toolbar>
				<div style={{margin:'30px', padding: '30px'}}>
					<div>
						{
							this.state.filteredTasks.map(task => {
								return ( <TaskCard key={task.task} task={task}/>)
							})
						}
					</div>
				</div>
			</div>
		)
	}
});
