import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import TaskContainer from './containers/TaskContainer'
import data from './data.js'
import DayPicker from './containers/DayPicker'

const App = () => (
  <MuiThemeProvider>
		<DayPicker>
			<TaskContainer tasks={data}/>
		</DayPicker>
  </MuiThemeProvider>
);

export default App;
