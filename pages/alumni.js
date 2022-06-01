import { SITE_DOMAIN } from "../utils/constants";
import Head from "next/head";
import Link from "next/link";
import AlumniCard from "../components/AlumniCard";

const Network = ({ alumni, batches }) => {
  const alumniData = batches.data.map((batch) => {
    return (
      <div className="py-5" key={batch} id={batch}>
        <div className="text-center">
          <h2 className="text-3xl rainbow-text emphasis-heading font-semibold">
            <Link href={"/alumni#" + batch}>
              <a>
                <i className="fas fa-link text-sm text-gray-400"></i>
              </a>
            </Link>{" "}
            Board of {batch}
          </h2>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-auto">
          {alumni.data.map((item) =>
            item.year === batch ? (
              <AlumniCard
                key={item._id}
                name={item.name}
                position={item.position}
                photo={item.photo}
                whereabouts={item.whereabouts}
                social={item.social}
              />
            ) : null
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto pt-20 min-h-screen text-center md:px-0 px-2">
      <Head>
        <title>Alumni | Manipal Information Security Team</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Meet the all the boards of Manipal Information Security Team right from the very beginning, and connect with them."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yash Aryan, yash.aryan@aol.com" />
        <meta
          name="keywords"
          content="cybersecurity, manipal, manipal institute of technology, clubs, student clubs, student, organization, alumni, news, cybermanipal, news"
        />
        <meta name="url" content="https://wearemist.in/alumni" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://wearemist.in/alumni" />
        <meta name="reply-to" content="sudo@wearemist.in" />
        {/* OG meta tags */}
        <meta property="og:type" content="webpage" />
        <meta
          property="og:title"
          content="Alumni | Manipal Information Security Team"
        />
        <meta
          property="og:description"
          content="Meet the all the boards of Manipal Information Security Team right from the very beginning, and connect with them."
        />
        <meta property="og:image" content="/images/mist_og.png" />
        <meta property="og:url" content="https://wearemist.in/alumni" />
        <meta
          property="og:site_name"
          content="Manipal Information Security Team"
        />
        <meta
          name="twitter:title"
          content="Alumni | Manipal Information Security Team"
        />
        <meta
          name="twitter:description"
          content="Meet the all the boards of Manipal Information Security Team right from the very beginning, and connect with them."
        />
        <meta name="twitter:image" content="/images/mist_og.png" />
        <meta name="twitter:site" content="@sudo_mist" />
        <meta name="twitter:creator" content="@sudo_mist" />
      </Head>
      <h1 className="text-5xl emphasis-heading pt-10 font-extrabold">
        The MIST Network
      </h1>
      <p className="w-full px-5 md:w-1/2 mx-auto">
        Meet all the boards MIST ever had.
      </p>
      {alumniData}
    </div>
  );
};

export default Network;

export const getServerSideProps = async () => {
  const resAlumni = await fetch(`${SITE_DOMAIN}/api/alumni`);
  const alumni = await resAlumni.json();
  const resBatches = await fetch(`${SITE_DOMAIN}/api/alumni/boardyears`);
  const batches = await resBatches.json();
  return {
    props: {
      alumni,
      batches,
    },
    revalidate: 60,
  };
};
