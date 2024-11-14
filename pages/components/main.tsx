import { useRef } from "react";
import { useState, useEffect } from "react";

export default function Main() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

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
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const div8Ref = useRef(null);

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

  // 스크롤 위치를 감지하여 현재 섹션을 업데이트
  useEffect(() => {
    const handleScroll = () => {
      // 모든 ref들의 현재 위치를 안전하게 가져오기
      const getRectSafely = (ref: React.RefObject<HTMLElement>) => {
        return ref.current?.getBoundingClientRect() ?? null;
      };

      const div1 = getRectSafely(div1Ref);
      const div2 = getRectSafely(div2Ref);
      const div3 = getRectSafely(div3Ref);
      const div4 = getRectSafely(div4Ref);
      const div5 = getRectSafely(div5Ref);
      const div6 = getRectSafely(div6Ref);
      const div7 = getRectSafely(div7Ref);
      const div8 = getRectSafely(div8Ref);

      const offset = 200; // 원하는 오프셋 값

      // null 체크를 포함한 조건문
      if (div1 && div1.top <= offset && div1.bottom > offset) {
        setActiveSection(1);
      } else if (div2 && div2.top <= offset && div2.bottom > offset) {
        setActiveSection(2);
      } else if (div3 && div3.top <= offset && div3.bottom > offset) {
        setActiveSection(3);
      } else if (div4 && div4.top <= offset && div4.bottom > offset) {
        setActiveSection(4);
      } else if (div5 && div5.top <= offset && div5.bottom > offset) {
        setActiveSection(5);
      } else if (div6 && div6.top <= offset && div6.bottom > offset) {
        setActiveSection(6);
      } else if (div7 && div7.top <= offset && div7.bottom > offset) {
        setActiveSection(7);
      } else if (div8 && div8.top <= offset && div8.bottom > offset) {
        setActiveSection(8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 150; // 스크롤 위치 임계값

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 grid items-center">
      <div className="pt-10">
        {/* Buttons to scroll to specific divs */}
        <div
          className={`${
            isScrolled ? "fixed top-10" : "absolute top-[145px]"
          } left-0 right-0 z-50`}>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => scrollToDiv(div1Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143] 
                ${activeSection === 1 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div2Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 2 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div3Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 3 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div4Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 4 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div5Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 5 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div6Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 6 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div7Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 7 ? "bg-[#e98143]" : ""}`}></button>
            <button
              onClick={() => scrollToDiv(div8Ref)}
              className={`p-1.5 font-mono rounded-full border border-[#e98143] hover:bg-[#e98143]
                ${activeSection === 8 ? "bg-[#e98143]" : ""}`}></button>
          </div>
        </div>
        <div className="space-y-4 pt-5">
          {/* First Message */}
          {/* <div
            ref={div1Ref}
            className="select-none pt-4 bg-white px-4 py-2 rounded-lg w-auto"> */}
          <div
            ref={div1Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                `,
              backgroundSize: "30px 30px", // 격자 크기 조절
              //   backgroundImage: "url('images/back1.jpg')",
              //   color: "white", // 텍스트가 잘 보이도록 색상 변경
              //   textShadow: "1px 1px 3px rgba(0,0,0,0.8)", // 텍스트 가독성을 위한 그림자 효과
            }}>
            <p className="font-suit">
              <strong>윤이</strong> <br />
              <br />
              첫 앨범회의가 7월 쯤이었나? <br />
              <br />
              앨범이 미뤄진게 조금 아쉬웠는데 덕분에 <br />
              &apos;새벽이 &apos; 를 넣게 됐으니까 아무튼 좋아! <br />
              <br />
              생각해보면 십이년동안 앨범을 만들면서 트랙에 맞춰 필요한 곡들을
              쓰기위해 애썼던 것 같아. <br />
              &apos;3번 트랙에 있으면 좋을법한 귀여운 노래 &apos; 랄지 <br />
              &apos;마지막 트랙을 장식할 만한 분위기의 노래 &apos; 같은 거.{" "}
              <br />
              그렇게 잘 맞물리는 일들이 좋기도 했고! <br />
              근데 이번 앨범은 좀... <br />
              &apos;프롬 파리 &apos; 만들던 때가 생각 나! <br />
              한껏 자유롭고 초롱초롱하던 23살 그때의 기분이야. <br />
              <br />
              그때 우리, 고민은 별로 없고 아이디어는 넘쳤었는데 그치?
              미화된건가.. 호호 <br />
              <br />
              뭐였지(의식의 흐름대로 쓰는 중이야) <br />
              &apos;괜찮아질건가봐 &apos; 2절 가사 쓴답시고 <br />
              갔던 카페 황치즈디저트 진짜 맛있었는데.. <br />
              또 먹고싶당 <br />
              우리 또 회의 할 거 없나? 히히 <br />
              <br />
            </p>
          </div>

          {/* Second Message */}
          <div
            ref={div2Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p className="font-sans">
              <strong>안녕 최인영</strong>
              <br />
              <br />
              오늘 새벽의 꿈이 기억나지 않아
              <br />
              뭐였지, 상황은 없고 두려웠던 감정만 남았어
              <br />
              <br />
              요즘 충동적인 행동이 전 보다 부쩍 늘었어
              <br />
              카페에 커피를 테이크 아웃하러 가다 옆에 있는 치과에 가서
              스케일링을 받고(무의식에 깔려있던 투두리스트도 아니었는데), <br />
              자동차에 두고 온 가방을 가지러갔다가 한밤중에 드라이브를 하고,
              지금은 계란 사러 하나로마트를 가다 도서관에 와서 우표와 관련된
              책을 단숨에 다 읽어버렸어
              <br />
              (이 책 마저도 충동적으로 빈자리에 가까이 꽂혀있던 책을 집은거야)
              <br />
              <br />
              내가 인생을 사는 걸까, 인생이라는 결론 속에 내가 내 역할을 하는
              걸까
              <br />
              나는 거기서 돌발행동으로 조금이라도 무언가를 바꾸려고 하는 걸까 그
              돌발행동 마저 정해져 있던걸까
              <br />
              아님 그냥 도파민에 중독되서 집중력과 기억력이 나빠지는 걸까
              <br />
              <br />
              그런데!
              <br />
              기억나 그때는 생생히!
              <br />
              프롬 파리 만들던 그때!
              <br />
              우리가 처음으로 아이스 아메리카노를 마시게 되었을 때!
              <br />
              모든 말을 다 솔직히 하지않아도 된다는 걸 알았을 때<br />
              하나의 물건이 빛의 방향에 따라 그림자는 다르다는 걸 알았을 때
              <br />
              행복해서 불안하다는 것을 알았을 때<br />
              생각보다 행동이 많던 때<br />
              설레임 <br />
              떨림 <br />
              <br />
              이번 앨범을 준비하는 동안 나도 우리 프롬파리 때가 생각 났어 사실은
              저번 앨범때 내게 매너리즘이 온걸까 하고 잠깐 괴로웠었거든
              <br />
              그래서 이번에는 다른 사람들의 의견을 많이 듣고 조금이라도 곡이 더
              좋아질수있을까해서 노력하고 있어
              <br />
              프롬파리 그때의 그 서툴고도 순수한 열정도 찾고 싶었어 여태까지
              나는 알지못해 용감했던건지 그냥 건방졌던건지 생각하다가
              <br />
              어쩌면 지금도 그렇지 않을까 하고 넘어가버렸지만
              <br />
              <br />
              새벽에 거실에서 폰플래시가 비치던 날 너무 웃기고 멋있었어
              <br />
              그렇게 한번씩 신들린듯이 공책에 음표를 막힘없이 휘갈길때면 나는
              아주 긴장돼 뿌뿌도 조용히 시킬정도야 <br />
              니 말대로 그 곡을 넣을수있게 되어 나도 기뻐 아직은 들을수록 내일
              작업실에서 이부분 이렇게 고쳐야겠다 하는 생각이 더 많이 들지만!
              <br />
              발매하고 들어도 어딘가는 또 아쉽겠지
              <br />
              <br />
              앗! 이틀동안 고양이랑만 대화해서 그런가 내가 말이 너무 많았네 급히
              줄일게 와 역시 도서관에서 보는 석양은 유난히 멋있어
              <br />
              내가 아까 읽었다던 책 기억나? (그 작가분도 창원에서 사셨나봐 키키
              이런 우연이~)
              <br />
              그 책 마지막 부분 내용에 (스포주의) 1년 뒤 나에게 보낼 편지를 쉽게
              써내지 못 하는 장면이 나오는데 그게 너무 지금의 나같아 <br />
              알수없어서 불안하기도 하지만 동시에 굉장히 설레기도해!
              <br />
              우린 또 어떤 노래를 만들게 될까?
              <br />
              요즘 너는 어때? <br />
              <br />
            </p>
          </div>

          {/* Third Message */}
          <div
            ref={div3Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p></p>
          </div>

          {/* Forth Message */}
          <div
            ref={div4Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p></p>
          </div>

          {/* Fifth Message */}
          <div
            ref={div5Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p></p>
          </div>

          {/* sixth Message */}
          <div
            ref={div6Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p></p>
          </div>

          {/* Seventh Message */}
          <div
            ref={div7Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p></p>
          </div>

          {/* Eightth Message */}
          <div
            ref={div8Ref}
            className="select-none mt-4 bg-white p-10 w-auto"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
              backgroundSize: "30px 30px", // 격자 크기 조절
            }}>
            <p></p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {/* {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-5 bg-orange-300 px-4 py-2 rounded-full shadow-lg font-mono">
          ↑ 위로
        </button>
      )} */}
    </div>
  );
}
