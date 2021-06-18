import { SITE_DOMAIN } from "../../../utils/constants";

const Topic = async ({category}) => {
    return (
        <div className="min-h-screen">
            <p className="text-4xl">{category}</p>
            <p className="text-4xl">Pansy</p>
        </div>
    )
}

export default Topic

export const getStaticPaths = async () => {
    const res = await fetch(`${SITE_DOMAIN}/api/news/getcategories`);
    const newsIds = await res.json();
    const paths = [];
    newsIds.data.forEach((element) => {
      const item = {
        params: {
          topic: element,
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
    const resCategory = await fetch(
      `${SITE_DOMAIN}/api/news/categorynews?category=${context.params.topic}`
    );
    const categoryInfo = await resCategory.json();
    return {
      props: {
        category: categoryInfo.category,
      },
      revalidate: 7200,
    };
  };
  