import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const categories = await News.find().distinct("filtertag");
      let i = 0;
      let matchingCategory;
      let match = false;
      while (!match) {
        if (
          req.query.category === categories[i].split(" ").join("").toLowerCase()
        ) {
          match = true;
          matchingCategory = categories[i];
        }
        i++;
      }
      //   categories.forEach(element => {
      //       if(req.query.category === element.split(" ").join("").toLowerCase()) {
      //           console.log("Yureka")
      //       } else {
      //           console.log("Nahi mila")
      //       }
      //   });

      res.status(200).json({ success: true, category: matchingCategory, data: categories });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
