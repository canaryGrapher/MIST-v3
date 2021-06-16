// import { useRouter } from "next/router";
// import dbConnect from "../../utils/dbConnect";
// import Writer from "../../models/Writer";

// export default async function handler(req, res) {
//   await dbConnect();
//   const { method } = req;
//   if (method === "GET") {
//     try {
//       data.map(async (item) => {
//         const {
//           name,
//           position,
//           about,
//           avatar,
//           youtube,
//           twitter,
//           facebook,
//           linkedin,
//           instagram,
//           blogpage,
//           medium,
//           webpage,
//           github,
//           email,
//         } = item;

//         const newBoardObject = {
//           name: name,
//           avatar: avatar,
//           position: position,
//           about: about,
//           social: {},
//         };
//         if (youtube) newBoardObject.social.youtube = youtube;
//         if (twitter) newBoardObject.social.twitter = twitter;
//         if (facebook) newBoardObject.social.facebook = facebook;
//         if (linkedin) newBoardObject.social.linkedin = linkedin;
//         if (instagram) newBoardObject.social.instagram = instagram;
//         if (blogpage) newBoardObject.social.blogpage = blogpage;
//         if (medium) newBoardObject.social.medium = medium;
//         if (webpage) newBoardObject.social.webpage = webpage;
//         if (github) newBoardObject.social.github = github;
//         if (email) newBoardObject.social.email = email;
//         const addMember = new Writer(newBoardObject);
//         await addMember.save();
//       });

//       res.status(201).json({ msg: "ok" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ success: false });
//     }
//     //   } else {
//     //     res.status(500).json({ success: false });
//     //   }
//   }
// }

