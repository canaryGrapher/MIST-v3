import Head from "next/head";
import Link from "next/link";
import { SITE_DOMAIN } from "../../utils/constants";
import NewsTile from "../../components/NewsTile";
import NewsLite from "../../components/NewsLite";
import NewsCard from "../../components/NewsCard";
import { useState } from "react";

const News = ({ news, categories, bgHolder }) => {
  const [userEmail, setUserEmail] = useState();

  const userSubscribeInput = (e) => {
    setUserEmail(e.target.value);
  };
  const subscribeUser = (e) => {
    e.preventDefault();
    alert(userEmail);
  };
  return (
    <div className="text-center min-h-screen py-20 container mx-auto">
      <Head>
        <title>CyberManipal | News by Manipal Information Security Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Logo section */}
      <div className="text-left w-100 pl-0 md:pl-10">
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
        <div className="px-0 grid grid-cols-1 md:grid-cols-5 gap-2 md:px-10 recent-news text-center h-100">
          <div className="row-span-1">
            <NewsLite
              number="1"
              id={news.data[5]._id}
              title={news.data[5].newsHeading}
              tag={news.data[5].filtertag}
              published={news.data[5].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="2"
              id={news.data[6]._id}
              title={news.data[6].newsHeading}
              tag={news.data[6].filtertag}
              published={news.data[6].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="3"
              id={news.data[7]._id}
              title={news.data[7].newsHeading}
              tag={news.data[7].filtertag}
              published={news.data[7].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="4"
              id={news.data[8]._id}
              title={news.data[8].newsHeading}
              tag={news.data[8].filtertag}
              published={news.data[8].date}
            />
          </div>
          <div className="row-span-1">
            <NewsLite
              number="5"
              id={news.data[9]._id}
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
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-6 gap-2 px-5 md:px-10 recent-news text-center h-100">
          {news.data.slice(10, 18).map((item) => {
            return (
              <div key={item._id} className="row-span-1">
                <NewsCard
                  id={item._id}
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
          <Link href="/news/latest/1">
            <a>
              <button className="border-gray-300 border-2 hover:bg-gray-300 text-gray-300 hover:text-black font-bold py-2 px-4 rounded-full text-center">
                View more
              </button>
            </a>
          </Link>
        </div>
      </div>
      {/* Categories */}
      <div className="py-20 categories-section text-center">
        <h3 className="emphasis-heading text-4xl">Browse by category</h3>
        <p className="w-100 px-10 md:w-3/4 pb-5 mx-auto">
          Find news based on categories that interest you
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 px-3 md:px-10 categories-grid text-center h-100">
          {categories.data.map((item, count) => {
            return (
              <div
                key={item._id}
                className="row-span-1 h-40 hover:border-4 border-transparent hover:border-gray-200 hover:cursor-pointer duration-300"
                style={{
                  backgroundImage: `url("${bgHolder[count]}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Link
                  href={"/news/category/" + item.split(" ").join("").toLowerCase() + "/1"}
                >
                  <a>
                    <div className="overlay flex flex-col justify-center">
                      <p className="text-2xl emphasis-heading">{item}</p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subscibe Section */}
      <div className="text-center subscribe-section my-20">
        <div className="overlay py-20">
          <h3 className="emphasis-heading text-4xl">
            Become a MISTy subscriber
          </h3>
          <p className="w-100 px-10 md:w-3/4 pb-5 mx-auto">
            Let us send you a weekly digest about all that's going on in
            CyberManipal.
          </p>
          <div className="w-full text-center">
            <form onSubmit={subscribeUser}>
              <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                <input
                  type="email"
                  placeholder="yourmail@example.com"
                  className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none text-gray-600"
                  onChange={userSubscribeInput}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Join our team section */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-gray-50">
        <div className="col-span-1 px-10 md:px-0">
          <div className="text-left min-w-min mx-auto">
            <h3 className="emphasis-heading text-4xl w-100 md:w-3/4 pb-5 mx-auto">
              Write for us
            </h3>
            <p className="w-100 md:w-3/4 pb-5 mx-auto min-w-min">
              If you like technology, and especially cybersecurity like us, we
              think you'd love it at CyberManipal. We like to discuss and write
              about the cyber world and we always love when new writers join us.
            </p>
            <div className="md:w-3/4 mx-auto">
              <button className="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3">
                Join CyberManipal
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:inline col-span-1 text-center get-writers m-0 py-20"></div>
      </div>
      <style jsx>{`
        .main-news-heading {
          height: 700px;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.3);
          height: 100%;
          width: 100%;
        }
        .categories-section {
          background-image: linear-gradient(#484150, #212121);
        }
        .subscribe-section {
          background-image: url("/images/subscribeImage.jpg");
          background-attachment: fixed;
          background-size: cover;
        }
        .get-writers {
          background-image: url("/images/categories.png");
          background-size: cover;
          background-repeat: no-repeat;
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
