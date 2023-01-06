import React from "react";
import "./Testimonial.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonial = () => {
	return (
		<section id="testimonial">
			<h5>People with whom I have worked</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonial__container"
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={40}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
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
