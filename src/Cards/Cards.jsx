// Cards.jsx

import React, { Component } from 'react';
import Card from './CardUI';
import './card-style.css'
import img1 from '../assets/img.jpg';
import img2 from '../assets/img.jpg';
import img3 from '../assets/img.jpg';

class Cards extends Component {
	render() {
		return (
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					<div className="col-md-4">
						<Card imgsrc={img1} title="Project 1" description="This is project 1 description" />
					</div>
					
					<div className="col-md-4">
						<Card imgsrc={img2} title="Project 2" description="This is project 2 description" />
					</div>
					
					<div className="col-md-4">
						<Card imgsrc={img3} title="Project 3" description="This is project 3 description" />
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;