import React from "react";
import "./Contact.css";
import {MdOutlineMail} from "react-icons/md";
import {BsGithub,BsLinkedin,BsWhatsapp} from "react-icons/bs";

const Contact = () => {
	return <section id="contact">
		<h5>Get In Touch</h5>
		<h2>Contact Me</h2>
		<div className="container contact__container">
			<div className="contact__options">
				<article className="contact__option">
				<MdOutlineMail className="contact__option-icon"/>
					<h4>Email</h4>
					<h5>anuragraj8305@gmail.com</h5>
					<a href="mailto:anuragraj8305@gmail.com" target={"_blank"}>
						Send a message
					</a>
				</article>
				<article className="contact__option">
				<BsGithub className="contact__option-icon"/>
					<h4>GitHub</h4>
					<h5>Anurag8305</h5>
					<a href="mailto:anuragraj8305@gmail.com" target={"_blank"}>
						Watch me on GitHub
					</a>
				</article>
				<article className="contact__option">
				<BsLinkedin className="contact__option-icon"/>
					<h4>LinkedIN</h4>
					<h5>anuragraj8305@gmail.com</h5>
					<a href="mailto:anuragraj8305@gmail.com" target={"_blank"}>
						Connect on LinkedIn
					</a>
				</article>
				<article className="contact__option">
				<BsWhatsapp className="contact__option-icon"/>
					<h4>WhatsApp</h4>
					<h5>anuragraj8305@gmail.com</h5>
					<a href="https://api.whatsapp.com/send?phone=+919471543076" target={"_blank"}>
						Send a message
					</a>
				</article>
			</div>
			<form action="">
				<input type="text" name='name' placeholder="Your Full Name" required />
				<input type="email" name='email' placeholder="Your Email" required />
				<textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea>
				<button type="submit" className="btn btn-primary">Send Message</button>
			</form>
		</div>
	</section>;
};

export default Contact;
