import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		const newsMessage = { before: 'Dnes nebyly publikovány ', in: 'žádné novinky', end: '.' };
		return (
			<div>
				<h1>{process.env.REACT_APP_TITLE}</h1>
				{/*<img src='/img/homepage.jpg' alt='Společná fotka soutěžících' className='homepage'></img>*/}
				<h4 className='mt-5 mb-5'>Letošní tcup se bude konat {process.env.REACT_APP_FROM_TO} v Toužimi.</h4>
				<p>Je přihlášeno 0 pilotů.</p>
				<p>
					{newsMessage.before}
					<Link to='/news'>{newsMessage.in}</Link>
					{newsMessage.end}
				</p>
			</div>
		);
	}
}

export default Home;
