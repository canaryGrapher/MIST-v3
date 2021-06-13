import dbConnect from "../../utils/dbConnect";
import News from "../../models/News";
import Writer from "../../models/Writer"

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const news = await News.find({});
      res.status(200).json({ success: true, data: news });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const {
        newsHeading,
        highlightPhoto,
        description,
        date,
        credit,
        source,
        author,
        filtertag,
      } = req.body;

      const authorExists = await Writer.findOne({})
      const newNewsObject = {
        newsHeading: newsHeading,
        highlightPhoto: highlightPhoto,
        description: description,
        date: date,
        credit: credit,
        source: source,
        author: author,
        filtertag: filtertag,
      };

      const addNews = new Board(newNewsObject);
      await addNews.save();
      res.status(201).json(addNews);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
