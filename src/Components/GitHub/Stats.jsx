import React from "react";

const Stats = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<div
				style={{ width: "40%", margin: "auto" }}
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
			>
				<a href="https://github.com/Anurag8305">
					<img
						align="left"
						src="https://github-readme-streak-stats.herokuapp.com?user=Anurag8305&theme=radical"
						alt=""
						srcset=""
					/>
				</a>
			</div>
			<div
				style={{
					width: "60%",
					height: "300px",
					display: "flex",
					margin: "auto",
					gap: "20px",
				}}
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
			>
				<a href="https://github.com/Anurag8305">
					<img
						align="center"
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anurag8305"
						alt=""
						srcset=""
					/>
				</a>
				<a href="https://github.com/Anurag8305">
					<img
						align="left"
						src="https://github-readme-stats.vercel.app/api?username=Anurag8305&count_private=true&show_icons-true"
						alt=""
						srcset=""
					/>
				</a>
			</div>
		</div>
	);
};

export default Stats;
