import { DateDiff } from "../functions/DateDiff";

const NewsLite = (props) => {
  return (
    <div className="flex flex-row">
      <div className="row-span-1 text-4xl font-black px-5 text-green-300">
        {props.number}
      </div>
      <div className="row-span-3 text-left text-gray-300">
        <p className="text-xs text-green-300 font-bold">
          {props.tag.toUpperCase()}
        </p>
        <h3 className="text-xl">{props.title}</h3>
        <DateDiff date={props.published} />
      </div>
    </div>
  );
};

export default NewsLite;
