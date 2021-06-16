import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";
import Writer from "../../../models/Writer";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const { page } = req.query;
      console.log(!isNaN(page) && !isNaN(parseFloat(page)) && (typeof page === "string"))

      // If homepage is provided
      if (page === "home") {
        const news = await News.find({}).sort("-date").limit(18);
        res.status(200).json({ success: true, data: news });
      }
      // If page number is provided
      else if(!isNaN(page) && !isNaN(parseFloat(page)) && typeof page == "string") {
        const perPage = 12;
        const output = await News.find().limit(perPage).skip(perPage * page).sort("-date");
        res.status(200).json({ success: true, data: output });
      }
      // If no valid query is provided
      else {
        res.status(500).json({ success: false });
      }
    } catch (error) {
      console.log(error)
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
        link,
      } = req.body;

      const authorExists = await Writer.findOne({ username: author });
      if (authorExists) {
        res.status(409).json({ msg: "Username exists" });
      } else {
        const newNewsObject = {
          newsHeading: newsHeading,
          highlightPhoto: highlightPhoto,
          description: description,
          date: date,
          credit: credit,
          source: source,
          link: link,
          author: author,
          filtertag: filtertag,
        };

        const addNews = new News(newNewsObject);
        await addNews.save();
        res.status(201).json(addNews);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}