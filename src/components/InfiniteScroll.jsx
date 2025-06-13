import React from "react";
import Image from "next/image"; // Import Image component

const InfiniteScroll = () => {
  const cards = [
    { title: "Ürün 1", description: "Açıklama 1", price: "$10", image: "/img/lisanslar.jpg" },
    { title: "Ürün 2", description: "Açıklama 2", price: "$20", image: "/img/lisanslar.jpg" }, // Use the same image for all cards
    { title: "Ürün 3", description: "Açıklama 3", price: "$30", image: "/img/lisanslar.jpg" },
    { title: "Ürün 4", description: "Açıklama 4", price: "$40", image: "/img/lisanslar.jpg" },
    { title: "Ürün 5", description: "Açıklama 5", price: "$50", image: "/img/lisanslar.jpg" },
    { title: "Ürün 6", description: "Açıklama 6", price: "$60", image: "/img/lisanslar.jpg" },
    { title: "Ürün 7", description: "Açıklama 7", price: "$70", image: "/img/lisanslar.jpg" },
    { title: "Ürün 8", description: "Açıklama 8", price: "$80", image: "/img/lisanslar.jpg" },
    { title: "Ürün 9", description: "Açıklama 9", price: "$90", image: "/img/lisanslar.jpg" },
    { title: "Ürün 10", description: "Açıklama 10", price: "$100", image: "/img/lisanslar.jpg" },
    { title: "Ürün 11", description: "Açıklama 11", price: "$110", image: "/img/lisanslar.jpg" },
    { title: "Ürün 12", description: "Açıklama 12", price: "$120", image: "/img/lisanslar.jpg" },
    { title: "Ürün 1", description: "Açıklama 1", price: "$10", image: "/img/lisanslar.jpg" },
    { title: "Ürün 2", description: "Açıklama 2", price: "$20", image: "/img/lisanslar.jpg" }, // Use the same image for all cards
    { title: "Ürün 3", description: "Açıklama 3", price: "$30", image: "/img/lisanslar.jpg" },
    { title: "Ürün 4", description: "Açıklama 4", price: "$40", image: "/img/lisanslar.jpg" },
    { title: "Ürün 5", description: "Açıklama 5", price: "$50", image: "/img/lisanslar.jpg" },
    { title: "Ürün 6", description: "Açıklama 6", price: "$60", image: "/img/lisanslar.jpg" },
    { title: "Ürün 7", description: "Açıklama 7", price: "$70", image: "/img/lisanslar.jpg" },
    { title: "Ürün 8", description: "Açıklama 8", price: "$80", image: "/img/lisanslar.jpg" },
    { title: "Ürün 9", description: "Açıklama 9", price: "$90", image: "/img/lisanslar.jpg" },
    { title: "Ürün 10", description: "Açıklama 10", price: "$100", image: "/img/lisanslar.jpg" },
    { title: "Ürün 11", description: "Açıklama 11", price: "$110", image: "/img/lisanslar.jpg" },
    { title: "Ürün 12", description: "Açıklama 12", price: "$120", image: "/img/lisanslar.jpg" },
  ];

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-900 text-white flex gap-4 p-4 transform rotate-[-30deg]">
      {[...Array(3)].map((_, colIndex) => (
        <div
          key={colIndex}
          className={`flex flex-col gap-6 ${
            colIndex % 2 === 0 ? "animate-scroll-down" : "animate-scroll-up"
          }`}
        >
          {Array(24) // Changed to 12 for 12 cards
            .fill("")
            .map((_, index) => {
              const card = cards[index % cards.length]; // Infinite data loop with the new array length
              return (
                <div
                  key={index}
                  className="w-72 bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center"
                >
                  {/* Image Section with Image component */}
                  <Image
                    src={card.image} // Reference image from public folder
                    alt={card.title} // Alt text for the image
                    width={288} // Set width (adjust based on your design)
                    height={192} // Set height (adjust based on your design)
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg font-bold text-black">{card.title}</h2>
                  <p className="text-sm text-gray-400">{card.description}</p>
                  <span className="mt-2 text-xl font-semibold text-green-500">
                    {card.price}
                  </span>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
