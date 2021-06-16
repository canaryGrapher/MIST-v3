const NewsTile = (props) => {
  return (
    <div className="wrapper" style={{ height: "100%", width: "100%" }}>
      <div className="item relative">
        <div className="overlay absolute bottom-0 px-5 text-left flex flex-col justify-end pb-2">
          <p className="text-green-300 font-bold text-left max-w-max ">
            {props.tag.toUpperCase()}
          </p>
          <p className="text-gray-300 text-xl emphasis-heading pb-2">
            {props.title}
          </p>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          overflow: hidden;
          z-index: -100;
          background-color: rgba(0, 0, 0, 0.25);
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
          background-image: url("${props.image}");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
    </div>
  );
};

export default NewsTile;
