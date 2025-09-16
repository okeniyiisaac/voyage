import React, { useState } from "react";
import Card from "./Card";

const Places = () => {
  const trips = [
    {
      image:
        "https://i.postimg.cc/wj13qLjh/life-s-captured-sparks-wdmubbjp1z-Q-unsplash.jpg",
      title: "United-States",
      desc: "from",
      price: "500,000",
    },
    {
      image: "https://i.postimg.cc/dVCTYp62/italy.jpg",
      title: "Italy",
      price: "700,000",
    },
    {
      image: "https://i.postimg.cc/fTJ8xWWM/France.jpg",
      title: "France",
      price: "610,500",
    },
    {
      image: "https://i.postimg.cc/ZKBLWfjR/japan.jpg",
      title: "Japan",
      price: "950,300",
    },
    {
      image: "https://i.postimg.cc/YSn34Jcv/united-kingdom.jpg",
      title: "United-Kingdom",
      price: "700,000",
    },
    {
      image: "https://i.postimg.cc/zBHnyvSQ/Australia.jpg",
      title: "Australia",
      price: "650,000",
    },
    {
      image: "https://i.postimg.cc/GpVDnrwx/Canada.jpg",
      title: "Canada",
      price: "520,000",
    },
    {
      image: "https://i.postimg.cc/h4bXpVjr/Spain.jpg",
      title: "Spain",
      price: "730,500",
    },
    {
      image: "https://i.postimg.cc/DZc7ddg4/Germany.jpg",
      title: "Germany",
      price: "650,500",
    },
    {
      image: "https://i.postimg.cc/3RfcTkrb/Brazil.jpg",
      title: "Brazil",
      price: "850,000",
    },
    {
      image: "https://i.postimg.cc/3J1n5yLj/Greece.jpg",
      title: "Greece",
      price: "700,000",
    },
    {
      image: "https://i.postimg.cc/RFwLPq6H/Mexico.jpg",
      title: "Mexico",
      price: "50",
    },
    {
      image: "https://i.postimg.cc/WzXWntC7/Thailand.jpg",
      title: "Thailand",
      price: "850,000",
    },
    {
      image: "https://i.postimg.cc/j2gcfmng/India.jpg",
      title: "India",
      price: "952,000",
    },
    {
      image: "https://i.postimg.cc/Jn7jQKL9/South-africa.jpg",
      title: "South Africa",
      price: "560,000",
    },
    {
      image: "https://i.postimg.cc/13x6dyS0/Dubai.jpg",
      title: "United-Arab Emirates",
      price: "480,000",
    },
    {
      image: "https://i.postimg.cc/G9n2XhDH/Singapore.jpg",
      title: "Singapore",
      price: "754,500",
    },
    {
      image: "https://i.postimg.cc/fTYf78SR/netherlands.jpg",
      title: "Netherlands",
      price: "700,000",
    },
    {
      image: "https://i.postimg.cc/c4WnW06d/Switzerland.jpg",
      title: "Switzerland",
      price: "750,000",
    },
    {
      image: "https://i.postimg.cc/8zjPQ0d1/turkey.jpg",
      title: "Turkey",
      price: "759,000",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate indexes
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = trips.slice(indexOfFirstCard, indexOfLastCard);

  // Total pages
  const totalPages = Math.ceil(trips.length / cardsPerPage);

  return (
    <div className="p-6">
      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {currentCards.map((trip, index) => (
          <Card
            key={index}
            image={trip.image}
            title={trip.title}
            desc={trip.desc}
            price={trip.price}
          />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-[#1CA8CB] text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Places;