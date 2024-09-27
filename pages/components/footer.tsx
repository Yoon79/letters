import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 pt-2 p-2 md:items-center justify-center md:p-4">
      <div>
        <div className="text-center">
          <span className="font-mono text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a className="hover:underline font-mono cursor-pointer">스웨덴세탁소 교환일기장</a>.
            All Rights Reserved.
          </span>
        </div>
        <div>
          <ul className="justify-center flex flex-wrap items-center mt-2 mb-2 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/aboutus">
                <a className="font-mono mr-4 hover:underline cursor-pointer md:mr-6 ">
                about us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="font-mono hover:underline cursor-pointer">contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
