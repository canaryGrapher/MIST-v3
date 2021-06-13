const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1>Next.js Tailwind CSS Starter</h1>
    </div>
  );
};

export function getStaticProps() {
    return {
      props: {
        data: {
          recipes: [{ title: "Pineapple Smoothie" }],
        },
      },
    };
  }

export default Home;
