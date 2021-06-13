import Link from "next/link";
import Image from "next/image";

const Navbar = (props) => {
  const home =
    props.pagename === "home"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const team =
    props.pagename === "team"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const news =
    props.pagename === "news"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const articles =
    props.pagename === "articles"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const events =
    props.pagename === "events"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const alumni =
    props.pagename === "alumni"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const showcase =
    props.pagename === "showcase"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  const gossips =
    props.pagename === "gosspis"
      ? "text-green-300 hover:text-white"
      : "text-gray-300 hover:text-white";
  return (
    <div className="fixed w-screen h-15 top-0 text-lg navbar">
      <div className="absolute left-5 top-2">
        <Image
          src="/images/logoLight.png"
          height="25"
          width="60"
          alt="MIST logo"
          className="logo-icon"
        />
      </div>
      <div className="flex flex-row justify-center">
        <Link href="/">
          <a className={home}>Home</a>
        </Link>
        <Link href="/team">
          <a className={team}>Team</a>
        </Link>
        <Link href="/news">
          <a className={news}>News</a>
        </Link>
        <Link href="https://blogs.wearemist.in" passHref={true}>
          <a className={articles}>Blogs</a>
        </Link>
        <Link href="https://events.wearemist.in/" passHref={true}>
          <a className={events}>Events</a>
        </Link>
        <Link href="/showcase">
          <a className={showcase}>Showcase</a>
        </Link>
        <Link href="/network">
          <a className={alumni}>Alumni</a>
        </Link>
        <Link href="https://shitpost.wearemist.in/" passHref={true}>
          <a className={gossips}>Gossips</a>
        </Link>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #121212;
        }
        a {
          padding: 10px 20px;
          cursor: pointer;
        }

        a:hover {
          color: #fafafa;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
