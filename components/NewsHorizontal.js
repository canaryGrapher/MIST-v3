import { DateDiff } from "../functions/DateDiff";
import Link from "next/link";

const NewsHorizontal = (props) => {
  const linkToPage = `/news/article/${props.id}`;
  const linkToCategory = `/news/topic/${props.tag.split(" ").join("").toLowerCase()}`;
  return (
    <Link href={linkToPage}>
      <a className="grid grid-cols-1 md:grid-cols-12 gap-10 cursor-pointer justify-items-start my-10">
        <div className="col-span-3">
          <img
          className="hidden md:flex"
            src={props.photo}
            alt={props.title}
            style={{ height: "200px", width: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="text-left col-span-9 flex flex-col justify-center">
          <Link href={linkToCategory}>
            <p className="text-bold text-sm text-green-300 hover:underline">
              {props.tag.toUpperCase()}
            </p>
          </Link>
          <p className="text-2xl font-semibold text-gray-200 hover:underline">
            {props.title}
          </p>
          <DateDiff date={props.published} />
          <p>
            {props.information.split(" ").slice(0, 50).join(" ") + "...  "}
            <span className="text-blue-500 hover:text-gray-200 clear-both">
              Read more
            </span>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default NewsHorizontal;
