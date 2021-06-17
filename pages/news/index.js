import Head from "next/head";
import { SITE_DOMAIN } from "../../utils/constants";
import NewsTile from "../../components/NewsTile";
import NewsLite from "../../components/NewsLite";
import NewsCard from "../../components/NewsCard";

const News = ({ news, categories, bgHolder }) => {
  return (
    <div className="text-center min-h-screen py-20 container mx-auto">
      <Head>
        <title>CyberManipal | News by Manipal Information Security Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Logo section */}
      <div className="text-left w-100 pl-10">
        <h1 className=" text-4xl emphasis-heading pl-5">CyberManipal.</h1>
        <p className=" text-sm font-thin emphasis-heading text-gray-600 pl-6">
          Tech news from MIST
        </p>
      </div>
      {/* Highlight News */}
      <div className="mx-0 md:mx-10 grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
        <div className="main-news-heading grid grid-cols-1 grid-rows-8 gap-3 ">
          <div className="row-span-5">
            <NewsTile
              id={news.data[0]._id}
              title={news.data[0].newsHeading}
              image={news.data[0].highlightPhoto}
              tag={news.data[0].filtertag}
            />
          </div>
          <div className="row-span-3">
            <NewsTile
              id={news.data[1]._id}
              title={news.data[1].newsHeading}
              image={news.data[1].highlightPhoto}
              tag={news.data[1].filtertag}
            />
          </div>
        </div>
        <div className="main-news-heading grid grid-cols-1 grid-rows-8 gap-3">
          <div className="row-span-3 grid grid-cols-2 gap-1">
            <div className="col-span-1">
              <NewsTile
                id={news.data[2]._id}
                title={news.data[2].newsHeading}
                image={news.data[2].highlightPhoto}
                tag={news.data[2].filtertag}
              />
            </div>
            <div className="col-span-1">
              <NewsTile
                id={news.data[3]._id}
                title={news.data[3].newsHeading}
                image={news.data[3].highlightPhoto}
                tag={news.data[3].filtertag}
              />
            </div>
          </div>
          <div className="row-span-5">
            <NewsTile
              id={news.data[4]._id}
              title={news.data[4].newsHeading}
              image={news.data[4].highlightPhoto}
              tag={news.data[4].filtertag}
            />
          </div>
        </div>
      </div>
      {/* Recent News */}
      <div className="mx-0 md:mx-10 py-20 recent-news text-center">
        <h3 className="emphasis-heading text-4xl pb-5">Recent News</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-10 recent-news text-center h-100">
          <div className="row-span-1">
            <NewsLite
              number="1"
              title={news.data[5].newsHeading}
              tag={news.data[5].filtertag}
              published={news.data[5].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="2"
              title={news.data[6].newsHeading}
              tag={news.data[6].filtertag}
              published={news.data[6].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="3"
              title={news.data[7].newsHeading}
              tag={news.data[7].filtertag}
              published={news.data[7].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="4"
              title={news.data[8].newsHeading}
              tag={news.data[8].filtertag}
              published={news.data[8].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="5"
              title={news.data[9].newsHeading}
              tag={news.data[9].filtertag}
              published={news.data[9].date}
            />
          </div>
        </div>
      </div>
      {/* More Stories */}
      <div className="mx-0 md:mx-10 py-20 recent-news text-center">
        <h3 className="emphasis-heading text-4xl pb-5">More Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-6 gap-2 px-10 recent-news text-center h-100">
          {news.data.slice(10, 18).map((item) => {
            return (
              <div className="row-span-1">
                <NewsCard
                  photo={item.highlightPhoto}
                  title={item.newsHeading}
                  tag={item.filtertag}
                  published={item.date}
                />
              </div>
            );
          })}
        </div>
        <div className="mx-auto">
          <button class="border-gray-300 border-2 hover:bg-gray-300 text-gray-300 hover:text-black font-bold py-2 px-4 rounded-full text-center">
            View more
          </button>
        </div>
      </div>
      {/* Categories */}
      <div className="py-20 categories text-center">
        <h3 className="emphasis-heading text-4xl ">Browse by category</h3>
        <p className="w-100 px-10 md:w-3/4 pb-5 mx-auto">
          Find news based on categories that interest you
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 px-10 categories-grid text-center h-100">
          {categories.data.map((item, count) => {
            return (
              <div
                className="row-span-1 h-40 hover:border-4 border-transparent hover:border-gray-200"
                style={{
                  backgroundImage: `url("${bgHolder[count]}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="overlay flex flex-col justify-center">
                  <p className="text-2xl emphasis-heading">{item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Subscibe Section */}
      <div className="">
        
      </div>
      {/* Join our team section */}
      <div className=""></div>
      <style jsx>{`
        .main-news-heading {
          height: 700px;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.3);
          height: 100%;
          width: 100%;
        }
        .categories {
          background-image: linear-gradient(#484150, #212121);
        }
      `}</style>
    </div>
  );
};

export default News;

export const getStaticProps = async () => {
  const resNews = await fetch(`${SITE_DOMAIN}/api/news?page=home`);
  const news = await resNews.json();
  const resCategories = await fetch(`${SITE_DOMAIN}/api/news/getcategories`);
  const categories = await resCategories.json();
  const bgHolder = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];
  return {
    props: {
      news,
      categories,
      bgHolder,
    },
    revalidate: 7200,
  };
};
