import Link from "next/link";
import { DateDiff } from "../functions/DateDiff";

const NewsLite = (props) => {
  const linkToPage = `/news/article/${props.id}`;
  const linkToCategory = `/news/category/${props.tag.split(" ").join("").toLowerCase()}/1`;
  return (
    <Link href={linkToPage}>
      <a className="flex flex-row cursor-pointer">
        <div className="row-span-1 text-4xl font-black px-5 text-green-300">
          {props.number}
        </div>
        <div className="row-span-3 text-left text-gray-300">
          <Link href={linkToCategory}>
            <p className="text-xs text-green-300 font-bold hover:underline">
              {props.tag.toUpperCase()}
            </p>
          </Link>
          <h3 className="text-xl hover:underline">{props.title}</h3>
          <DateDiff date={props.published} />
        </div>
      </a>
    </Link>
  );
};

export default NewsLite;
