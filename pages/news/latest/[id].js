import Head from "next/head";
import { SITE_DOMAIN } from "../../../utils/constants";
import NewsTile from "../../../components/NewsTile";
import NewsHorizontal from "../../../components/NewsHorizontal";
import PaginationBar from "../../../components/PaginationBar";

const Latest = ({ news, numberOfPages, currentPage }) => {
  const newsArray = news.data.slice(2, 12);
  return (
    <div className="text-center min-h-screen py-20 container mx-auto">
      <Head>
        <title>
          Latest News | CyberManipal by Manipal Information Security Team
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container w-10/12 mx-auto">
        <div className="text-left pl-0 md:pl-10">
          <h1 className=" text-3xl emphasis-heading pl-5">CyberManipal.</h1>
          <p className=" text-sm font-thin emphasis-heading text-gray-600 pl-6">
            Tech news from MIST
          </p>
        </div>
        <div>
          <h3 className="emphasis-heading text-4xl pt-10">Latest</h3>
          <p className="px-10 md:w-3/4 pb-2 mx-auto">
            Latest news from CyberManipal, that matters.
          </p>
          <p className="pb-7 text-gray-400">( Page {currentPage.toString()} )</p>
          <div className="main-news-heading grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="col-span-1">
              <NewsTile
                id={news.data[0]._id}
                title={news.data[0].newsHeading}
                image={news.data[0].highlightPhoto}
                tag={news.data[0].filtertag}
              />
            </div>
            <div className="col-span-1">
              <NewsTile
                id={news.data[1]._id}
                title={news.data[1].newsHeading}
                image={news.data[1].highlightPhoto}
                tag={news.data[1].filtertag}
              />
            </div>
          </div>
          <div className="mx-auto">
            {newsArray.map((news) => {
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
            <PaginationBar pages={numberOfPages} currentPage={currentPage} url="/news/latest" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-news-heading {
          height: 400px;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.3);
          height: 100%;
          width: 100%;
        }
        .news-description {
          -webkit-line-clamp: 3;
          position: relative;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          padding-top: 5px;
          height: 48px;
        }
      `}</style>
    </div>
  );
};

export default Latest;

// [{params: {page: pageNumber}}]

export const getStaticPaths = async () => {
  const res = await fetch(`${SITE_DOMAIN}/api/news?page=paths`);
  const newsIds = await res.json();
  const numberOfPages = Math.ceil(newsIds.data.length / 12);
  const paths = [];
  for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
    const item = {
      params: {
        id: pageNumber.toString(),
      },
    };
    paths.push(item);
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const resNews = await fetch(
    `${SITE_DOMAIN}/api/news?page=${context.params.id - 1}`
  );
  const news = await resNews.json();

  const resNumber = await fetch(`${SITE_DOMAIN}/api/news?page=paths`);
  const alNewsId = await resNumber.json();
  const numberOfPages = Math.ceil(alNewsId.data.length / 12);
  return {
    props: {
      news,
      numberOfPages,
      currentPage: context.params.id,
    },
    revalidate: 7200,
  };
};
