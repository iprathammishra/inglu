import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="text-center text-sm">
      <ul className="list-none p-0">
        <li className="inline mx-4">
          <Link
            href="https://www.ingluglobal.com/home-page-inglu-global/"
            className="text-black"
          >
            Home
          </Link>
        </li>
        <li className="inline mx-4">
          <Link
            href="https://www.ingluglobal.com/about-us-inglu/"
            className="text-black"
          >
            About Us
          </Link>
        </li>
        <li className="inline mx-4">
          <Link
            href="https://www.ingluglobal.com/career-inglu-global/"
            className="text-black"
          >
            Carrers
          </Link>
        </li>
        <li className="inline mx-4">
          <Link
            href="https://www.ingluglobal.com/courses/"
            className="text-black"
          >
            Courses
          </Link>
        </li>
        <li className="inline mx-4">
          <Link
            href="https://www.ingluglobal.com/my-account/"
            className="text-black"
          >
            Login
          </Link>
        </li>
        <li className="inline mx-4">
          <Link href="/about" className="text-black">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
