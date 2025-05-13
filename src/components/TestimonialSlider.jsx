import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard"; // Use your testimonial card component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sabita J",
    timeAgo: "4 weeks ago",
    message:
      "We approached GRK Events for our daughter's 1st birthday. The output was as expected and very nicely done and also budget friendly. Thank you Kannan Sir and his team.",
    rating: 4,
    avatarUrl: "https://via.placeholder.com/80",
  },
  {
    name: "Arun Kumar",
    timeAgo: "2 weeks ago",
    message:
      "Truly professional team. They understood our needs and created an amazing engagement event. Highly recommended!",
    rating: 5,
    avatarUrl: "https://via.placeholder.com/80",
  },
  {
    name: "Priya Ramesh",
    timeAgo: "1 month ago",
    message:
      "I was really impressed with the creativity and punctuality of the team. Everything went smoothly!",
    rating: 5,
    avatarUrl: "https://via.placeholder.com/80",
  },
   {
    name: "Swetha Ravichandran",
    timeAgo: "4 weeks ago",
    message:
      "We approached GRK Events for our daughter's 1st birthday. The output was as expected and very nicely done and also budget friendly. Thank you Kannan Sir and his team.",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/80?img=1",
  },
  {
    name: "Arun Kumar",
    timeAgo: "2 weeks ago",
    message:
      "Truly professional team. They understood our needs and created an amazing engagement event. Highly recommended!",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/80?img=2",
  },
  {
    name: "Priya Ramesh",
    timeAgo: "1 month ago",
    message:
      "I was really impressed with the creativity and punctuality of the team. Everything went smoothly!",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/80?img=3",
  },
  {
    name: "Karthik S",
    timeAgo: "3 days ago",
    message:
      "Excellent service and beautiful decor! It truly elevated our anniversary celebration.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/80?img=4",
  },
  {
    name: "Lakshmi Devi",
    timeAgo: "1 week ago",
    message:
      "From planning to execution, GRK Events handled everything with such professionalism. A pleasure to work with!",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Ravi Prasad",
    timeAgo: "5 days ago",
    message:
      "Great work! My son’s birthday party looked like a dream. Thank you GRK team!",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/80?img=6",
  },
];

const TestimonialSlider = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
initialSlide: 0,
responsive: [
    {
    breakpoint: 1080,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
    }
    },
    {
    breakpoint: 700,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
]
};

  return (
    <div className="w-full px-6 md:px-16 max-w-7xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-[300px]">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;