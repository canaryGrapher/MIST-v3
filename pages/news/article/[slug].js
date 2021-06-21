import Head from "next/head";
import { SITE_DOMAIN } from "../../../utils/constants";
import Link from "next/link";
const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const Latest = ({ newsItem, author }) => {
  const linkToCategory = `/news/category/${newsItem.filtertag
    .split(" ")
    .join("")
    .toLowerCase()}/1`;
  const date = new Date(newsItem.date);
  return (
    <div className="min-h-screen flex flex-col justify-center text-gray-50 py-20">
      <div className="text-left w-100 pl-0 md:pl-10">
        <h1 className=" text-4xl emphasis-heading pl-5">CyberManipal.</h1>
        <p className=" text-sm font-thin emphasis-heading text-gray-600 pl-6">
          Tech news from MIST
        </p>
      </div>
      <div className="container pt-20 text-left md:w-1/2 px-5 mx-auto">
        <h1 className="text-4xl text-bold emphasis-heading">
          {newsItem.newsHeading}
        </h1>
        <img className="pt-10" src={newsItem.highlightPhoto} />
        <Link
          href={
            "/news/category/" +
            newsItem.filtertag.split(" ").join("").toLowerCase() + "/1"
          }
        >
          <a className="cursor-pointer">
            <p className="my-3 py-1 px-2 bg-green-500 max-w-max hover:underline">
              {newsItem.filtertag}
            </p>
          </a>
        </Link>
        <Link href={"/news/author/" + author.username}>
          <a>
            <div className="py-5 flex flex-row max-w-max">
              <img
                className="rounded-full cursor-pointer"
                height="40"
                width="40"
                src={author.avatar}
                alt={newsItem.author}
              />
              <p className="text-lg font-bold p-2 hover:underline cursor-pointer">
                {author.name}
              </p>
            </div>
          </a>
        </Link>
        <h3 className="text-2xl font-semibold text-green-500">{month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</h3>
        <p className="text-lg whitespace-pre-line">{newsItem.description}</p>
        {/* <p>{newsItem.link}</p> */}
        <p className="font-bold mt-10 mb-5">
          Abridged from{" "}
          <span className="bg-gray-600 p-2 rounded-sm">{newsItem.credit}</span>
        </p>
        <a
          href={newsItem.link}
          className="text-sm text-blue-400 hover:underline"
        >
          Click here to see the original post
        </a>
      </div>
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
  newsIds.data.forEach((element) => {
    const item = {
      params: {
        slug: element._id,
      },
    };
    paths.push(item);
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const resNews = await fetch(
    `${SITE_DOMAIN}/api/news/getparticular?id=${context.params.slug}`
  );
  const news = await resNews.json();
  const resAuthor = await fetch(
    `${SITE_DOMAIN}/api/news/writer?username=${news.data[0].author}`
  );
  const author = await resAuthor.json();
  return {
    props: {
      newsItem: news.data[0],
      author: author.data[0],
    },
    revalidate: 7200,
  };
};
