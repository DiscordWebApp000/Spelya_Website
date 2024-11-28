'use client';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogDate from './BlogDate';

// Static data array instead of API call
const posts = [
  { id: 1, title: 'React 18: What’s New and Why You Should Care', date: '2023-11-01', imgSrc: '/img/lisanslar.jpg' },
  { id: 2, title: 'JavaScript Modern Features Every Developer Should Know', date: '2023-10-25', imgSrc: '/img/lisanslar.jpg' },
  { id: 3, title: 'The Future of Web Development in 2024', date: '2023-09-12', imgSrc: '/img/lisanslar.jpg' },
  { id: 4, title: 'How to Master Tailwind CSS for Efficient Styling', date: '2023-08-20', imgSrc: '/img/lisanslar.jpg' },
  { id: 5, title: 'Understanding Next.js for Fast React Apps', date: '2023-07-15', imgSrc: '/img/lisanslar.jpg' },
  { id: 6, title: 'Web Performance Optimization: Best Practices', date: '2023-06-10', imgSrc: '/img/lisanslar.jpg' },
  { id: 7, title: 'How to Secure Your Web Application in 2024', date: '2023-05-05', imgSrc: '/img/lisanslar.jpg' },
  { id: 8, title: 'GraphQL vs REST API: Which One Should You Choose?', date: '2023-04-22', imgSrc: '/img/lisanslar.jpg' },
  { id: 9, title: 'Exploring TypeScript for Type Safety in JavaScript', date: '2023-03-17', imgSrc: '/img/lisanslar.jpg' },
  { id: 10, title: 'The Power of Functional Programming in JavaScript', date: '2023-02-28', imgSrc: '/img/lisanslar.jpg' },
  { id: 11, title: 'A Beginner’s Guide to CSS Grid Layout', date: '2023-01-12', imgSrc: '/img/lisanslar.jpg' },
  { id: 12, title: 'JavaScript Design Patterns Every Developer Should Know', date: '2022-12-15', imgSrc: '/img/lisanslar.jpg' },
];

const News = ({ max = 3, news = true }) => {
  // Number of pages
  const totalPages = Math.ceil(posts.length / max);

  // Skeleton loader when posts are being rendered
  const skeletonLoader = (
    <div className="skeleton-card w-full max-w-[300px] mx-auto bg-gray-200 rounded-md shadow-md p-4">
      <div className="skeleton h-40 w-full bg-gray-300 rounded-md mb-4"></div>
      <div className="skeleton h-4 w-3/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="skeleton h-4 w-full bg-gray-300 rounded-md"></div>
    </div>
  );

  // Rendering posts
  return (
    <section className="w-full flex flex-col items-center gap-10 mt-20 p-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Güncel Haberler
      </h1>
      <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.slice(0, max).map((item) => (
          <Suspense
            key={item.id}
            fallback={skeletonLoader}
          >
            <div className="card w-full max-w-[300px] mx-auto bg-white rounded-md shadow-md overflow-hidden hover:scale-105 transform transition-all duration-300">
              <Link href={`/news/${item.id}`} className="block">
                <figure className="h-40 overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt="News image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </Link>
              <div className="p-4 flex flex-col gap-2">
                <Link
                  href={`/news/${item.id}`}
                  className="text-lg font-semibold line-clamp-2 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
                <div className="text-gray-500">
                  <BlogDate dateString={item.date} />
                </div>
              </div>
            </div>
          </Suspense>
        ))}
      </div>
      {/* Pagination - Only show if news is true */}
      {news && totalPages > 1 && (
        <div className="pagination flex gap-2 mt-6">
          {Array.from({ length: Math.min(10, totalPages) }).map((_, idx) => (
            <button
              key={idx}
              className="btn rounded-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              {idx + 1}
            </button>
          ))}
          {totalPages > 8 && (
            <button className="btn rounded-full py-2 px-4 bg-gray-300 text-gray-700 hover:bg-gray-200 transition-colors">
              Sayfa Ekle
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default News;
