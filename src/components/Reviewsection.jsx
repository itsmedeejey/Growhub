import React, { useState } from "react";
const initialReviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    comment: "Absolutely loved it! The quality is top-notch and delivery was quick.",
    date: "May 15, 2025",
  },
  {
    id: 2,
    name: "Sanya Patel",
    rating: 4,
    comment: "Good value for money. Looks just like the pictures.",
    date: "May 12, 2025",
  },
  {
    id: 3,
    name: "Rohan Das",
    rating: 3,
    comment: "Decent product, but packaging could be better.",
    date: "May 9, 2025",
  },
  {
    id: 4,
    name: "Isha Verma",
    rating: 5,
    comment: "Exceeded expectations! Will definitely buy again.",
    date: "May 8, 2025",
  },
  {
    id: 5,
    name: "Kabir Mehta",
    rating: 2,
    comment: "Not worth the price. Quality could be better.",
    date: "May 6, 2025",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    rating: 4,
    comment: "Very satisfied. Just wish the color was slightly brighter.",
    date: "May 4, 2025",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    rating: 5,
    comment: "Fantastic product! Smooth experience from order to delivery.",
    date: "May 2, 2025",
  },
  {
    id: 8,
    name: "Divya Rao",
    rating: 3,
    comment: "It’s okay for occasional use. Not very durable.",
    date: "April 29, 2025",
  },
  {
    id: 9,
    name: "Yusuf Khan",
    rating: 1,
    comment: "Completely disappointed. The item arrived damaged.",
    date: "April 28, 2025",
  },
  {
    id: 10,
    name: "Aditi Mishra",
    rating: 4,
    comment: "Good quality and fast shipping. Packaging could be improved.",
    date: "April 26, 2025",
  },
  {
    id: 11,
    name: "Tanmay Sen",
    rating: 5,
    comment: "Highly recommend! Great service and amazing product.",
    date: "April 24, 2025",
  },
  {
    id: 12,
    name: "Meera Iqbal",
    rating: 3,
    comment: "Average. It does the job but nothing special.",
    date: "April 22, 2025",
  },
  {
    id: 13,
    name: "Anuj Batra",
    rating: 4,
    comment: "Really happy with the purchase. Value for money.",
    date: "April 20, 2025",
  },
];



  const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-[#F6A429]" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < rating ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          d="M12 .587l3.668 7.431L24 9.423l-6 5.84 1.417 8.263L12 18.897l-7.417 4.63L6 15.263 0 9.423l8.332-1.405z"
        />
      </svg>
    ))}
  </div>
);



export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating) {
      setReviews([
        {
          id: Date.now(),
          ...newReview,
          date: new Date().toLocaleDateString(),
        },
        ...reviews,
      ]);
      setNewReview({ name: "", comment: "", rating: 0 });
    }
  };

  return (  
    <div className="flex flex-col justify-center   items-center mx-auto my-10 p-4">
      <h2 className="text-2xl font-semibold mb-4">Product's Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="shadow-lg space-y-4 mb-8 border p-4 rounded-xl bg-white w-[360px] md:w-[600px] lg:w-[700px]">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-3 py-2 rounded-xl"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <textarea
          placeholder="Write your review..."
          className="w-full border px-3 py-2 rounded-xl"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        ></textarea>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`text-xl ${
                newReview.rating >= star ? "text-[#F6A429]" : "text-gray-300"
              }`}
              onClick={() =>
                setNewReview({ ...newReview, rating: star })
              }
            >
              ★
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-1 rounded-full hover:bg-purple-800"
        >
          Submit Review
        </button>
      </form>

      <div className=" grid grid-cols-1  gap-4  mt-10 max-w-[800px] justify-center items-center">
        {reviews.map((review) => (
          <div
            key={review.id}
            className=" h-auto w-[360px] sm:w-[600px] md:w-[700px] border rounded-lg p-4 shadow-sm justify-center items-center bg-[#fff]"
          >
            <StarRating rating={review.rating} />
            <div className="flex justify-between items-center pt-1">
              <h3 className="font-semibold">{review.name}</h3>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700 text-sm pt-5">{review.comment}</p>
          </div>
        ))}
      </div>
      

      {/* Load More Button (mocked) */}
      <div className="text-center mt-6">
        <button className="bg-slate-500 px-5 py-2 text-white rounded-full hover:bg-blue-800">Read More</button>
      </div>
    </div>
  );
}
