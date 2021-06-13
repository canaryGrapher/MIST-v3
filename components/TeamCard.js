const TeamCard = (props) => {
    const imageSize = props.category === "board" || props.category === "mancomm" ? "w-60 h-60 object-center mx-auto rounded-full" : "w-40 h-40 object-center mx-auto rounded-full"
  return (
    <div className="max-w-sm rounded-lg overflow-hidden my-4 mx-auto hover:shadow-lg">
      <img
        className={imageSize}
        src={props.photo}
        alt={props.name}
      />
      <div className="py-4 px-6">
        <p className="text-2xl font-semibold text-gray-200">{props.name}</p>
        <p className="text-gray-500">
          {props.category === "board" ? props.position : null}
        </p>
        <p className="py-2 text-lg text-gray-400 w-3/4 mx-auto">
          {props.category === "board" || props.category === "mancomm" ? props.about : null}
        </p>
        <div className=""></div>
      </div>
    </div>
  );
};

export default TeamCard;
