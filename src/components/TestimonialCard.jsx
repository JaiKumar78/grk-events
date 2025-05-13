import { FaStar, FaRegStar } from 'react-icons/fa';
import assets from '../assets/assets';


const TestimonialCard = ({
  name,
  timeAgo,
  message,
  rating,
  avatarUrl,
}) => {
  return (
    <div className="w-[300px] h-[261px] bg-gray-300 rounded-[20px] p-4 flex flex-col justify-between">
      <div className="flex items-center gap-4">
        <img
          src={assets.user}
          alt={`${name}'s avatar`}
          className="w-20 h-20 rounded-full object-cover bg-gray-300"
        />
        <div>
          <p className="font-extrabold text-lg text-black">{name}</p>
          <p className="text-sm text-black">{timeAgo}</p>
        </div>
      </div>

      <hr className="border-gray-400 my-2" />

      <p className="text-black text-sm leading-relaxed line-clamp-4">
        {message}
      </p>

      <div className="flex mt-2">
        
        {[...Array(5)].map((_, i) => (
        i < rating ? (
            <FaStar key={i} size={20} className="text-yellow-400 mr-1" />
        ) : (
            <FaRegStar key={i} size={20} className="text-gray-400 mr-1" />
        )
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;