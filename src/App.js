import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import TaskContainer from './containers/TaskContainer'
import data from './data.js'

const App = () => (
  <MuiThemeProvider>
		<div>
			<TaskContainer tasks={data} />
		</div>
  </MuiThemeProvider>
);

export default App;
