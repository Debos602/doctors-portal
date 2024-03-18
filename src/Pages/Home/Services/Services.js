import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
	const serviceData = [
		{
			id: 1,
			name: "Fluoride Treatment",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			img: fluoride,
		},
		{
			id: 2,
			name: "Cavity Filling",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			img: cavity,
		},
		{
			id: 3,
			name: "Teeth Whitening",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			img: whitening,
		},
	];

	return (
		<div className="my-32">
			<div className="text-center mb-16 font-[Open-Sans]">
				<h3 className="text-xl font-bold text-primary uppercase">
					Our Services
				</h3>
				<h2 className="text-3xl">Services we provide</h2>
			</div>
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{serviceData.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default Services;
