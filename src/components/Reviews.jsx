'use client'
import React, { useState } from 'react';

const Filter = ({ label, isSelected, progress }) => {
    return (
        <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-3 w-20">
                <div
                    className={`rounded-full border border-black ${isSelected ? "bg-black" : "bg-white"
                        } w-5 h-5 flex justify-center items-center`}
                >
                    <div className="bg-white rounded-full w-2 h-2" />
                </div>
                <h5 className="text-[1.25rem] leading-[1.25rem] tracking-[0] font-medium py-3">
                    {label}
                </h5>
            </div>
            <div className="border-t-gray-400 rounded-xs relative bottom-0 h-[3px] w-24  border-t-[3px]">
                <div
                    className="border-t-black rounded-sm absolute -top-[3px] border-t-[3px] ease-in-out motion-safe:transition-all motion-safe:duration-200"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <h5 className="text-[1.25rem] leading-[1.25rem] tracking-[0] font-medium py-3 w-20">
                {progress}%
            </h5>
        </div>
    );
};

const Message = ({ name, date, message, rating, isVerified }) => {
    return (
        <div className="py-6 border-b border-gray-400 space-y-8">
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 font-semibold">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-xl text-black">{name}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-base text-gray-700">Purchased on {date}</p>
                        {isVerified && (
                            <span className="px-2 py-1 text-black text-sm bg-lime-200 flex gap-1 items-center rounded-full">
                                <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
                                    <path d="M20.53 6.073a.75.75 0 0 1 0 1.06L9.884 17.78a1.25 1.25 0 0 1-1.768 0L3.47 13.134a.75.75 0 0 1 1.06-1.06L9 16.542l10.47-10.47a.75.75 0 0 1 1.06 0"></path>
                                </svg>Verified purchase
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-2xl ${i < rating ? "text-black" : "text-gray-400"}`}>
                        ★
                    </span>
                ))}
                <span className="ml-1 text-base text-gray-700">{rating}/5</span>
            </div>
            <p className="text-black">
                {message}
            </p>
            <p className="text-base text-gray-700">
                Reviewed in the United States on {date}
            </p>
        </div>
    );
};

const Reviews = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [reviewsToShow, setReviewsToShow] = useState(3);
    const [isSeeMore, setIsSeeMore] = useState(true);
    const [ratingFilter, setRatingFilter] = useState(["All", "4-5", "3-4", "2-3", "1-2"]);
    // Reviews data
    const reviews = [
        {
            name: 'James M.',
            date: 'January 11, 2025',
            message: 'I was sold an iPhone 13 with multiple screen burn-in instances...',
            rating: 1,
            isVerified: true,
        },
        {
            name: 'John D.',
            date: 'January 12, 2025',
            message: 'Great phone, works perfectly. Battery life is amazing!',
            rating: 5,
            isVerified: false,
        },
        {
            name: 'Sarah W.',
            date: 'January 15, 2025',
            message: 'Not happy with the product, it had some minor scratches...',
            rating: 3,
            isVerified: true,
        },
        {
            name: 'Alice P.',
            date: 'January 18, 2025',
            message: 'Excellent! Exactly what I expected. Very satisfied!',
            rating: 5,
            isVerified: false,
        },
        {
            name: 'Robert L.',
            date: 'January 20, 2025',
            message: 'The screen is fine but there was a dent on the corner...',
            rating: 2,
            isVerified: true,
        },
    ];

    // Function to filter reviews by rating
    const filterReviewsByRating = () => {
        switch (selectedIndex) {
            case 1:
                return reviews.filter((review) => review.rating >= 4);
            case 2:
                return reviews.filter((review) => review.rating >= 3 && review.rating < 4);
            case 3:
                return reviews.filter((review) => review.rating >= 2 && review.rating < 3);
            case 4:
                return reviews.filter((review) => review.rating <= 2);
            default:
                return reviews; // All reviews
        }
    };

    // Function to calculate the percentage of reviews for each rating range
    const calculateProgress = () => {
        const totalReviews = reviews.length;
        const ratingsCount = [0, 0, 0, 0, 0]; // Indexes: [1 star, 2 stars, 3 stars, 4 stars, 5 stars]

        // Count the number of reviews for each rating
        reviews.forEach((review) => {
            ratingsCount[review.rating - 1]++;
        });

        // Calculate the percentage for each rating range
        return ratingsCount.map((count) => Math.round((count / totalReviews) * 100));
    };

    // Handle showing more/less reviews
    const handleShowMoreReviews = () => {
        if (isSeeMore) {
            setReviewsToShow((prev) => prev + 5);
        } else {
            setReviewsToShow(3);
        }
        setIsSeeMore(!isSeeMore);
    };

    // Get the progress for each rating
    const progress = calculateProgress();

    return (
        <div className="bg-gray-100">
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-[1.4rem] leading-[2rem] tracking-[0] font-semibold">
                        iPhone 13 128GB - Red - Unlocked's customer reviews
                    </h2>
                    <div className="flex items-center text-[#0e1016] gap-2 font-semibold bg-transparent mb-4">
                        <div className="flex">
                            {/* Stars SVG */}
                        </div>
                        <span className="text-[1.4rem] leading-[2rem] tracking-[0] font-semibold">4.4/5</span>
                        <div className="text-[0.875rem] leading-[1.25rem] tracking-[0] flex gap-1 items-center text-gray-800">
                            <span>1,769 verified reviews in the last 12 months.</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <h4 className="text-[1.25rem] leading-[1.25rem] tracking-[0] font-semibold py-3">
                            Filter by stars
                        </h4>
                        <div>
                            {ratingFilter.map((label, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <Filter
                                        label={label}
                                        isSelected={index === selectedIndex}
                                        progress={progress[index]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3">
                        {filterReviewsByRating().slice(0, reviewsToShow).map((review, i) => (
                            <Message
                                key={i}
                                name={review.name}
                                date={review.date}
                                message={review.message}
                                rating={review.rating}
                                isVerified={review.isVerified}
                            />
                        ))}
                        <div className="my-12">
                            <button
                                className="px-6 py-2 border border-black text-black rounded-md"
                                onClick={handleShowMoreReviews}
                            >
                                {isSeeMore ? 'See more reviews' : 'See less reviews'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
