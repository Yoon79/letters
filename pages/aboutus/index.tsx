import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";
import Footer from "../components/footer";
import Typewriter from 'typewriter-effect';

const AboutUs: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="lg:ml-56 mt-14 xl:ml-64">
          <img
            src="/yellowdancer.png"
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
        <div className="flex-col pt-5 py-6">
          <div className="font-mono font-bold text-gray-800 text-xl">
            LETTERS IN THE BOX
          </div>
          <div className="font-mono mt-1.5 text-gray-700 font-medium">
          2024
          </div>
          <div className="flex-col pt-5 py-6 font-mono">
          <Typewriter
              options={{
              strings: ["안녕하쎄용","스웨덴세탁소의 교환일기장 입니다."],
              autoStart: true,
              loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
