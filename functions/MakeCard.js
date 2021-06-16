export const MakeCard = (socialName, link) => {
  let iconJsx;
  switch (socialName) {
    case "linkedin":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      );
      break;
    case "webpage":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fas fa-globe-asia"></i>
        </a>
      );
      break;
    case "email":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fas fa-at"></i>
        </a>
      );
      break;
    case "github":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      );
      break;
    case "blog":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-blogger-b"></i>
        </a>
      );
      break;
    case "twitter":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      );
      break;
    case "facebook":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      );
    case "instagram":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      );
      break;
    case "youtube":
      iconJsx = (
        <a className="text-xl" href={link} target="_blank" rel="noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      );
      break;
    default:
      iconJsx = null;
  }
  return iconJsx;
};
