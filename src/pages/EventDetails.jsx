import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { getPostById } from "../firebase/firebase";

const EventDetails = () => {
  const { posts, currentEvent, setCurrentEvent } = useContext(EventContext);
  const { eventId } = useParams();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      setLoading(true);
      let event = await getPostById(eventId);

      if (event) {
        setCurrentEvent(event);
        setImage(event.imageurl?.[0] || "");
      }

      setLoading(false);
    };

    if (eventId) loadEvent();
  }, [eventId, posts, setCurrentEvent]);

  const isVideo = (url) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp.seconds * 1000);
    return dateObj.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

   if (loading) return <p className="text-center py-10">Loading event...</p>;
  if (!currentEvent) return <p className="text-center py-10">Event not found.</p>;
  return (
    <div className="px-6 md:px-16 lg:px-40 max-w-7xl mx-auto py-10">
      {/* Title & Location */}
      <h1 className="text-3xl font-bold mb-2">{currentEvent.title}</h1>
       <p className='text-sm text-gray-500 mt-1'>
            {currentEvent.category} | {currentEvent.subcategory} | {currentEvent.innersub}
          </p>
          <p className='text-sm text-gray-500 mt-1'>{currentEvent.location}</p>
          <p className='text-sm text-gray-500 mt-1'>{formatDate(currentEvent.date)}</p>
      <p className="text-lg font-semibold text-main mb-6 mt-3">₹{currentEvent.price}</p>

      {/* Primary Image */}
      {image && (
          isVideo(image) ? (
            <video
              src={image}
              autoPlay
              muted
              loop
              controls
              className="w-fit mx-auto h-[50vh] md:h-[70vh] object-cover md:object-contain rounded-lg mb-6 border border-gray-400 shadow-lg"
            />
          ) : (
            <img
              src={image}
              alt={currentEvent.title}
              className="w-fit mx-auto h-[50vh] md:h-[70vh] object-cover md:object-contain rounded-lg mb-6 border border-gray-400 shadow-lg"
            />
          )
        )}

      {/* All Images Grid */}
      <div className="flex overflow-x-scroll gap-3 mt-10">
        {currentEvent.imageurl?.map((url, idx) => (
          isVideo(url) ? (
            <video
              key={idx}
              src={url}
              muted
              className="w-full h-60 object-cover rounded-md cursor-pointer"
              onClick={() => setImage(url)}
            />
          ) : (
            <img
              key={idx}
              src={url}
              alt={`Image ${idx}`}
              className="w-full h-60 object-cover rounded-md cursor-pointer"
              onClick={() => setImage(url)}
            />
          )
        ))}
      </div>

      {/* Description */}
      <h2 className="text-xl font-semibold mb-2 mt-10">Included Features</h2>
      <ul className="list-disc list-inside text-gray-700">
        {currentEvent.description?.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;