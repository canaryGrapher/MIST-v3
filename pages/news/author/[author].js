import Head from "next/head";
import { SITE_DOMAIN } from "../../../utils/constants";
import { MakeCard } from "../../../functions/MakeCard";
import Link from "next/link";
import NewsHorizontal from "../../../components/NewsHorizontal";

const Latest = ({ author, news }) => {
  const socialInfo = [];
  for (let item in author.social) {
    socialInfo.push(item);
  }
  const socialData = socialInfo.map((key) => {
    return MakeCard(key, author.social[key], "text-3xl", "mx-2");
  });
  return (
    <div className="min-h-screen justify-center text-gray-50 py-20 text-center px-5">
      <p className="text-xl emphasis-heading">Writer Profile</p>
      <div className="md:w-3/4 mx-auto text-center grid-col-1 grid md:grid-cols-10 gap-10 py-5">
        <img
          className="rounded-full col-span-1 md:col-span-3 my-auto mx-auto"
          width="350px"
          height="350px"
          src={author.avatar}
        />
        <div className="col-span-1 md:col-span-7 text-left">
          <p className="pt-10 text-green-300">{author.position}</p>
          <h1 className="text-5xl emphasis-heading">{author.name}</h1>
          <p className="pt-5 text-2xl font-black text-green-300 pb-2">
            Connect
          </p>
          <div className="flex flex-row mx-auto">{socialData}</div>
          <p className="pt-5">{author.about}</p>
        </div>
      </div>
      <div className="md:w-3/4 pt-20 mx-auto">
        <h4 className="text-3xl pb-10 font-bold">Articles by {author.name.split(" ")[0]}</h4>
        <div className="">
          {news.map((perNews) => (
            <NewsHorizontal
              key={perNews._id}
              id={perNews._id}
              photo={perNews.highlightPhoto}
              title={perNews.newsHeading}
              tag={perNews.filtertag}
              published={perNews.date}
              information={perNews.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;

// [{params: {page: pageNumber}}]

export const getStaticPaths = async () => {
  const resAuthor = await fetch(`${SITE_DOMAIN}/api/news/writer?username=all`);
  const author = await resAuthor.json();
  const paths = [];
  author.data.forEach((element) => {
    const item = {
      params: {
        author: element,
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
  // const resNews = await fetch(
  //   `${SITE_DOMAIN}/api/news/getparticular?id=${context.params.author}`
  // );
  // const news = await resNews.json();
  const resAuthor = await fetch(
    `${SITE_DOMAIN}/api/news/writer?username=${context.params.author}`
  );
  const author = await resAuthor.json();
  const resAllNews = await fetch(
    `${SITE_DOMAIN}/api/news/usernews?author=${context.params.author}`
  );
  const allNews = await resAllNews.json();
  return {
    props: {
      author: author.data[0],
      news: allNews.data,
    },
    revalidate: 7200,
  };
};
