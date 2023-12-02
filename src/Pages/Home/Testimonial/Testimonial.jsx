import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className=" border-purple-500 border-4 mt-10 bg-purple-200">
            <p className=" text-center text-3xl mt-6 font-bold">User Reviews</p>
            <Swiper className="mySwiper">

                {
                    review.map(r => <SwiperSlide
                        key={r._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                        <h3 className="text-2xl">{r.name}</h3>
                            <Rating className="text-purple-400"
                                style={{ maxWidth: 180}}
                                value={r.rating}
                                readOnly
                            />
                            <p className="py-8">{r.details}</p>
                            
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;