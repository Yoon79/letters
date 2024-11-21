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
            isScrolled ? "fixed top-10" : "absolute top-[145px] md:top-10"
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
        <div className="space-y-10 pt-5 font-sans">
          {/* First Message */}
          {/* <div
            ref={div1Ref}
            className="select-none pt-4 bg-white px-4 py-2 rounded-lg w-auto"> */}
          <div>
            <div className="px-10 w-full h-10 bg-[#e98143] items-center justify-start flex font-semibold">
              from. 인영
            </div>
            <div
              ref={div1Ref}
              className="select-none  bg-white p-10 w-auto"
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
              <p>
                <strong>윤이</strong>
                <br />
                <br />
                첫 앨범 회의가 7월쯤이었나?
                <br />
                <br />
                앨범이 미뤄진 게 조금 아쉬웠는데 덕분에 &apos;새벽이&apos;를
                넣게 됐으니까 아무튼 좋아!
                <br />
                <br />
                생각해 보면 12년 동안 앨범을 만들면서 트랙에 맞춰 필요한 곡들을
                쓰기 위해 애썼던 것 같아. &apos;3번 트랙에 있으면 좋을법한
                귀여운 노래&apos; 랄지 &apos;마지막 트랙을 장식할 만한 분위기의
                노래&apos; 같은 거. 그렇게 잘 맞물리는 일들이 좋기도 했고!
                <br />
                <br />
                근데 이번 앨범은 좀... [From. Paris] 만들던 때가 생각나! 한껏
                자유롭고 초롱초롱하던 23살 그때의 기분이야. 그때 우리, 고민은
                별로 없고 아이디어는 넘쳤었는데 그치? 미화된 건가.. 호호
                <br />
                <br />
                뭐였지(의식의 흐름대로 쓰는 중이야)
                <br />
                <br />
                &apos;괜찮아질 건가 봐&apos; 2절 가사 쓴답시고 갔던 카페
                황치즈디저트 진짜 맛있었는데.. 또 먹고 싶당. 우리 또 회의할 거
                없나? 히히
                <br />
                <br />
              </p>
            </div>
          </div>

          {/* Second Message */}
          <div>
            <div className="px-10 w-full h-10 bg-[#e98143] items-center justify-start flex font-semibold">
              from. 세윤
            </div>
            <div
              ref={div2Ref}
              className="select-none bg-white p-10 w-auto"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
                backgroundSize: "30px 30px", // 격자 크기 조절
              }}>
              <p>
                <strong>안녕 최인영</strong>
                <br />
                <br />
                오늘 새벽의 꿈이 기억나지 않아. 뭐였지, 상황은 없고 두려웠던
                감정만 남았어.
                <br />
                <br />
                요즘 충동적인 행동이 전보다 부쩍 늘었어.
                <br />
                카페에 커피를 테이크아웃하러 가다 옆에 있는 치과에 가서
                스케일링을 받고(무의식에 깔려있던 투 두 리스트도 아니었는데),
                자동차에 두고 온 가방을 가지러 갔다가 한밤중에 드라이브를 하고,
                지금은 계란 사러 하나로마트를 가다 도서관에 와서 우표와 관련된
                책을 단숨에 다 읽어버렸어(이 책마저도 충동적으로 빈자리에 가까이
                꽂혀있던 책을 집은 거야).
                <br />
                <br />
                내가 인생을 사는 걸까, 인생이라는 결론 속에 내가 내 역할을 하는
                걸까. 나는 거기서 돌발행동으로 조금이라도 무언가를 바꾸려고 하는
                걸까. 그 돌발 행동마저 정해져 있던 걸까. 아님 그냥 도파민에
                중독되어서 집중력과 기억력이 나빠지는 걸까.
                <br />
                <br />
                그런데! 기억나, 그때는. 생생히!
                <br />
                [From. Paris] 만들던 그때!
                <br />
                우리가 처음으로 아이스 아메리카노를 마시게 되었을 때. 모든 말을
                다 솔직히 하지 않아도 된다는 걸 알았을 때. 하나의 물건이 빛의
                방향에 따라 그림자는 다르다는 걸 알았을 때. 행복해서 불안하다는
                것을 알았을 때. 생각보다 행동이 많던 때. 설레임, 떨림.
                <br />
                <br />
                이번 앨범을 준비하는 동안 나도 우리 [From. Paris] 때가 생각났어.
                사실은 저번 앨범 때 내게 매너리즘이 온 걸까 하고 잠깐
                괴로웠었거든. 그래서 [From. Paris] 그때의 그 서툴고도 순수한
                열정을 되찾고 싶었어. 여태까지 나는 알지 못해 용감했던건지, 그냥
                건방졌던 건지 생각하다가 어쩌면 지금도 그렇지 않을까 하고
                넘어가버렸지만.
                <br />
                <br />
                새벽에 거실에서 폰 플래시가 비치던 날, 너무 웃기고 멋있었어.
                그렇게 한 번씩 신들린 듯이 공책에 음표를 막힘없이 휘갈길 때면
                나는 아주 긴장돼. 뿌뿌도 조용히 시킬 정도야. 니 말대로 그 곡을
                넣을 수 있게 되어 나도 기뻐. 아직은 들을수록 ‘내일 작업실에서 이
                부분 이렇게 고쳐야겠다’하는 생각이 더 많이 들지만! 발매하고
                들어도 어딘가는 또 아쉽겠지. 앗! 이틀 동안 고양이랑만 대화해서
                그런가 내가 말이 너무 많았네. 급히 줄일게.
                <br />
                <br />
                와, 역시 도서관에서 보는 석양은 유난히 멋있어. 내가 아까
                읽었다던 책 기억나?(그 작가분도 창원에서 사셨나 봐 키키. 이런
                우연이~) 그 책 마지막 부분 내용에 (((스포주의))) 1년 뒤 나에게
                보낼 편지를 쉽게 써내지 못하는 장면이 나오는데, 그게 너무 지금의
                나 같아. 알 수 없어서 불안하기도 하지만 동시에 굉장히 설레기도
                해!
                <br />
                <br />
                우린 또 어떤 노래를 만들게 될까?
                <br />
                요즘 너는 어때?
                <br />
                <br />
              </p>
            </div>
          </div>

          {/* Third Message */}
          <div>
            <div className="px-10 w-full h-10 bg-[#e98143] items-center justify-start flex font-semibold">
              from. 인영
            </div>
            <div
                ref={div3Ref}
                className="select-none  bg-white p-10 w-auto"
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
              <p>
                <strong>윤이</strong><br />
                <br />
                니가 놀란 너의 돌발행동들 말이야...! 사실 그거 굉장히 꾸준했다! 왜냐면 나는 우리가 친구가 되고부터 14년째인가 꾸준히 놀라고 있거든! (근데 우리 도파민중독은 좀 맞는 것 같아 ...껄껄)<br />
                <br />
                그리고 교환일기 처음 쓰는 기념으로 고백하는 건데.. 내가 영감 왔답시고 공책에 막 휘갈길 때 있잖아, 니가 막 뿌뿌한테 &apos;쉿쉿&apos; 거리고(참고로 그게 더 시끄러움), 손바닥으로 입 막으면서 과장된 몸짓으로 소리 삼켜내는 게 재밌어서 아무 음표나 그린 적.. 솔직히 몇 번 있어.. 미안. 그래도 앞으로도 조용히 부탁해 히히. 하지만 &apos;새벽이&apos; 는 진짜였어!!<br />
                <br />
                이번 앨범을 낙원으로 설명할 수 있을까? 낙원에 대해 얼마큼 생각해 봤어?<br />
                나는 &apos;낙원&apos;이라는 노래를 만들고 나서야 구체적으로 그려본 것 같다. 왜 도망친 곳에 낙원은 없다고 하는건지 괜히 반박하고 싶은 마음도 있었지. 가끔은 즐길 수 없으면 피해도 되잖아. 내 사랑하는 사람들 품으로 도망쳐도 되잖아. 늘 내 뒤통수를 치는 것만 같은 &apos;희망&apos;들을 그럼에도, 그럼에도 끌어안고 말이야.<br />
                <br />
                그 노래 속 가사들은 결국 스스로에게 하고 싶은 말이었던 것 같아. 내 내면의 목소리들을 외면하는 일이 사실 가장 많으니까.<br />
                <br />
                나는 낙원을 생각하면 항상 바다가 떠올라. 야자수도 있고, 해변은 모래가 고와서 맨발로 걸어도 하나도 아프지 않고. 사랑하는 사람들, 함께 있으면 편안해지는 사람들과 맛있는 걸 먹고.<br />
                <br />
                뿌뿌에게도 그곳이 낙원일까.<br />
                그 고운 모래는 뿌뿌가 쉬를 하면 잘 응고가 될까 하는 엉뚱한 생각들로 빠지긴 하지만...<br />
                <br />
                니가 그리는 &apos;낙원&apos;도 궁금하다.<br />
                <br />
                <br />
              </p>
            </div>
          </div>

          {/* Forth Message */}
          <div>
            <div className="px-10 w-full h-10 bg-[#e98143] items-center justify-start flex font-semibold">
              from. 세윤
            </div>
            <div
                ref={div4Ref}
                className="select-none bg-white p-10 w-auto"
                style={{
                  backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px", // 격자 크기 조절
                }}>
              <p>
              <strong>안녕, 최인영!</strong><br />
                <br />
                내가 처음에 생각했던 낙원은 말야. 엄청 큰 야자수가 있는 해변에 머물며 가벼운 차림으로 바다에 뛰어들기도 하고, 배고프면 다양한 종류의 피자를 먹거나 시원한 음료와 감자튀김을 마음껏 먹어도 건강한 삶을 상상했어. 레게 음악을 들으며 드라이브를 하고, 자연재해의 걱정도 없는 그런 곳 말이야.<br />
                <br />
                그리고, 지금 와서 또 생각해 보는 낙원은 내가 행복한 ‘상태’같아. 그래도 장소로 얘기하라면 내 방, 오늘 우연히 들린 카페, 선선한 밤공기를 맞으며 앉아있는 벤치 같은 것(안전해야 함). 어디든 될 수 있다고 생각해.<br />
                <br />
                그 도망친 곳에 낙원은 없다는 말에 대해 생각해 봤어. 누구를 기준으로 도망이라고 하는 건지, 도망이라는 말은 그 말을 하는 사람에게서 벗어나지 못하게 하려는 강한 말 아닌지. 그 말을 하는 사람은 그 상태를 벗어날 용기가 없는 건 아닐지. 내가 또 건방진 말을 하는 걸까? 그리고 왜 나는 이미 도망친 사람처럼 얘기하고 있는 건지.<br />
                <br />
                우리가 만드는 앨범으로 낙원을 표현할 수 있다고 생각해. 적어도 내가 정의하는 낙원은 말이야. ‘낙원’의 마지막 가사 한 줄이 내가 생각하는 낙원이야.<br />
                <br />
                <small><i>* ‘낙원’ : ‘해로운 희망을 껴안고 너와 휘청일 수 있다면’의 데모 제목</i></small>
                <br />
              </p>
            </div>
          </div>

          {/* Fifth Message */}
          <div>
            <div className="px-10 w-full h-10 bg-[#e98143] items-center justify-start flex font-semibold">
              from. 인영
            </div>
            <div
                ref={div5Ref}
                className="select-none  bg-white p-10 w-auto"
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
              <p>
                <strong>윤이</strong><br />
                <br />
                요즘 계속 낭만에 젖은 상태였거든.<br />
                그래서 앨범 회의를 하면서 &apos;낙원에 대한 스웨덴세탁소만의 정의를 내려보자&apos;라고 했을 때 머릿속에 온갖 동화 같은 풍경이 가득했었는데, 문득 오늘은 니 말처럼 낙원이 어떤 &apos;상태&apos; 인 것 같아.<br />
                마음만 먹으면 어디든 낙원으로 펼쳐낼 수 있는데.<br />
                그걸 자꾸만 잊어버리는 걸까.<br />
                근데 뭐, 또 금방 바뀔 것 같아.<br />
                매번 다르게 느껴져.<br />
                <br />
                여행은 어때?<br />
                나는 옥수수를 먹으면서 이 편지를 쓰고 있어.<br />
                옥수수는 먹을 땐 너무 맛있는데 먹고 나면 일단 턱이 너무 뻐근하고 오랜 시간 소화가 안되는 느낌이야. 그렇지만 그런 것들을 다 기꺼이 다시 겪어 낼 맛이니까...!<br />
                <br />
                아무튼,<br />
                &apos;낙원&apos;은 좀 담담하게 부르고 싶어졌어.<br />
                데모는 너무 절박해서 숨을 참는 느낌이었는데, 본 녹음은 깊게 숨을 내쉰 후의 느낌이었으면 싶어.<br />
                <br />
                &apos;나비&apos;는 만든 지가 꽤 오래되었는데 이제서야 발매할 수 있게 되었네!<br />
                나비를 동경하는 번데기의 마음으로 이 노래를 쓰기 시작했는데 그때 당시 나에게 나비란 자유로움 그 자체였던 것 같아. 어쩌면 이 노래의 화자는 번데기보다는 축축하게 젖은 무거운 날개를 짊어진 나비였을지도 모르겠다. 그 무게를 감당하느라 날개가 있는지도 잊어버린.<br />
                <br />
                아무튼!<br />
                나는 그 노래에서 &apos;아름다워 숨죽여, 날개를 편 너를 느끼면 어느새 내 마음도 바람을 타고 날아요&apos;라는 가사가 좋아! 그 가뿐하고 아름다운 날갯짓을 내가 가진 것만 같은 기분이 들어.<br />
                <br />
                <br />
              </p>
            </div>
          </div>

          {/* sixth Message */}
          <div>
            <div className="px-10 w-full h-10 bg-[#e98143] items-center justify-start flex font-semibold">
              from. 세윤
            </div>
            <div
                ref={div6Ref}
                className="select-none bg-white p-10 w-auto"
                style={{
                  backgroundImage: `
                  linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                  linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px", // 격자 크기 조절
                }}>
              <p>
                <strong>최인영~~~</strong><br />
                <br />
                안녕!<br />
                덕분에 신안 여행 잘 다녀왔어!<br />
                친근한 고양이들도 많이 만나고 친절한 사람들도 많이 만났어. 날씨도 아까울 정도로 너무 좋았고 맛있는 것도 많이 먹었어. 문득 나의 말솜씨가 초라하게 느껴진다. 하지만 너는 엄청난 상상력을 가졌으니까 거기 맡겨 볼게. 최대한으로 상상해 줘. 미안 히히.<br />
                <br />
                아쉽게 가을이 벌써 가고 있어… 잡을 수 없는 것 중에 시간이 가장 야속하네. 앨범 준비를 시작할 때는 아주 더웠던 것 같은데, 어제는 갑자기 너무 추워서 딸꾹질을 두 번이나 했어!<br />
                <br />
                어제부로 노래 녹음이 다 끝났어! 어때? 후련해?<br />
                &apos;낙원&apos;은 너의 바람대로 녹음이 잘 된 것 같아서 나는 뿌듯해! 아주 자랑스러워서 헹가래를 해주고 싶은데 혼자라서 역부족이야. 그렇다고 사람들을 설득해서 어찌저찌 모아서 결국 해주면 니가 싫어할 것 같기도 하고 히히(혹시 하고 싶으면 귀띔해 줘).<br />
                <br />
                작업할 때는 곡을 완전히 느끼지 못하는 편인데 &apos;낙원&apos;은 문득 훅하고 오더라구… &apos;Magical&apos;때처럼… 또르르… 녹음할 때 힘든 부분들을 자꾸 다시 시켰는데 포기하지 않고 잘 따라와 주어서 고마웠어… 잘 끝내줘서 기특해… 나 왜 자꾸 점을 찍지…? 나 가을 타나 봐…<br />
                <br />
                멋진 말로 낙원을 정의하고 싶은데 내 머릿속에는 &apos;낙낙낙킹온 낙원쓰 도어~&apos; 얘만 자꾸 맴도는걸.. 100가지의 하고 싶은 말들을 몇 가지의 간단한 단어로 표현하는 일은 어려운 것 같아.<br />
                <br />
                요즘 니가 하는 그 시골 생활 게임 말이야.<br />
                그 시골 속 그 사람도 낙원에 있는 것 같아.<br />
                아니면 그걸 하는 니 모습이 낙원 같기도 하고.<br />
                아니면 니가 하는 걸 보는 내 상태가 낙원 같기도 하고.<br />
                아니면 이 모든 걸 보고 함께 편안한 마음을 가지고 있는 모두가 하나의 낙원에 있는 것 같기도 하구!<br />
                <br />
                낙원의 기준이 너무 관대한가? 허허..<br />
                그래도 뭐 난 좋아!<br />
                계속해서 낙원에 대해 생각하다보니 주변에 있는 사람들에게 고마움을 느끼고, 습관처럼 행복을 느끼고, 나쁜 기운들은 그냥 쉽게 흘려보낼 수 있어서 좋아.<br />
                <br />
                이걸 뭐라고 해?<br />
                <br />
              </p>
            </div>
          </div>

          {/* Seventh Message */}
          <div
            ref={div7Ref}
            className="select-none mt-4 bg-inherit p-1 w-auto"
            style={
              {
                //   backgroundImage: `
                //       linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                //       linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                //       `,
                //   backgroundSize: "30px 30px", // 격자 크기 조절
              }
            }>
            <p></p>
          </div>

          {/* Eightth Message */}
          <div
            ref={div8Ref}
            className="select-none mt-4 bg-inherit p-1 w-auto"
            style={
              {
                //   backgroundImage: `
                //       linear-gradient(to right, rgba(233, 129, 67, 0.2) 0.1px, transparent 1px),
                //       linear-gradient(to bottom, rgba(233, 175, 32, 0.2) 0.1px, transparent 1px)
                //       `,
                //   backgroundSize: "30px 30px", // 격자 크기 조절
              }
            }>
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
