import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center container">
      <h1 className="text-5xl emphasis-heading rainbow-text">Ooooooooops!</h1>
      <p className="mt-5 text-2xl emphasis-heading px-5 md:w-2/4 mx-auto">
        Looks like our WebDev Head has been avoiding work. <br />
        <a
          href="mailto:sudo@wearemist.in?subject=Website%20Feedback"
          className="text-blue-300"
        >
          Report this incident
        </a>
        , or, you can just ignore it and save the poor soul some embarrassment.
      </p>
      <Link href="/">
        <button
          type="button"
          className="bg-green-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-red-600 p-3 max-w-max mx-auto mt-5"
        >
          Ignore and go home
        </button>
      </Link>
      <style jsx>{`
        .container {
          background-image: url("/images/404.jpg");
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
