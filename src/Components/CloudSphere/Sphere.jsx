import React, { useEffect } from "react";
import "./Sphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
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
        
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;