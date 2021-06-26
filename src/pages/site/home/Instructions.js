import React from "react";
import { Carousel } from "react-bootstrap";
import Holder from "holderjs";

class Instructions extends React.Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item interval={700}>
					<img
						className="d-block w-100"
						src="holder.js/1920x400?text=First slide&bg=d2d6da"
						alt="First"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={700}>
					<img
						className="d-block w-100"
						src="holder.js/1920x400?text=Second slide&bg=d2d6da"
						alt="Second"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={700}>
					<img
						className="d-block w-100"
						src="holder.js/1920x400?text=Third slide&bg=d2d6da"
						alt="Third"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default Instructions;
