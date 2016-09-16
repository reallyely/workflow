'use strict';
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default React.createClass({

	render() {
		return (
			<Card>
				<CardHeader title="Parent Task" subtitle="Task Type"/>
				<CardText>
					<ul>
						<li>Sub task</li>
						<li>Sub task</li>
					</ul>
				</CardText>
			</Card>
		);
	}

});
