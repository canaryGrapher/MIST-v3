import { MakeCard } from "../functions/MakeCard";

const TeamCard = (props) => {
  const socialInfo = [];
  for (let item in props.social) {
    socialInfo.push(item);
  }
  const socialData = socialInfo.map((key) => {
    return MakeCard(key, props.social[key], "text-xl", "mx-5");
  });
  const imageSize =
    props.category === "board" || props.category === "mancomm"
      ? "w-60 h-60 object-center mx-auto rounded-full"
      : "w-44 h-44 object-center mx-auto rounded-full";
  return (
    <div className="max-w-sm rounded-lg overflow-hidden my-4 py-5 mx-auto hover:shadow-lg">
      <img className={imageSize} src={props.photo} alt={props.name} />
      <div className="pt-4 pb-1 px-6">
        <p className="text-2xl font-semibold text-gray-200">{props.name}</p>
        <p className="text-gray-500">
          {props.category === "board" ? props.position : null}
        </p>
        <p className="py-1 text-lg text-gray-400 w-3/4 mx-auto">
          {props.category === "board" || props.category === "mancomm"
            ? props.about
            : null}
        </p>
      </div>
      <div className="text-center">{socialData}</div>
    </div>
  );
};

export default TeamCard;
