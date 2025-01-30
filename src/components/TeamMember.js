import React from "react";

import FBBImg from "../Assets/photos/team-member/fahad.png";
import KaImg from "../Assets/photos/team-member/khorshed-photo.jpg";
import AlImg from "../Assets/photos/team-member/alamin.png";
import BUImg from "../Assets/photos/team-member/borhan.png";
import MUImg from "../Assets/photos/team-member/mayin.png";
import OsmanImg from "../Assets/photos/team-member/osman.jpg";
import AlaminImg from "../Assets/photos/team-member/alamin-new.jpg";
import userImg from "../Assets/photos/team-member/user-male.png";
import userFeImg from "../Assets/photos/team-member/user-female.png";

const teamMembers = [
  // {
  //   name: "Fahad Bin Bashar",
  //   role: "Senior Software Engineer",
  //   description:
  //     "Overseeing all technology operations and evaluating them according to the goals.",
  //   image: FBBImg,
  //   socialLinks: {
  //     globe: "https://www.facebook.com/fahadbinbashar",
  //     github: "#",
  //     linkedin: "#",
  //     facebook: "#",
  //   },
  // },
  {
    name: "Osman Ghoni",
    role: "Sr. Software Developer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: OsmanImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Md Mayin Uddin",
    role: "Application Developer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: MUImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Md Borhan Uddin",
    role: "Software Developer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: BUImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },

  {
    name: "Al Amin",
    role: "Full Stack Developer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: AlImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Md Khorshed Alam",
    role: "Full Stack Developer",
    description:
      "Overseeing all the React.js technology operations and evaluating them according to the goals.",
    image: KaImg,
    socialLinks: {
      globe: "https://khorshedalam-kbd.web.app/",
      github: "https://github.com/khorshed-alam-kbd/",
      linkedin: "https://www.linkedin.com/in/khorshedalam-kbd/",
      facebook: "https://www.facebook.com/engr.khorshedalam.bd",
    },
  },
  {
    name: "Md Al-amin",
    role: "Front End developer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: AlaminImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Nishad Ahmed",
    role: "React developer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: userImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  // {
  //   name: "Tamanna Rahman",
  //   role: "QA Engineer",
  //   description:
  //     "Overseeing all technology operations and evaluating them according to the goals.",
  //   image: userFeImg,
  //   socialLinks: {
  //     globe: "#",
  //     github: "#",
  //     linkedin: "#",
  //     facebook: "#",
  //   },
  // },
  {
    name: "Taijul Islam",
    role: "UI/UX Designer",
    description:
      "Overseeing all technology operations and evaluating them according to the goals.",
    image: userImg,
    socialLinks: {
      globe: "#",
      github: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  // {
  //   name: "Aysha Khan",
  //   role: "IT Executive",
  //   description:
  //     "Overseeing all technology operations and evaluating them according to the goals.",
  //   image: userFeImg,
  //   socialLinks: {
  //     globe: "#",
  //     github: "#",
  //     linkedin: "#",
  //     facebook: "#",
  //   },
  // },
];
function TeamMember() {
  return (
    <div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 lg:p-0">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 shadow-md rounded-md"
          >
            <figure>
              <img
                src={member.image}
                className="w-full h-[300px]"
                alt={member.name}
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              {/* <p className='text-justify'>{member.description}</p> */}
              {/* <div className="flex justify-around mt-3 py-3 rounded bg-base-200">
                    {member.socialLinks.globe && (
                      <a
                        href={member.socialLinks.globe}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                    {member.socialLinks.facebook && (
                      <a
                        href={member.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                    )}
                  </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
