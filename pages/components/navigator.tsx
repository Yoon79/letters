import type { NextPage } from "next";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  // { name: "new", href: "/", current: false },
  { name: "about us", href: "/aboutus", current: false },
  { name: "contact", href: "/contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Nevigator() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 pb-2 mx-auto font-mono font-bold md:fixed w-full bg-inherit">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/*<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">*/}
                {/*  /!* Mobile menu button*!/*/}
                {/*  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">*/}
                {/*    <span className="sr-only">Open main menu</span>*/}
                {/*    {open ? (*/}
                {/*      <XIcon className="block h-7 w-7" aria-hidden="true" />*/}
                {/*    ) : (*/}
                {/*      <MenuIcon className="block h-7 w-7" aria-hidden="true" />*/}
                {/*    )}*/}
                {/*  </Disclosure.Button>*/}
                {/*</div>*/}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <div className="pt-8">
                      <Link href="/">
                        {showFirstImage ? (
                          <Image
                            src="/orange1.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                          />
                        ) : (
                          <Image
                            src="/orange2.png"
                            alt="Picture of the author"
                            width={110}
                            height={110}
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:ml-6 pt-[26px]">
                    {/* <div className="flex-1 mt-2 space-x-4">
                      {navigation.map(item => (
                        <Link href={item.href} key={item.name}>
                          <p
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-900 hover:text-gray-400",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}>
                            {item.name}
                          </p>
                        </Link>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:text-gray-400",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
