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
						<img src={Ankesh} alt="peers_photo" srcset="" />
					</div>
					<h5 className="client__name">Ankesh Chopde (Team-Member)</h5>
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
						<img src="" alt="peers_photo" srcset="" />
					</div>
					<h5 className="client__name">Name of the team member</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
						voluptatem debitis laudantium officia vero perferendis, quod aliquid
						dignissimos aliquam, sequi culpa esse iure! Velit ea minima
						assumenda, excepturi aspernatur pariatur!
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonial">
					<div className="client__avatar">
						<img src="" alt="peers_photo" srcset="" />
					</div>
					<h5 className="client__name">Name of the team member</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
						voluptatem debitis laudantium officia vero perferendis, quod aliquid
						dignissimos aliquam, sequi culpa esse iure! Velit ea minima
						assumenda, excepturi aspernatur pariatur!
					</small>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Testimonial;
