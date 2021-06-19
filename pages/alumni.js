import { SITE_DOMAIN } from "../utils/constants";
import Head from "next/head";
import AlumniCard from "../components/AlumniCard";

const Network = ({ alumni, batches }) => {
  const alumniData = batches.data.map((batch) => {
    return (
      <div className="py-5">
        <h2 className="text-3xl rainbow-text emphasis-heading font-semibold">
          Board of {batch}
        </h2>
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
        <link rel="icon" href="/favicon.ico" />
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

export const getStaticProps = async () => {
  const resAlumni = await fetch(`${SITE_DOMAIN}/api/alumni`);
  const alumni = await resAlumni.json();
  const resBatches = await fetch(`${SITE_DOMAIN}/api/alumni/boardyears`);
  const batches = await resBatches.json();
  return {
    props: {
      alumni,
      batches,
    },
    revalidate: 86400,
  };
};
