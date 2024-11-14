import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#e98143] pt-2 p-2 md:items-center justify-center md:p-4">
      <div>
        <div className="text-center pb-2">
          <span className="font-mono text-sm text-[#e98143] sm:text-center dark:text-[#e98143]">
            © 2024{" "}
            <a
              className="hover:underline font-mono cursor-pointer"
              onClick={scrollToTop}>
              스웨덴세탁소 교환일기장
            </a>
            . All Rights Reserved.
          </span>
        </div>
        {/* <div>
          <ul className="justify-center flex flex-wrap items-center mt-2 mb-2 text-sm text-[#e98143] dark:text-[#e98143] sm:mt-0">
            <li>
              <Link href="/aboutus">
                <p className="font-mono mr-4 hover:underline cursor-pointer md:mr-6 ">
                  about us
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="font-mono hover:underline cursor-pointer">
                  contact
                </p>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}
