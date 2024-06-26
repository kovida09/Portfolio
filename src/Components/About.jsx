/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/desktop-wallpaper-portfolio.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a backend developer. I specialize in building the behind-the-scenes magic of websites and apps—handling databases and making sure everything runs smoothly so users have a seamless experience.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Backend Developer",
  "Problem-Solving",
  "Content Writter",
  "Web Layout",
  "Data Analytics",

];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
 "I am a creative and detail-oriented developer with a passion for crafting robust backend solutions. With a solid background in Node.js, Python (Django), I excel in designing scalable architectures and implementing efficient APIs that power seamless user experiences. I thrive on tackling complex challenges, whether optimizing database performance or integrating cutting-edge technologies. My dedication to continuous improvement and collaborative spirit ensures that I deliver innovative solutions that make a meaningful impact.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt="Motion Background" />
      <div
        style={{
          backgroundColor: "black",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "20px",
          color:"white"
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color:"white"
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 0rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
