import Link from "next/link";

const PaginationBar = (props) => {
  const pageCount = [];
  for (let i = 1; i <= props.pages; i++) {
    pageCount.push(i);
  }
  const selectedTab =
    "mx-2 p-2 rounded-full flex flex-col justify-center bg-green-500 text-gray-50 cursor-not-allowed";
  const notSelectedTab =
    "mx-2 p-2 rounded-full flex flex-col justify-center bg-gray-100 hover:bg-blue-800 hover:text-gray-50 text-black cursor-pointer";
  return (
    <div className="mx-auto">
      <ul className="pagination max-w-min mx-auto text-gray-800 flex flex-row justify-evenly rounded-full px-4 py-2">
        {props.currentPage == pageCount[0] ? null : (
          <Link href={`${props.url}/${props.currentPage - 1}`}>
            <a>
              <li
                className={
                  props.currentPage == pageCount[0]
                    ? "mx-5 min-w-max rounded-full flex flex-col justify-center text-blue-200 cursor-not-allowed"
                    : "mx-5 min-w-max rounded-full flex flex-col justify-center text-blue-500 cursor-pointer hover:text-gray-50"
                }
              >
                {"< "}Prev
              </li>
            </a>
          </Link>
        )}

        {pageCount.map((item) => {
          if (props.currentPage == item) {
            return (
              <li key={item.toString()} className={selectedTab}>
                {item}
              </li>
            );
          } else {
            return (
              <Link key={item.toString()} href={`${props.url}/${item}`}>
                <a>
                  <li className={notSelectedTab}>{item}</li>
                </a>
              </Link>
            );
          }
        })}
        {props.currentPage == pageCount[pageCount.length - 1] ? null : (
          <Link href={`${props.url}/${Number(props.currentPage) + 1}`}>
            <a>
              <li className="mx-5 min-w-max rounded-full flex flex-col justify-center text-blue-500 cursor-pointer hover:text-gray-50">
                Next{" >"}
              </li>
            </a>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default PaginationBar;
