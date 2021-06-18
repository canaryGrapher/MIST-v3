import Link from "next/link";

const NewsTile = (props) => {
  const linkToPage = `/news/article/${props.id}`;
  const linkToCategory = `/news/topic/${props.tag
    .split(" ")
    .join("")
    .toLowerCase()}`;
  return (
    <div
      className="wrapper cursor-pointer"
      style={{ height: "100%", width: "100%" }}
    >
      <Link href={linkToPage}>
        <a>
          <div className="item relative">
            <div className="overlay absolute bottom-0 px-5 text-left flex flex-col justify-end pb-2">
              <Link href={linkToCategory}>
                <p className="text-green-300 font-bold text-left max-w-max hover:underline">
                  {props.tag.toUpperCase()}
                </p>
              </Link>
              <p className="text-gray-300 text-xl emphasis-heading pb-2 hover:underline">
                {props.title}
              </p>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .wrapper {
          overflow: hidden;
          background-image: url("${props.image}");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          z-index: -100;
        }
        .overlay {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.9)
          );
        }
        .item {
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.25);
        }
        .item:hover {
          background-color: rgba(0, 0, 0, 0.9);
          transition-duration: 5s;
        }
      `}</style>
    </div>
  );
};

export default NewsTile;
