import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import loading from "../../Images/loading.gif";
const LoadingPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
	return (
		<div className="w-full min-h-screen mx-auto bg-black ">
			<div className="max-w-screen-lg flex flex-col items-center justify-center m-auto pt-32 md:pt-[5%] ">
				<img
					src={loading}
					className="w-7/12 md:w-5/12"
					alt="laoding"
					data-aos="zoom-in-up"
				/>
				<div className="m-auto mt-5" data-aos="zoom-in-down">
					<h1 className="text-5xl text-white font-signature ml-2 capitalize">
						Welcome to Anurag's Galaxia
					</h1>
				</div>
			</div>
		</div>
	);
};

export default LoadingPage;
