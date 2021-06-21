import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="footer py-10 min-h-52 text-gray-50 bg-gray-900 grid md:grid-cols-3 sm:grid-cols-2">
      <div className="text-center flex flex-col justify-evenly col-span-2 md:col-span-1">
        <img
          src="/images/logoLight.png"
          alt="MIST logo"
          className="logo-icon w-1/4 h-2/4 mx-auto"
        />
        <div className="pt-2 pr-2 flex justify-center">Manipal, India</div>
      </div>
      <div className="pt-4 md:pt-0 text-center flex flex-col justify-center col-span-1 md:col-span-1">
        <div className="text-left mx-auto">
          <h4 className="text-xl pb-2 text-gray-300">More of MIST</h4>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            <a href="https://events.wearemist.in/">Events</a>
          </p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            <a href="https://blogs.wearemist.in/">Blogs</a>
          </p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            Become a writer
          </p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            <a href="https://yasharyan.com/">Meet the creator</a>
          </p>
        </div>
      </div>
      <div className="pt-4 md:pt-0 text-center flex flex-col justify-center col-span-1 md:col-span-1">
        <div className="text-left mx-auto">
          <h4 className="text-xl pb-2 text-gray-300">About MIST</h4>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            <a href="mailto:sudo@wearemist.in">Contact Us</a>
          </p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            <a href="mailto:sudo@wearemist.in?subject=Partner with us">
              Partner with us
            </a>
          </p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">
            Editorial Policy
          </p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          overflow-x: hidden;
        }
        a {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Footer;
