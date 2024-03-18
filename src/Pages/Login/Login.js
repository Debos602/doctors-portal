import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
	const { register, handleSubmit } = useForm();

	const handleLogin = (data) => {
		console.log(data);
	};

	return (
		<div className="h-[500px] flex justify-center items-center ">
			<div className="border-2 p-7 rounded-xl">
				<h2 className="text-xl text-center">Login</h2>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className="label">
						<span className="label-text">Email</span>
					</div>
					<input
						className="w-full border-2 rounded-lg p-2"
						type="email"
						{...register("email")}
						placeholder="email"
					/>
					<div className="label">
						<span className="label-text">Password</span>
					</div>
					<input
						className="w-full border-2 rounded-lg p-2"
						type="password"
						{...register("password")}
						placeholder="password"
					/>
					<input
						className="w-full border-2 bg-accent text-white mt-5 p-2 rounded-lg"
						type="submit"
					/>
				</form>
				<p>
					New to Doctors Portal?{" "}
					<Link to="/" class="text-secondary">
						Create new account
					</Link>
				</p>
				<div className="divider">OR</div>
				<button className="btn btn-outline w-full hover:bg-accent">
					CONTINUE WITH GOOGLE
				</button>
			</div>
		</div>
	);
};

export default Login;
