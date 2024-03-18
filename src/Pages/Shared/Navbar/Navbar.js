import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const menuItems = (
		<React.Fragment>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/appointment">Appointment</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/reviews">Reviws</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</React.Fragment>
	);

	return (
		<div className="navbar bg-base-100 flex justify-between">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost text-3xl">
					Doctor Portal
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu font-[Open-Sans] text-2xl  font-normal menu-horizontal px-1">
					{menuItems}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
