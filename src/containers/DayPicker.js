import moment from 'moment'
import React from 'react';
import { Flex, Box} from 'reflexbox'
import { Tabs, Tab } from 'material-ui/Tabs'

class DayPicker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeDay: "Wednesday"
		}
		const thisMoment = moment()
		console.log(thisMoment.day());
	}

	handleChange = (activeDay) => {
		this.setState({activeDay})
	}

	render() {
		return (
			<Flex column={true}>
				<Tabs value={this.state.activeDay}
					onChange={this.handleChange}>
				{this.props.daysOfTheWeek.map(day => {
					return (
						<Tab key={day} label={day} value={day} onClick={e=>{this.handleChange(day);}}>
						</Tab>
					)
				})}
				</Tabs>
				<Box>
					{this.props.children}
				</Box>
			</Flex>
		);
	}

}

DayPicker.defaultProps = {daysOfTheWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}
export default DayPicker;
