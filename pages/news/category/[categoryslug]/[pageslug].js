import Head from "next/head";
import { SITE_DOMAIN } from "../../../../utils/constants";
import PaginationBar from "../../../../components/PaginationBar";
import NewsHorizontal from "../../../../components/NewsHorizontal";
import NewsTile from "../../../../components/NewsTile";

const Category = ({ categoryName, news, numberOfPages, currentPage }) => {
  return (
    <div className="min-h-screen text-center py-10">
      <Head>
        <title>{categoryName} tagged news | CyberManipal</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Read latest news regarding cybersecurity and technology, and stay updated through this student run news page, straight from Manipal Institute of Technology."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yash Aryan, yash.aryan@aol.com" />
        <meta
          name="keywords"
          content="cybersecurity, manipal, manipal institute of technology, clubs, student clubs, student, organization, news, cybermanipal, news"
        />
        <meta
          name="url"
          content={"https://wearemist.in/news/category/" + categoryName}
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <link rel="icon" href="/cybermanipal_favicon.ico" />
        <link rel="canonical" href="https://wearemist.in/news" />
        <meta name="reply-to" content="sudo@wearemist.in" />
        {/* OG meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={categoryName + " tagged news" + "| CyberManipal News"}
        />
        <meta
          property="og:description"
          content="Read latest news regarding cybersecurity and technology, and stay updated through this student run news page, straight from Manipal Institute of Technology."
        />
        <meta property="og:image" content="/images/cybermanipal.png" />
        <meta
          property="og:url"
          content={"https://wearemist.in/news/category/" + categoryName}
        />
        <meta
          property="og:site_name"
          content="Manipal Information Security Team"
        />
        <meta
          name="twitter:title"
          content={categoryName + " tagged news" + "| CyberManipal News"}
        />
        <meta
          name="twitter:description"
          content="Read latest news regarding cybersecurity and technology, and stay updated through this student run news page, straight from Manipal Institute of Technology."
        />
        <meta name="twitter:image" content={"/images/cybermanipal.png"} />
        <meta name="twitter:site" content="@sudo_mist" />
        <meta name="twitter:creator" content="@sudo_mist" />
      </Head>
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
            <div className="col-span-1" key={newsItem._id}>
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
