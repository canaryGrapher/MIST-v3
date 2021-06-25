import Head from "next/head";
import Link from "next/link";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { SITE_DOMAIN } from "../../../utils/constants";
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Latest = ({ newsItem, author, url }) => {
  const date = new Date(newsItem.date);
  return (
    <div className="min-h-screen flex flex-col justify-center text-gray-50 py-20">
      <Head>
        <title>{newsItem.newsHeading} | CyberManipal News</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content={newsItem.description.split(".").slice(0, 2).join(". ")}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yash Aryan, yash.aryan@aol.com" />
        <meta
          name="keywords"
          content="cybersecurity, manipal, manipal institute of technology, clubs, student clubs, student, organization, news, cybermanipal, news"
        />
        <meta
          name="url"
          content={"https://wearemist.in/news/article/" + newsItem._id}
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
          content={newsItem.newsHeading + "| CyberManipal News"}
        />
        <meta
          property="og:description"
          content={newsItem.description.split(".").slice(0, 2).join(". ")}
        />
        <meta property="og:image" content={newsItem.highlightPhoto} />
        <meta
          property="og:url"
          content={"https://wearemist.in/news/article/" + newsItem._id}
        />
        <meta
          property="og:site_name"
          content="Manipal Information Security Team"
        />
        <meta
          name="twitter:title"
          content={newsItem.newsHeading + "| CyberManipal News"}
        />
        <meta
          name="twitter:description"
          content={newsItem.description.split(".").slice(0, 2).join(". ")}
        />
        <meta name="twitter:image" content={newsItem.highlightPhoto} />
        <meta name="twitter:site" content="@sudo_mist" />
        <meta name="twitter:creator" content="@sudo_mist" />
      </Head>
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
            newsItem.filtertag.split(" ").join("").toLowerCase() +
            "/1"
          }
        >
          <a className="cursor-pointer">
            <article className="my-3 py-1 px-2 bg-green-500 max-w-max hover:underline">
              {newsItem.filtertag}
            </article>
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
        <h3 className="text-2xl font-semibold text-green-500">
          {month[date.getMonth()] +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear()}
        </h3>
        <p className="text-lg whitespace-pre-line">{newsItem.description}</p>
        <p className="font-bold mt-10 mb-5">
          Abridged from
          <span className="bg-gray-600 p-2 rounded-sm ml-2">
            {newsItem.credit}
          </span>
        </p>
        <a
          href={newsItem.link}
          className="text-sm text-blue-400 hover:underline"
        >
          Click here to see the original post
        </a>
      </div>
      <div className="text-left md:w-1/2 px-5 mx-auto mt-5">
        <p className="text-bold text-base text-green-300">Share this article</p>
        <div className="pt-3">
          <FacebookShareButton
            className="mr-5"
            url={`${url}/news/article/${newsItem._id}`}
            quote={
              "Check out this amazing article I found on CyberManipal, a news page by the Manipal Information Security Team.\n\n" +
              newsItem.newsHeading +
              "\n" +
              newsItem.description
            }
            hashtag="#wearemist"
          >
            <FacebookIcon className="rounded-full" size={30} />
          </FacebookShareButton>

          <EmailShareButton
            className="mr-5"
            url={`${url}/news/article/${newsItem._id}`}
            subject={
              "Check out this amazing article I found on CyberManipal, a news page by the Manipal Information Security Team.\n\n" +
              newsItem.newsHeading +
              "\n" +
              newsItem.description +
              "\n\nView the article online on their website from the link below."
            }
          >
            <EmailIcon className="rounded-full" size={30} />
          </EmailShareButton>

          <LinkedinShareButton
            className="mr-5"
            url={`${url}/news/article/${newsItem._id}`}
            title={newsItem.newsHeading}
            source="https://wearemist.in/"
            summary={
              "CyberManipal | News from Manipal Information Security Team\n" +
              newsItem.description
            }
          >
            <LinkedinIcon className="rounded-full" size={30} />
          </LinkedinShareButton>

          <TelegramShareButton
            className="mr-5"
            url={`${url}/news/article/${newsItem._id}`}
            quote={
              "CyberManipal | News from Manipal Information Security Team\n" +
              newsItem.newsHeading +
              "\n\nRead the article here:\n"
            }
            hashtag="#wearemist"
          >
            <TelegramIcon className="rounded-full" size={30} />
          </TelegramShareButton>

          <TwitterShareButton
            className="mr-5"
            url={`${url}/news/article/${newsItem._id}`}
            title={
              newsItem.newsHeading +
              "\nFrom CyberManipal - News from @sudo_mist\n\nRead the article here:"
            }
            hashtags={["wearemist", "sudomist"]}
            related={["sudo_mist"]}
          >
            <TwitterIcon className="rounded-full" size={30} />
          </TwitterShareButton>

          <WhatsappShareButton
            className="mr-5"
            url={`${url}/news/article/${newsItem._id}`}
            title={
              "From CyberManipal - News from from Manipal Information Security Team\n" +
              newsItem.newsHeading +
              "\n\nRead the article at:\n"
            }
          >
            <WhatsappIcon className="rounded-full" size={30} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default Latest;

export const getStaticPaths = async () => {
  const res = await fetch(`${SITE_DOMAIN}/api/news?page=paths`);
  const newsIds = await res.json();
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
      url: SITE_DOMAIN,
    },
  };
};
