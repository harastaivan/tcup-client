import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container } from 'reactstrap';

class Footer extends Component {
	render() {
		// const isHomePage = this.props.history.location.pathname === '/';
		return (
			<Container className='transparent-background'>
				<footer className={`p-5 py-4 text-center text-small`}>
					<p>
						© {process.env.REACT_APP_TITLE} <b>verze {process.env.REACT_APP_VERSION}</b>
					</p>
					<p>
						by{' '}
						<a target='_blank' rel='noopener noreferrer' href='https://github.com/harastaivan'>
							@harastaivan
						</a>
					</p>
				</footer>
			</Container>
		);
	}
}

export default withRouter(Footer);
