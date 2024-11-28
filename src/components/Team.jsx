import Image from "next/image";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

// Kullanıcı verilerini bir dizide tutalım
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Alice Johnson",
    role: "Product Designer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Specialist",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "David Lee",
    role: "UX/UI Designer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Emily Davis",
    role: "Software Engineer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Chris Wilson",
    role: "Content Strategist",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mx-4 mb-8">
        Meet Our Dynamic Team Members, Who Really Care About You
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="card bg-base-100 shadow-xl flex flex-col justify-between items-center"
            style={{ width: "250px", height: "350px" }}
          >
            <figure className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div className="card-body flex flex-col justify-center items-center text-center">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.role}</p>
              <div className="flex gap-4 mt-2">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-primary cursor-pointer" />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-xl hover:text-primary cursor-pointer" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-xl hover:text-primary cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
