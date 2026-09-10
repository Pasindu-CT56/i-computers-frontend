import { useContext, useEffect, useState } from "react";
import api from "../lib/api";
import UserContext from "../context/userContext";
import toast from "react-hot-toast";
import { FaStar, FaRegStar } from "react-icons/fa";
import formatTimestamp from "../lib/date-format";

function StarRow(props) {
    const rating = props.rating;
    const onSelect = props.onSelect;
    const size = props.size || "text-lg";

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= rating;
        stars.push(
            filled ? (
                <FaStar
                    key={i}
                    className={`${size} text-yellow-500 ${onSelect ? "cursor-pointer" : ""}`}
                    onClick={() => onSelect && onSelect(i)}
                />
            ) : (
                <FaRegStar
                    key={i}
                    className={`${size} text-yellow-500 ${onSelect ? "cursor-pointer" : ""}`}
                    onClick={() => onSelect && onSelect(i)}
                />
            )
        );
    }

    return <div className="flex gap-1">{stars}</div>;
}

export default function ReviewSection(props) {

    const productId = props.productId;
    const userData = useContext(UserContext);

    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [loading, setLoading] = useState(true);

    const [myRating, setMyRating] = useState(0);
    const [myComment, setMyComment] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {

        if (loading) {
            api.get("/reviews/" + productId).then((res) => {

                setReviews(res.data.reviews);
                setAverageRating(res.data.averageRating);
                setTotalReviews(res.data.totalReviews);

                if (userData.user != null) {
                    const existingReview = res.data.reviews.find(
                        (review) => review.email === userData.user.email
                    );

                    if (existingReview) {
                        setMyRating(existingReview.rating);
                        setMyComment(existingReview.comment);
                    }
                }

                setLoading(false);

            }).catch(() => {
                toast.error("Failed to load reviews");
                setLoading(false);
            });
        }

    }, [loading]);

    async function handleSubmitReview() {

        if (userData.user == null) {
            toast.error("Please login to leave a review");
            return;
        }

        if (myRating < 1) {
            toast.error("Please select a star rating");
            return;
        }

        setSubmitting(true);
        const token = localStorage.getItem("token");

        try {

            await api.post(
                "/reviews/" + productId,
                { rating: myRating, comment: myComment },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("Review submitted, thank you!");
            setLoading(true);

        } catch (err) {
            console.log(err);
            toast.error("Failed to submit review");
        }

        setSubmitting(false);
    }

    return (
        <div className="w-full p-4 lg:p-8 pt-0">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Reviews</h2>

            <div className="flex items-center gap-3 mb-6">
                <StarRow rating={Math.round(averageRating)} size="text-2xl" />
                <span className="text-xl font-bold text-secondary">{averageRating.toFixed(1)}</span>
                <span className="text-gray-500">
                    ({totalReviews} review{totalReviews !== 1 ? "s" : ""})
                </span>
            </div>

            {userData.user != null && (
                <div className="w-full max-w-[500px] bg-white rounded-md shadow-md p-4 mb-6">
                    <h3 className="font-semibold text-secondary mb-2">
                        {myRating > 0 ? "Update your review" : "Leave a review"}
                    </h3>
                    <StarRow rating={myRating} onSelect={setMyRating} size="text-3xl" />
                    <textarea
                        value={myComment}
                        onChange={(e) => setMyComment(e.target.value)}
                        placeholder="Share your thoughts about this product..."
                        className="w-full h-[80px] border border-gray-300 rounded-md p-2 mt-3 mb-2 text-secondary"
                    />
                    <button
                        onClick={handleSubmitReview}
                        disabled={submitting}
                        className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300 disabled:opacity-50"
                    >
                        {myRating > 0 ? "Update Review" : "Submit Review"}
                    </button>
                </div>
            )}

            <div className="w-full max-w-[500px] flex flex-col gap-3">
                {reviews.map((review) => (
                    <div key={review._id} className="w-full bg-white rounded-md shadow-md p-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-secondary">
                                {review.firstName} {review.lastName}
                            </span>
                            <span className="text-sm text-gray-500">{formatTimestamp(review.date)}</span>
                        </div>
                        <StarRow rating={review.rating} />
                        {review.comment && <p className="text-gray-600 mt-1">{review.comment}</p>}
                    </div>
                ))}

                {reviews.length === 0 && !loading && (
                    <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                )}
            </div>
        </div>
    );
}