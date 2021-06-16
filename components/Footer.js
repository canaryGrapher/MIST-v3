import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="footer h-52 text-gray-50 bg-gray-900 grid md:grid-cols-3 sm:grid-cols-1">
      <div className="text-center flex flex-col justify-center">
        <img
          src="/images/logoLight.png"
          alt="MIST logo"
          className="logo-icon w-1/4 h-1/4 mx-auto"
        />
        <p className="special-text pt-2">Manipal Information<br />Security Team</p>
      </div>
      <div className="text-center flex flex-col justify-center">wassum</div>
      <div className="text-center flex flex-col justify-center">fasf</div>
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
