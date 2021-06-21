import { DateDiff } from "../functions/DateDiff";
import Link from "next/link";

const NewsCard = (props) => {
  const linkToPage = `/news/article/${props.id}`;
  const linkToCategory = `/news/category/${props.tag.split(" ").join("").toLowerCase()}/1`;
  return (
    <Link href={linkToPage}>
      <a className="max-w-sm rounded-lg overflow-hidden my-2 py-5 mx-auto hover:shadow-lg cursor-pointer">
        <img
          className="w-100 h-60 object-center mx-auto"
          src={props.photo}
          alt={props.title}
        />
        <div className="pt-4 pb-2 px-6 text-left">
          <Link href={linkToCategory}>
            <p className="text-bold text-sm text-green-300 hover:underline">
              {props.tag.toUpperCase()}
            </p>
          </Link>
          <p className="text-2xl font-semibold text-gray-200 hover:underline">
            {props.title}
          </p>
          <DateDiff date={props.published} />
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
