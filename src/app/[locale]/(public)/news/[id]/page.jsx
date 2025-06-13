"use client";
import axios from "axios";
import Image from "next/image";
import BlogDate from "@/components/BlogDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Trail from "@/components/Trail";
import User from "@/components/User";
import { FaGithub, FaFacebook, FaTwitter, FaShareAlt } from "react-icons/fa";
import Hood from "@/components/Hood";

async function fetchPosts(id) {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  return res.data
}

export default function Single() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await fetchPosts(id)
      setPosts(data)
    })();
  }, [id])

  if (!posts) {
    return (
      <main className="flex min-h-screen bg-gray-50 flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Hood 
        hood="Blog Details" 
        title="Blog Details" 
        paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"
      />
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image Section */}
          <div className="relative w-full h-[60vh]">
            <Image 
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Featured Image" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Artificial Intelligence For Good: How AI Is Helping Humanity
              </h1>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <User />
                  <BlogDate dateString={"2022-02-05"} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Share:</span>
                  <div className="flex gap-3 text-gray-600">
                    <FaGithub className="hover:text-primary cursor-pointer transition-colors" />
                    <FaFacebook className="hover:text-primary cursor-pointer transition-colors" />
                    <FaTwitter className="hover:text-primary cursor-pointer transition-colors" />
                    <FaShareAlt className="hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                If a dog chews shoes whose shoes does he choose? This is just the beginning of our exploration into the fascinating world of artificial intelligence and its impact on our daily lives.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Takeaways</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Understanding AI's role in modern society</li>
                  <li>Real-world applications and success stories</li>
                  <li>Future implications and developments</li>
                </ul>
              </div>
            </div>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Artificial Intelligence
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Technology
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <Trail />
        </div>
      </div>
    </main>
  );
}
