import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="footer h-52 text-gray-50 bg-gray-900 grid md:grid-cols-3 sm:grid-cols-1">
      <div>hi</div>
      <div>wassum</div>
      <div>fasf</div>
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
