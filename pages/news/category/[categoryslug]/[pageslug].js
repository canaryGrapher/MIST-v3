import { SITE_DOMAIN } from "../../../../utils/constants";
import PaginationBar from "../../../../components/PaginationBar";
import NewsHorizontal from "../../../../components/NewsHorizontal";
import NewsTile from "../../../../components/NewsTile";

const Category = ({ categoryName, news, numberOfPages, currentPage }) => {
  return (
    <div className="min-h-screen text-center py-10">
      <div
        className="categoryBar h-96 text-left w-screen mx-auto flex flex-col justify-center relative"
        style={{
          backgroundImage: "url('/images/categoryHead.jpg')",
        }}
      >
        <div className="overlay h-full w-full absolute"></div>
        <div className="absolute md:w-3/4 mx-auto inset-x-0 shadow-xl">
          <p className="text-xl text-green-300">Articles that are tagged </p>
          <h1 className="text-5xl emphasis-heading">{categoryName}</h1>
        </div>
      </div>
      <div>
        <div className="md:w-3/4 mx-auto text-left mt-10">
          <h2 className="text-2xl">Recent News</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-96 md:w-3/4 mx-auto mt-5 mb-20 gap-2">
        {news.slice(0, 2).map((newsItem) => {
          return (
            <div className="col-span-1">
              <NewsTile
                id={newsItem._id}
                title={newsItem.newsHeading}
                image={newsItem.highlightPhoto}
                tag={newsItem.filtertag}
              />
            </div>
          );
        })}
      </div>
      <div className="md:w-3/4 w-screen mx-auto px-5">
        {news.slice(2, news.length - 1).map((news) => {
          return (
            <NewsHorizontal
              key={news._id}
              id={news._id}
              photo={news.highlightPhoto}
              title={news.newsHeading}
              tag={news.filtertag}
              published={news.date}
              information={news.description}
            />
          );
        })}
      </div>
      {/* Pagination Bar */}
      <div className="mt-20">
        <PaginationBar
          pages={numberOfPages}
          currentPage={currentPage}
          url={
            "/news/category/" + categoryName.split(" ").join("").toLowerCase()
          }
        />
      </div>
      <style jsx>{`
        .categoryBar {
          background-size: cover;
          background-position: center;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const resCategories = await fetch(`${SITE_DOMAIN}/api/news/getcategories`);
  const categories = await resCategories.json();
  let paths = [];
  for (let element of categories.data) {
    const resCategoryInfo = await fetch(
      `${SITE_DOMAIN}/api/news/categoryinfo?category=${element
        .split(" ")
        .join("")
        .toLowerCase()}`
    );
    const categoryInfo = await resCategoryInfo.json();
    for (let count = 1; count <= Math.ceil(categoryInfo.count / 12); count++) {
      const item = {
        params: {
          categoryslug: element.split(" ").join("").toLowerCase(),
          pageslug: count.toString(),
        },
      };
      paths.push(item);
    }
  }
  console.log("this is the path", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const resCategoryNews = await fetch(
    `${SITE_DOMAIN}/api/news/categorynews?category=${
      context.params.categoryslug
    }&page=${context.params.pageslug - 1}`
  );
  const categoryNews = await resCategoryNews.json();
  const numberOfElements = await fetch(
    `${SITE_DOMAIN}/api/news/categoryinfo?category=${context.params.categoryslug}`
  );
  const elementsCount = await numberOfElements.json();
  return {
    props: {
      categoryName: categoryNews.category,
      news: categoryNews.data,
      numberOfPages: Math.ceil(Number(elementsCount.count) / 12),
      currentPage: context.params.pageslug,
    },
    revalidate: 7200,
  };
};
