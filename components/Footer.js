import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="footer h-52 text-gray-50 bg-gray-900 grid md:grid-cols-3 sm:grid-cols-1">
      <div className="text-center flex flex-col justify-evenly">
        <img
          src="/images/logoLight.png"
          alt="MIST logo"
          className="logo-icon w-1/4 h-1/4 mx-auto"
        />
        <div className="flex justify-center">
          Whatever
        </div>
      </div>
      <div className="text-center flex flex-col justify-center">
        <div className="text-left mx-auto">
          <h4 className="text-xl pb-2 text-gray-300">More of MIST</h4>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Events</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Blogs</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer"></p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Editorial Policy</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Become a writer</p>
        </div>
      </div>
      <div className="text-center flex flex-col justify-center">
        <div className="text-left mx-auto">
          <h4 className="text-xl pb-2 text-gray-300">About MIST</h4>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Contact Us</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Partner with us</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Privacy Policy</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Editorial Policy</p>
          <p className="text-sm text-green-300 hover:text-gray-200 cursor-pointer">Become a writer</p>
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
