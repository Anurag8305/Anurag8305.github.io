import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_67sz62e",
			"template_nkb3akd",
			form.current,
			"tQCx7kkFz7Hete7Yu"
		);
		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>anuragraj8305@gmail.com</h5>
						<a href="mailto:anuragraj8305@gmail.com"  target={"_blank"} rel="noreferrer">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsGithub className="contact__option-icon" />
						<h4>GitHub</h4>
						<h5>Anurag8305</h5>
						<a href="https://github.com/Anurag8305" target={"_blank"} rel="noreferrer">
							Watch me on GitHub
						</a>
					</article>
					<article className="contact__option">
						<BsLinkedin className="contact__option-icon" />
						<h4>LinkedIN</h4>
						<h5>anuragraj8305@gmail.com</h5>
						<a href="https://www.linkedin.com/in/anurag-raj-809a82137/"  target={"_blank"} rel="noreferrer">
							Connect on LinkedIn
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>anuragraj8305@gmail.com</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+919471543076"
							target={"_blank"} rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						id=""
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
