import Head from "next/head";
import { SITE_DOMAIN } from "../utils/constants";
import TeamCard from "../components/TeamCard.js";

const Team = ({ board, mancomm, workcomm }) => {
  return (
    <div className="text-center container mx-auto text-gray-50 py-20 min-h-screen">
      <Head>
        <title>Meet the team | Manipal Information Security Team</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Meet the awesome team of Manipal Information Security Team." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yash Aryan, yash.aryan@aol.com" />
        <meta
          name="keywords"
          content="cybersecurity, manipal, manipal institute of technology, clubs, student clubs, student, organization, news, cybermanipal, news"
        />
        <meta name="url" content="https://wearemist.in/team" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://wearemist.in/team" />
        <meta name="reply-to" content="sudo@wearemist.in" />
        {/* OG meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Meet the team | Manipal Information Security Team"
        />
        <meta
          property="og:description"
          content="Meet the awesome team of Manipal Information Security Team."
        />
        <meta property="og:image" content="/images/mist_og.png" />
        <meta property="og:url" content="https://wearemist.in/team" />
        <meta
          property="og:site_name"
          content="Manipal Information Security Team"
        />
        <meta
          name="twitter:title"
          content="Meet the team | Manipal Information Security Team"
        />
        <meta
          name="twitter:description"
          content="Meet the awesome team of Manipal Information Security Team."
        />
        <meta name="twitter:image" content={"/images/mist_og.png"} />
        <meta name="twitter:site" content="@sudo_mist" />
        <meta name="twitter:creator" content="@sudo_mist" />
      </Head>
      <h1 className="text-5xl emphasis-heading pt-10 font-extrabold px-1">
        Meet the Team
      </h1>
      <p className="px-5">
        Take a look at all the members of the club who make it so awesome
      </p>
      {/* Rendering Board section */}
      <div className="pt-20">
        <h2 className="text-3xl rainbow-text emphasis-heading font-semibold">
          The Board
        </h2>
        <p className="w-full px-5 md:w-1/2 mx-auto">
          We represent, look over and manage the entire club. It's just a fancy
          way of saying we do nothing important at all other than bossing people
          around, and we love it because we have earned it after being badgered
          by our seniors for two years. That's how it has always been, and
          that's how it will always be.
        </p>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-auto">
          {board.data.map((item) => (
            <TeamCard
              key={item._id}
              name={item.name}
              position={item.position}
              about={item.about}
              photo={item.photo}
              social={item.social}
              category="board"
            />
          ))}
        </div>
      </div>

      {/* Rendering ManComm section */}
      <div className="pt-20">
        <h2 className="text-3xl rainbow-text emphasis-heading font-semibold">
          The Management Committee
        </h2>
        <p className="w-full px-5 md:w-1/2 mx-auto">
          Even the Board agrees that we do the most work in the club, but they
          would never admit it publicly. We are the hardest working people in
          the club. We slog through this hardship to qualify for the board seats
          and to become the next epitome of laziness.
        </p>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-auto">
          {mancomm.data.map((item) => (
            <TeamCard
              key={item._id}
              name={item.name}
              photo={item.photo}
              about={item.about}
              social={item.social}
              category="mancomm"
            />
          ))}
        </div>
      </div>

      {/* Rendering WorkComm section */}
      <div className="pt-20">
        <h2 className="text-3xl rainbow-text emphasis-heading font-semibold">
          The Working Committee
        </h2>
        <p className="w-full px-5 md:w-1/2 mx-auto">
          We are college freshers, and joining more than one club is the strict
          rule most of us follow. It is insurance for when things start getting
          difficult in one club. We are the most volatile members of any club.
          Maybe that's why the developer decided not to add an "about."
          information for us, although it is a fact that we do more work than
          the Board.
        </p>
        <div className="p-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 mx-auto">
          {workcomm.data.map((item) => (
            <TeamCard
              key={item._id}
              name={item.name}
              photo={item.photo}
              social={item.social}
              category="workcomm"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          background-color: #121212;
        }
      `}</style>
    </div>
  );
};

export default Team;

export const getServerSideProps = async () => {
  const resBoard = await fetch(`${SITE_DOMAIN}/api/team/board`);
  const board = await resBoard.json();
  const resMancomm = await fetch(`${SITE_DOMAIN}/api/team/mancomm`);
  const mancomm = await resMancomm.json();
  const resWorkcomm = await fetch(`${SITE_DOMAIN}/api/team/workcomm`);
  const workcomm = await resWorkcomm.json();

  return {
    props: {
      board,
      mancomm,
      workcomm,
    },
    revalidate: 86400,
  };
};
