import React from "react";
import "./Testimonial.css";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Ankesh from "../../Images/Ankesh.jpg";
import Altaf from "../../Images/Altaf.png";
import Prince from "../../Images/Prince.jpeg";
const Testimonial = () => {
	return (
		<section id="testimonial">
			<h5>People with whom I have worked</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonial__container"
				modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
				spaceBetween={40}
				slidesPerView={1}
				autoplay={{delay:2000}}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
			<SwiperSlide className="testimonial">
					<div className="client__avatar">
						<img src={Prince} alt="peers_photo" srcset="" />
					</div>
					<h5 className="client__name">Prince Singh</h5>
					<small className="client__review">
					It was great working with Anurag. Found him very supportive, 
					disciplined, and punctual. In the leadership of Anurag 
					I was able to complete all my tasks and issues on time. 
					He use to take the right decision at the right time . would be very
					happy if i get a change to work with him again
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonial">
					<div className="client__avatar">
						<img src={Ankesh} alt="peers_photo" srcset="" />
					</div>
					<h5 className="client__name">Ankesh Chopde</h5>
					<small className="client__review">
						My overall experience was great. 
						All were very cooperative but specifically if I
						say about you then it was very nice to work with you during working
						on our project. You come up with idea and also you design the logo of
						our website and you also contributed and give advice and suggestions
						when someone was in need.
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonial">
					<div className="client__avatar">
						<img src={Altaf} alt="peers_photo" srcset="" />
					</div>
					<h5 className="client__name">Altaf Khan</h5>
					<small className="client__review">
					I appreciate your collaboration in construct week project.
					You did hard work and I am very happy to got team member like you.
					You did very well. In future projects I would also invite you to make best projects.
					</small>
				</SwiperSlide>
				
			</Swiper>
		</section>
	);
};

export default Testimonial;
