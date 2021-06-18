import Head from "next/head";
import { Fragment } from "react";
import "tailwindcss/tailwind.css";

export default function Home() {
  const whatwedo = [
    {
      id: 1,
      title: "Cryptography",
      details:
        "Cryptography or cryptology is the practice and study of techniques for secure communication in the presence of third parties called adversaries. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.",
      color: "#B14748",
    },
    {
      id: 2,
      title: "Web Development",
      details:
        "Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
      color: "#5e35b1",
    },
    {
      id: 3,
      title: "Research",
      details:
        "Research and innovation can generate advances that help cybersecurity keep up with the evolving cyber risks. This helps create a trusted and resilient digital environment. We aim to support progress in cybersecurity research by operating as an ambitious, challenge-led research team.",
      color: "#1565c0",
    },
    {
      id: 4,
      title: "Capture the flags",
      details:
        "A Cyber Security Capture The Flag(CTF) is a competition between security professionals and/or students learning about Cyber Security. This competition is used as a learning tool for everyone that is interested in Cyber security and it can help sharpen the tools they have learned during their training.",
      color: "#3AAD79",
    },
    {
      id: 5,
      title: "Cyber Awareness",
      details:
        "Cyber Security awareness is knowledge combined with attitudes and behaviors that serve to protect our information assets. Being cybersecurity aware means you understand what the threats are and you take the right steps to prevent them.",
      color: "#689f38",
    },
    {
      id: 6,
      title: "Networking",
      details:
        "Computer networking refers to connected computing devices (such as laptops, desktops, servers, smartphones, and tablets) and an ever-expanding array of IoT devices (such as cameras, door locks and various sensors) that communicate with one another. Networking is the backbone of the internet itself and often a foundation to Cyber Security.",
      color: "#f9a825",
    },
  ];

  const events = [
    {
      id: 1,
      img: "https://assets.materialup.com/uploads/866896e1-fb71-4161-a1b3-0f9af08a68a8/preview.jpg",
      title: "Cybersecurity for everyone",
      details:
        "One of our standard events meant to raise awareness about cybersecurity, the threats that the internet poses, the various ways in which the internet can spoof you, and at the same time presents people with a fair idea on how to guard against these very dangers.",
    },
    {
      id: 2,
      img: "https://2.img-dpreview.com/files/p/E~TS940x788~articles/2988339509/BlogHeader_150-1-1800x0-c-default_copy.jpeg",
      title: "Faceless",
      details:
        "A one-of-a-kind event that will put your investigative abilities and reasoning to the test. You will get the first-hand experience in using open source intelligence as a way to dox online identities.",
    },
    {
      id: 3,
      img: "https://assets.materialup.com/uploads/866896e1-fb71-4161-a1b3-0f9af08a68a8/preview.jpg",
      title: "CTF",
      details:
        "We, as a club, organise Capture the Flag events twice a year. With challenges spread out over multiple domains including web exploitation, pwning, reverse engineering, and cryptography, this event has garnered participation from over 7 countries this year. Having participated in CTFs as a team, we realise its importance for people who are delving into cybersecurity.",
    },
    {
      id: 4,
      img: "https://assets.materialup.com/uploads/866896e1-fb71-4161-a1b3-0f9af08a68a8/preview.jpg",
      title: "Ctrl+C",
      details:
        "Combining web development skills with a bit of cybersecurity knowledge, our event CTRL+C requires participants to perform two tasks. They need to clone a website, created from scratch by our team, and then go on to find out as much information as possible about any user who visits the hosted site. It is an ideal blend of technical and design skills. ",
    },
    {
      id: 5,
      img: "http://incitrio.com/wp-content/uploads/2015/01/Apple_gray_logo.png",
      title: "Smoked",
      details:
        "One of the most loved events of MIST- where you search deep in the websites to solve mind-boggling puzzles while racking your brains and tracking the clues to get to the top of the leaderboard. So get ready for some thrill coz it's gonna get SMOKED!",
    },
    {
      id: 6,
      img: "https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg",
      title: "Game Nights",
      details:
        "MIST organizes gaming nights every once in a while, which serve as a bonding experience between the club members. It involves various games for every type of enthusiast. From combats in Valorant to screwing up drawings in scribble. Whatever you feel like playing, you will always find company.",
    },
  ];

  const whatwedocards = whatwedo.map((item) => {
    return (
      <div
        key={item.id}
        className="card max-w-sm rounded overflow-hidden shadow-lg"
        style={{ backgroundColor: item.color }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{item.title}</div>
          <p className="text-gray-200 text-base">{item.details}</p>
        </div>
      </div>
    );
  });

  const eventCards = events.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl mt-4 w-100 mx-2"
      >
        <div className="h-52 w-auto md:w-1/2">
          <img className="h-full mx-auto" src={item.img} />
        </div>
        <div className="w-full py-4 px-6  flex flex-col justify-center bg-transparent text-center md:text-left">
          <h3 className="text-xl leading-tight truncate mb-2 font-extrabold text-blue-300">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-400">{item.details}</p>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="container pb-15 pt-5 flex flex-col justify-center min-h-100 w-screen mx-auto">
        <Head>
          <title>Manipal Information Security Team</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          {/* Intro section */}
          <div className="text-center flex flex-col justify-center min-h-screen">
            <p className="lg:text-lg text-base text-gray-400">
              We are a community of cybersecurity enthusisasts, known as the
            </p>
            <h1 className="text-center lg:text-9xl text-5xl font-black gradient-text emphasis-heading">
              Manipal Information <br /> Security Team
            </h1>
            <p className="lg:text-lg text-base text-gray-400">
              from the Manipal Institute of Technology, India
            </p>
          </div>
          {/* Who are we section */}
          <div className="h-66 flex md:flex-row flex-col justify-center">
            <div className="md:w-1/2 flex flex-col justify-center px-5 md:px-10">
              <h2 className="text-3xl rainbow-text text-center md:text-left">Who are we?</h2>
              <p>
                We are a team of Information and Network Security enthusiasts
                who aim to spread the knowledge to other students with an
                interest in this ever-growing field of Computer Science. Our
                goal is to ensure that students approach this field the right
                way by providing them with a platform to enhance and practice
                their skills. Lastly, we'd like to say, we are not hackers. So
                if you are here with the intention of hacking into your friend's
                Facebook account, we are afraid we can't assist you.
              </p>
            </div>
            <div className="flex flex-col justify-center text-center w-full md:w-1/2 pt-10 md:pt-0">
              <p className="emphasis-heading lg:text-6xl text-3xl rainbow-tag text-center mx-auto w-full">
                #wearemist
              </p>
            </div>
          </div>
          {/* Quote section */}
          <div className="md:py-10 lg:w-3/4 mx-auto px-5">
            <blockquote className="text-center text-3xl font-black emphasis-heading text-image-beach">
              "If you put a key under the mat for the cops, a burglar can find
              it, too. Criminals are using every technology tool at their
              disposal to hack into people’s accounts. If they know there’s a
              key hidden somewhere, they won’t stop until they find it."
            </blockquote>
            <p className="text-right text-gray-400 mt-5">
              - Timothy Donald Cook
            </p>
          </div>
          {/* What we do section */}
          <div className="px-5 md:px-10 min-h-screen pt-20">
            <h2 className="text-3xl rainbow-text text-center">
              What do we do?
            </h2>
            <p className="text-center w-full lg:w-3/4 mx-auto">
              We are primarily focused on cybersecurity, but we also sail
              uncharted waters from time to time. We make awesome websites,
              organize awesome events, and even host awesome game nights within
              the club. In all, we are an awesome club of an awesome university.
            </p>
            <div className="py-5 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatwedocards}
            </div>
          </div>
          {/* Quote section */}
          <div className="md:py-10 lg:w-3/4 mx-auto px-5">
            <blockquote className="text-center text-3xl font-black emphasis-heading text-image-beach">
              "Arguing that you don’t care about the right to privacy because
              you have nothing to hide is no different than saying you don’t
              care about free speech because you have nothing to say."
            </blockquote>
            <p className="text-right text-gray-400 mt-5">
              - Edward Joseph Snowden
            </p>
          </div>
          {/* Events section */}
          <div className="px-5 md:px-10 min-h-screen pt-20 pb-20">
            <h2 className="text-3xl rainbow-text text-center">
              Awesome Activities
            </h2>
            <p className="text-center lg:w-3/4 mx-auto">
              Throughout the year, we organize numerous interesting events. We
              also spend lots of time on projects and team building activities.
              There are lots of pranking, learning, and sharing, and that is
              what makes us so different from other clubs. We believe in
              Awesomeness.
            </p>
            <div className="md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
              {eventCards}
            </div>
          </div>
        </main>
        <style jsx>{`
          main {
          }

          .gradient-text {
            padding: 10px 40px;
            user-select: none;
            background: #ca4246;
            background-color: #ca4246;
            background: conic-gradient(
              #ca4246 16.666%,
              #e16541 16.666%,
              #e16541 33.333%,
              #f18f43 33.333%,
              #f18f43 50%,
              #8b9862 50%,
              #8b9862 66.666%,
              #476098 66.666%,
              #476098 83.333%,
              #a7489b 83.333%
            );
            background-size: 57%;
            background-repeat: repeat;

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            animation: rainbow-text-animation-rev 2s ease forwards;
            animation-iteration-count: infinite;
          }

          @keyframes rainbow-text-animation {
            0% {
              background-size: 57%;
              background-position: 0 0;
            }
            20% {
              background-size: 57%;
              background-position: 0 1em;
            }
            100% {
              background-size: 300%;
              background-position: -9em 1em;
            }
          }

          @keyframes rainbow-text-animation-rev {
            0% {
              background-size: 300%;
              background-position: -9em 1em;
            }
            20% {
              background-size: 57%;
              background-position: 0 1em;
            }
            100% {
              background-size: 57%;
              background-position: 0 0;
            }
          }
        `}</style>
      </div>
    </Fragment>
  );
}
