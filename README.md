# Maintenance guide for the website
The app is written in NextJS, for the [Manipal Information Security Team](https://wearemist.in/). Here are a few guidelines you'll need to follow for the handling of the website.

## Hosting the website
The latest copy of the code is stored on [this repository](https://github.com/ManipalInformationSecurityTeam/MIST-v3). If you need to redeploy, or change hosting, use this repository so that it would be easier to maintain in the future. The current website is hosted on Vercel, but you can change it if you are more comfortable with some other platform. The good thing about Vercel is that it will automaticall redeploy if there are changes in your repository. 
There are two different repositories that you'll need to host in order for the website to work. Deploy these projects in the given oder, because the frontend needs the serverless functions to be running before it is deployed.
- Serverless functions
- The main website
You'll also need to set up the environment variables on your hosting platform so that the app works properly. Refer to [example.env.local](https://github.com/canaryGrapher/MIST-v3/blob/main/example.env.local) for the required enviroment variables. This file is saved as .env.local, or if the hosting service allows you to save these environment variables in the dashboard itself, you could ignore creating that file. This file needs to be kept a secret and a local copy could be found with the current web development head of the club.

## Adding news team members
You can directly add members to the website by using the Postman collection, usually available with the current web development head of the club. You'll also need an API key so that your requests could be validated by the app. 
Now, all the current team members' images are stored on [Flickr](https://www.flickr.com/). This is important because team members change every year and this data is not permanent. Also make sure that you organize images in albums for different kind of members. This will make sure that you do not spend eternity finding image of a person who has left the club. If you are directly entering data into the MongoDB database, you need to provide a "No profile Image" photo compulsorily if a member's image is not available. However, this is not the case if you are using the postman collection because it is handled automatically by mongoose. 
**#Note:** Make sure that you do not change the order of Board members while you are uploading data. It should be uploaded in the same order as it is on the current website. Order doesn't matter for other members, i.e. ManComm or the WorkComm members.
