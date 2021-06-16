import { DateDiff } from "../functions/DateDiff";

const NewsCard = (props) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden my-2 py-5 mx-auto hover:shadow-lg">
      <img
        className="w-100 h-60 object-center mx-auto"
        src={props.photo}
        alt={props.title}
      />
      <div className="pt-4 pb-2 px-6 text-left">
        <p className="text-bold text-sm text-green-300">{props.tag.toUpperCase()}</p>
        <p className="text-2xl font-semibold text-gray-200">{props.title}</p>
        <DateDiff date={props.published} />
      </div>
    </div>
  );
};

export default NewsCard;
