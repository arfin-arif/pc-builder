import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-3  pt-4 lg:px-9 border-t-2 bg-gray-50">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="#" className="inline-flex items-center">
            <Image
              height={32}
              width={32}
              responsive
              src="https://mcqmate.com/public/images/logos/60x60.png"
              alt="logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              PC House
            </span>
          </Link>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
              Vestibulum ultrices sed libero non porta. Vivamus malesuada urna
              eu nibh malesuada, non finibus massa laoreet. Nunc nisi velit,
              feugiat a semper quis, pulvinar id libero. Vivamus mi diam,
              consectetur non orci ut, tincidunt pretium justo. In vehicula
              porta molestie. Suspendisse potenti.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Popular Courses
          </p>
          <Link href="#">UPSC - Union Public Service Commission</Link>
          <Link href="#">General Knowledge</Link>
          <Link href="#">MBA</Link>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Popular Topics
          </p>
          <Link href="#">Human Resource Management</Link>
          <Link href="#">Operations Management</Link>
          <Link href="#">Marketing Management</Link>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            COMPANY IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-1 px-2">
            <Link href="#" className="w-full min-w-xl">
              <Image
                height={32}
                width={32}
                responsive
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                className="h-10"
              />
            </Link>
            <Link
              className="w-full min-w-xl"
              href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
            >
              <Image
                height={32}
                width={32}
                responsive
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                className="h-28"
              />
            </Link>
          </div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <Link href="#" title="send email">
              admin@company.com
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Company. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
