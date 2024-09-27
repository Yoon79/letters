import {useRef} from "react";
import { useState, useEffect } from "react";

export default function Main() {
    const [showTopButton, setShowTopButton] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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
    const scrollToDiv = (divRef:any) => {
        if (divRef && divRef.current) {
            const offset = 100; // Adjust this value to the height of your navigation bar
            const topPosition = divRef.current.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10 px-4 grid items-center">
            <div className="pt-20">

                {/* Buttons to scroll to specific divs */}
                <div className="flex space-x-4 mb-4">
                    <button onClick={() => scrollToDiv(div1Ref)}
                            className="px-4 py-2 font-mono rounded-full border hover:bg-amber-100">
                        1
                    </button>
                    <button onClick={() => scrollToDiv(div2Ref)}
                            className="px-4 py-2 font-mono rounded-full border hover:bg-amber-100">
                        2
                    </button>
                    <button onClick={() => scrollToDiv(div3Ref)}
                            className="px-4 py-2 font-mono rounded-full border hover:bg-amber-100">
                        3
                    </button>
                    <button onClick={() => scrollToDiv(div4Ref)}
                            className="px-4 py-2 font-mono rounded-full border hover:bg-amber-100">
                        4
                    </button>
                </div>
                <div className="space-y-4">

                    {/* Forth Message */}
                    <div ref={div3Ref} className="select-none mt-4 bg-white px-4 py-2 rounded-lg w-auto">
                        <p>
                            최인영~<br/><br/>
                            세 번째 메시지 내용<br/><br/>
                            {/* ...other content... */}
                        </p>
                    </div>

                    {/* Third Message */}
                    <div ref={div3Ref} className="select-none mt-4 bg-white px-4 py-2 rounded-lg w-auto">
                        <p>
                            윤이<br/><br/>
                            세 번째 메시지 내용<br/><br/>
                            {/* ...other content... */}
                        </p>
                    </div>

                    {/* Second Message */}
                    <div ref={div2Ref} className="select-none mt-4 bg-white px-4 py-2 rounded-lg w-auto">
                        <p>
                            최인영<br/><br/>
                            두 번째 메시지 내용<br/><br/>
                            {/* ...other content... */}
                        </p>
                    </div>


                    {/* First Message */}
                    <div ref={div1Ref} className="select-none pt-4 bg-white px-4 py-2 rounded-lg w-auto">
                        <p>
                            <br/>
                            윤이<br/>
                            <br/>
                            첫 앨범회의가 7월 쯤이었나?<br/>
                            <br/>
                            앨범이 미뤄진게 조금 아쉬웠는데 덕분에<br/>
                            &apos;새벽이&apos; 를 넣게 됐으니까 아무튼 좋아!<br/>
                            <br/>
                            생각해보면 십이년동안 앨범을 만들면서 트랙에 맞춰 필요한 곡들을 쓰기위해 애썼던 것 같아.<br/>
                            &apos;3번 트랙에 있으면 좋을법한 귀여운 노래&apos; 랄지<br/>
                            &apos;마지막 트랙을 장식할 만한 분위기의 노래&apos; 같은 거.<br/>
                            그렇게 잘 맞물리는 일들이 좋기도 했고!<br/>
                            근데 이번 앨범은 좀...<br/>
                            &apos;프롬 파리&apos; 만들던 때가 생각 나!<br/>
                            한껏 자유롭고 초롱초롱하던 23살 그때의 기분이야.<br/>
                            <br/>
                            그때 우리, 고민은 별로 없고 아이디어는 넘쳤었는데 그치? 미화된건가.. 호호<br/>
                            <br/>
                            뭐였지(의식의 흐름대로 쓰는 중이야)<br/>
                            &apos;괜찮아질건가봐&apos; 2절 가사 쓴답시고<br/>
                            갔던 카페 황치즈디저트 진짜 맛있었는데..<br/>
                            또 먹고싶당<br/>
                            우리 또 회의 할 거 없나? 히히<br/>
                            <br/>
                        </p>
                    </div>

                </div>
            </div>

            {/* Back to Top Button */}
            {showTopButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-28 right-5 bg-amber-100 px-4 py-2 rounded-full shadow-lg font-mono"
                >
                    ↑ 위로
                </button>
            )}

        </div>
    );
}
