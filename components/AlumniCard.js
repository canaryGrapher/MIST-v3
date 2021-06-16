import { MakeCard } from "../functions/MakeCard";

const AlumniCard = (props) => {
  const socialInfo = [];
  for (let item in props.social) {
    socialInfo.push(item);
  }
  const socialData = socialInfo.map((key) => {
    return MakeCard(key, props.social[key]);
  });

  return (
    <div className="max-w-sm rounded-lg overflow-hidden my-2 py-5 mx-auto hover:shadow-lg">
      <img
        className="w-60 h-60 object-center mx-auto"
        src={props.photo}
        alt={props.name}
      />
      <div className="pt-4 pb-2 px-6 text-center">
        <p className="text-2xl font-semibold text-gray-200">{props.name}</p>
        <p className="text-gray-500">{props.position}</p>
        {props.whereabouts ? (
          <div className="pt-2 text-lg text-gray-100 mx-auto">
            <p className="text-blue-300 text-lg font-bold">Works at</p>
            <p className="text-center text-base">{props.whereabouts}</p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-row justify-evenly">{socialData}</div>
    </div>
  );
};

export default AlumniCard;
