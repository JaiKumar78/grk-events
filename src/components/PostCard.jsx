import { Link } from "react-router-dom"


const PostCard = ({ id, title, location, price, imageurl }) => {
  return (
    <Link
    to={`/events/${id}`}
    className="block bg-white rounded-xl shadow-md overflow-hidden max-w-sm hover:shadow-xl hover:scale-103 ease-in-out transition duration-300"
    >
        <div className="overflow-hidden">
            <img
            src={imageurl?.[0]}
            alt={title}
            className="h-[30vh] md:h-[40vh] w-full object-cover "
        />
        </div>
        
        <div className="p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">{location}</p>
            <p className="text-main font-bold mt-2">₹ {price}</p>
        </div>
    </Link>
  )
}

export default PostCard