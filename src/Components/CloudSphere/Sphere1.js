import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

const Sphere1 = () => (
	<TagCloud
		options={(w: Window & typeof globalThis): TagCloudOptions => ({
			// radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            radius:220,
			maxSpeed: "fast",
		})}
		onClick={(tag: string, ev: MouseEvent) => alert(tag)}
		onClickOptions={{ passive: true }}
	>
		{[
			"HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "NodeJS",
        "Babel",
        "Typescript",
        "ES6",
        "GIT",
        "GITHUB",
        "Postman",
        "MongoDB",
        "Canva",
        "Chakra UI",
        "Material UI",
        "Express",
        "Java",
        "VS-code",
        "IntelliJ",
        "Netlify",
        "Vercel",
        "Heroku",
		]}
	</TagCloud>
);
export default Sphere1;
