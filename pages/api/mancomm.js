import dbConnect from "../../utils/dbConnect";
import Mancomm from "../../models/Mancomm";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const mancomm = await Mancomm.find({});
      res.status(200).json({ success: true, data: mancomm });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const {
        name,
        photo,
        about,
        linkedin,
        webpage,
        email,
        github,
        blog,
        twitter,
        facebook,
        instagram,
        youtube,
      } = req.body;

      const newMancommObject = {
        name: name,
        about: about,
        photo: photo,
        social: {},
      };
      if (photo) newMancommObject.photo = photo;
      if (youtube) newMancommObject.social.youtube = youtube;
      if (twitter) newMancommObject.social.twitter = twitter;
      if (facebook) newMancommObject.social.facebook = facebook;
      if (linkedin) newMancommObject.social.linkedin = linkedin;
      if (instagram) newMancommObject.social.instagram = instagram;
      if (blog) newMancommObject.social.blog = blog;
      if (webpage) newMancommObject.social.webpage = webpage;
      if (github) newMancommObject.social.github = github;
      if (email) newMancommObject.social.email = email;

      const addMember = new Mancomm(newMancommObject);
      await addMember.save();
      res.status(201).json(addMember);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
