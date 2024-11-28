import { AiFillAccountBook } from "react-icons/ai";

export default function Hizmetler() {
  return (
    <div className="w-full flex flex-col items-center py-16 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8 px-6 max-w-3xl">
        We deliver great quality and performance while offering you the most recent AI
        Business products.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <AiFillAccountBook className="text-5xl text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Research and Discovery</h2>
          <p className="text-gray-600">
            A magical tool to optimize your content for targeted audiences.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <AiFillAccountBook className="text-5xl text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Strategy Planning</h2>
          <p className="text-gray-600">
            Crafting personalized strategies to align with your business goals.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <AiFillAccountBook className="text-5xl text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Content Optimization</h2>
          <p className="text-gray-600">
            Improve your content's reach and relevance with cutting-edge tools.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <AiFillAccountBook className="text-5xl text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Analysis</h2>
          <p className="text-gray-600">
            Utilize powerful analytics to drive informed business decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
