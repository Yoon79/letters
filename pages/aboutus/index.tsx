import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";
import Footer from "../components/footer";
import Typewriter from "typewriter-effect";

const AboutUs: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="/yellowdancer.png"
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
        <div className="flex-col pt-5 py-6">
          <div className="font-mono font-bold text-gray-800 text-xl">
            오렌지빛을 쥐고
          </div>
          <div className="font-mono mt-1.5 text-gray-700 font-medium">2024</div>
          <div className="flex-col pt-5 py-6 font-mono">
            <Typewriter
              options={{
                strings: [
                  "안녕하쎄용",
                  "스웨덴세탁소의 교환일기장 입니다.",
                  "우세정👕 ",
                  "브이로그 보러가기👇",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex">
            <div className="mr-1 text-gray-700 font-mono font-medium">
              instagram{" "}
            </div>
            <img
              src="/instagram.png"
              alt="Picture of the author"
              width={23}
              height={20}
            />
          </div>
          <a
            href="https://www.instagram.com/swedenlaundry_s2/"
            target="__blank">
            <div className="text-gray-800 font-semibold font-mono text-l cursor-pointer hover:text-[#e98143]">
              @swedenlaundry_s2
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
