import { useRouter } from "next/router";
import dbConnect from "../../../utils/dbConnect";
import Writer from "../../../models/Writer";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === "GET") {
    try {
      const router = useRouter();
      const writer = await Writer.find({ username: router.query });
      res.status(200).json({ success: true, data: writer });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
  if (method === "POST") {
    try {
      let username = "";
      let foundUsername = false;
      let iteration = 1;
      const CheckWriter = await Writer.findOne({
        username: `@${req.body.name.replace(/\s/g, "")}`,
      });
      if (CheckWriter) {
        while (!foundUsername) {
          const CheckWriter = await Writer.findOne({
            username: `@${req.body.name.replace(/\s/g, "")}${iteration}`,
          });
          if (CheckWriter) {
            iteration++;
          } else {
            username = `@${req.body.name.replace(/\s/g, "")}${iteration}`;
            foundUsername = true;
          }
        }
      } else {
        username = `@${req.body.name.replace(/\s/g, "")}`;
      }
      const {
        name,
        position,
        about,
        avatar,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram,
        blogpage,
        medium,
        webpage,
        github,
        email,
      } = req.body;
      if (!avatar || !name || !position || !about) {
        res.status(406).json({
          msg: "Avatar, name, position and about fields are required",
        });
      }
      const newNewsCreator = {
        name: name,
        avatar: avatar,
        position: position,
        about: about,
        username: username,
        social: {},
      };
      if (youtube) newNewsCreator.social.youtube = youtube;
      if (twitter) newNewsCreator.social.twitter = twitter;
      if (facebook) newNewsCreator.social.facebook = facebook;
      if (linkedin) newNewsCreator.social.linkedin = linkedin;
      if (instagram) newNewsCreator.social.instagram = instagram;
      if (blogpage) newNewsCreator.social.blogpage = blogpage;
      if (medium) newNewsCreator.social.medium = medium;
      if (webpage) newNewsCreator.social.webpage = webpage;
      if (github) newNewsCreator.social.github = github;
      if (email) newNewsCreator.social.email = email;

      const addWriter = new Board(newNewsCreator);
      await addWriter.save();
      res.status(201).json(addWriter);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
