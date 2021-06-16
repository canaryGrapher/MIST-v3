export const DateDiff = (date) => {
  const publishedDate = new Date(date.date);
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - publishedDate.getTime();
  const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
  //   Check if the number of days is greater than 1
  if (numberOfDays > 1) {
    //   Check if the number of days is less than 32
    if (numberOfDays < 32) {
      return <p className="text-gray-500 font-bold">{Math.floor(numberOfDays)} days ago</p>;
    }
    //   Check if the number of days is greater than 1
    else {
      //   Check if the number of weeks is less than 52
      if (timeDifference / (24 * 3600 * 1000 * 7) <= 52) {
        return <p className="text-gray-500 font-bold">{Math.floor(timeDifference / (24 * 3600 * 1000 * 7))} weeks ago</p>;
      }
      //   If weeks is more than 52
      else {
        //   Check if the number of years is equal to 1
        if (
          Math.floor(currentTime.getFullYear() - publishedDate.getFullYear()) ==
          1
        ) {
          return <p className="text-gray-500 font-bold">1 year ago</p>;
        }
        //   Check if the number of years is greater than 1
        else {
          return <p className="text-gray-500 font-bold">{Math.floor(numberOfDays)} years ago</p>;
        }
      }
    }
  } else if (numberOfDays == 1) {
    return <p className="text-gray-500 font-bold">1 day ago</p>;
  } else {
    return <p className="text-gray-500 font-bold">{numberOfDays * 24} hours ago</p>;
  }
};
