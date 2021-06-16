// import { useRouter } from "next/router";
// import dbConnect from "../../utils/dbConnect";
// import News from "../../models/News";

// export default async function handler(req, res) {
//   await dbConnect();
//   const { method } = req;
//   if (method === "GET") {
//     try {
//       const asd = data.map(async (item) => {
//         const {
//           newsHeading,
//           date,
//           sortingQuery,
//           highlightPhoto,
//           about,
//           credit,
//           author,
//           source,
//           filterTags,
//           para,
//         } = item;

//         const newNewsObject = {
//           newsHeading: newsHeading,
//           highlightPhoto: highlightPhoto,
//           description: para,
//           date: date,
//           link: about,
//           credit: credit,
//           source: source,
//           author: author,
//           filtertag: filterTags,
//         };
//         const addNews = new News(newNewsObject);
//         await addNews.save();
//         return "Hi"
//       });
//       res.status(201).json({ asd });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ success: false });
//     }
//   }
// }
