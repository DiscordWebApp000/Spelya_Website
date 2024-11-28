import User from "./User";

// Yorum verilerini burada bir dizi olarak tutabilirsin
const comments = [
  {
    title: "Amazing Product!",
    text: "This app has truly changed the way I work. Highly recommend it!",
  },
  {
    title: "Best purchase ever!",
    text: "I can't believe how useful this is. Worth every penny.",
  },
  {
    title: "Good but needs improvements",
    text: "The app is great, but there are a few bugs that need fixing.",
  },
  {
    title: "Great customer support",
    text: "I had an issue, and their customer support was super quick to help!",
  },
  {
    title: "Skeptical at first, but now I love it",
    text: "I was hesitant, but after using it for a while, I'm hooked.",
  },
  {
    title: "Not as expected",
    text: "I was expecting more features. It's okay but not amazing.",
  },
];

export default function Comments() {
  return (
    <div className="w-full my-10 md:py-20 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold w-1/2">
        <strong className="text-primary">AIMug.</strong> Received 4.8/5 Stars in Over 10,000+ Reviews.
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 p-4">
        {comments.map((comment, i) => (
          <div
            key={i}
            className="card card-compact bg-base-100 shadow-xl flex flex-col items-start justify-between min-h-[200px]  p-5"
          >
            <User className="mb-4" />
            <div className="card-body flex flex-col items-start justify-between">
              <h2 className="card-title text-start  ">{comment.title}</h2>
              <p className="text-sm text-start" >{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


