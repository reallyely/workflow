import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TaskCard from './components/TaskCard'

const App = () => (
  <MuiThemeProvider>
		<div style={{width:'900px'}}>
			<AppBar
			    title="Title"
			    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
			    iconElementRight={
			      <IconMenu
			        iconButtonElement={
			          <IconButton><MoreVertIcon /></IconButton>
			        }
			        targetOrigin={{horizontal: 'right', vertical: 'top'}}
			        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			      >
			        <MenuItem primaryText="Refresh" />
			        <MenuItem primaryText="Help" />
			        <MenuItem primaryText="Sign out" />
			      </IconMenu>
			    }
			  />
				{[0,2,3].map( task => { return (<TaskCard id={task}/>)})}
			</div>
  </MuiThemeProvider>
);

export default App;
