import Comments from '@/components/Comments';
import Counter from '@/components/Counter';
import Hizmetler from '@/components/Hizmetler';
import Questions from '@/components/Questions';
import References from '@/components/References';
import Team from '@/components/Team';
import Video from '@/components/Video';
import Image from 'next/image';
import Hood from "@/components/Hood";
import Trail from '@/components/Trail';

export const metadata = {
  title: 'Hakkımızda',
  description: 'Biz kimiz?',
}

export default function About() {
  return (
    <main className="flex min-h-screen bg-gray-50 flex-col items-center w-full justify-between py-24">
      <div className="container max-w-7xl px-6 space-y-16">
        {/* Introduction Section */}
        <Hood
          hood='About AIMug'
          title="A Magical Tool For Seamless Collaboration"
          paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"
        />

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 bg-white rounded-3xl shadow-xl p-8">
          <div className="lg:w-1/2 w-full">
            <Image
              src="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb"
              className="max-h-[26rem] w-full rounded-3xl object-cover"
              alt='AboutHero'
              width={1400}
              height={314}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6">Create Something New with AIMug, That’s Simple to Use</h1>
            <p className="text-gray-600 text-lg mb-6">
              There are more than 80+ use cases and templates to pick from to meet all of your writing demands. Let’s communicate with your customers with emotions.
            </p>
            <div className="flex gap-6 items-center">
              <div className="rating flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={index === 4}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by Section */}
        <div className="text-center font-extrabold text-2xl text-gray-800 space-y-2">
          <p className="text-lg text-gray-600">Trusted by</p>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-primary text-4xl">
              <Counter start={0} end={10.8} decimals={1} decimal="," duration={10} />K
            </span>
            <span className="text-2xl font-semibold text-gray-800">teams, agencies, and freelancers.</span>
          </div>
        </div>
        <References />


        {/* Video Section */}
        <Video />

        {/* Team, Comments, Services, and More */}
        <div className="space-y-8 mt-12">
          <Team />
          <Comments />
          <Hizmetler />
          <Questions />
          <Trail />
        </div>
      </div>
    </main>
  );
}
