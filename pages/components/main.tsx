import { useRef } from "react";
import { useState, useEffect } from "react";

export default function Main() {
  const [showTopButton, setShowTopButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to track scroll position and toggle the button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Create refs for each div
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  // Function to scroll to a specific div
  const scrollToDiv = (divRef: any) => {
    if (divRef && divRef.current) {
      const offset = 100; // Adjust this value to the height of your navigation bar
      const topPosition =
        divRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 grid items-center">
      <div className="pt-20">
        {/* Buttons to scroll to specific divs */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => scrollToDiv(div1Ref)}
            className="px-4 py-2 font-mono rounded-full border hover:bg-orange-300">
            1
          </button>
          <button
            onClick={() => scrollToDiv(div2Ref)}
            className="px-4 py-2 font-mono rounded-full border hover:bg-orange-300">
            2
          </button>
          <button
            onClick={() => scrollToDiv(div3Ref)}
            className="px-4 py-2 font-mono rounded-full border hover:bg-orange-300">
            3
          </button>
          <button
            onClick={() => scrollToDiv(div4Ref)}
            className="px-4 py-2 font-mono rounded-full border hover:bg-orange-300">
            4
          </button>
        </div>
        <div className="space-y-4">
          {/* First Message */}
          {/* <div
            ref={div1Ref}
            className="select-none pt-4 bg-white px-4 py-2 rounded-lg w-auto"> */}
          <div
            ref={div1Ref}
            className="select-none pt-4 px-4 py-2 rounded-lg w-auto bg-cover bg-center"
            style={{
              backgroundImage: "url('/back1.jpg')",
              color: "white", // 텍스트가 잘 보이도록 색상 변경
              textShadow: "1px 1px 3px rgba(0,0,0,0.8)", // 텍스트 가독성을 위한 그림자 효과
            }}>
            <p>
              <br />
              윤이
              <br />
              <br />
              첫 앨범회의가 7월 쯤이었나?
              <br />
              <br />
              앨범이 미뤄진게 조금 아쉬웠는데 덕분에
              <br />
              &apos;새벽이&apos; 를 넣게 됐으니까 아무튼 좋아!
              <br />
              더 길게 더길게
              <br />
              테스트테스트
              <br />
              길어지는지
              <br />
            </p>
          </div>

          {/* Second Message */}
          <div
            ref={div2Ref}
            className="select-none mt-4 bg-white px-4 py-2 rounded-lg w-auto">
            <p>
              최인영
              <br />
              <br />
              두 번째 메시지 내용
              <br />
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
              어쩌고 어쩌고 어쩌고~~~
              <br />
            </p>
          </div>

          {/* Third Message */}
          <div
            ref={div3Ref}
            className="select-none mt-4 bg-white px-4 py-2 rounded-lg w-auto">
            <p>
              윤이
              <br />
              <br />
              세 번째 메시지 내용
              <br />
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
              내용내용내용~~~~
              <br />
            </p>
          </div>

          {/* Forth Message */}
          <div
            ref={div4Ref}
            className="select-none mt-4 bg-white px-4 py-2 rounded-lg w-auto">
            <p>
              최인영~
              <br />
              <br />
              네 번째 메시지 내용
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-5 bg-orange-300 px-4 py-2 rounded-full shadow-lg font-mono">
          ↑ 위로
        </button>
      )}
    </div>
  );
}
