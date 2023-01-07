import React from "react";
import GitHubCalender from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const GithubCalender = () => {
	return (
		<section id="statistics">
			<GitHubCalender
				username="Anurag8305"
				style={{ margin: "auto", width: "70%", padding: "10px" }}
				blockSize={18}
				fontSize={12}
			>
				<ReactTooltip delayShow={20} html />
			</GitHubCalender>
		</section>
	);
};

export default GithubCalender;
