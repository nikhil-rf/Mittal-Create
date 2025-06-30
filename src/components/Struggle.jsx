import React from "react";

const moments = [
  {
    title: "First Private Limited Company after 119 Years",
    image: "/assets/logo1.jpg",
    description:
      "Starting my first private limited company was a joyful and daring journey. But through every challenge, my mom stood by my side – and together, we made it.",
  },
  {
    title: "My First USA Based Company",
    image: "/assets/logo2.jpg",
    description:
      "It was my dream to start a company in the USA. After years of hard work and hope, I finally made it.",
  },
  {
    title: "My First TEDx talk",
    image: "/assets/moment3.jpg",
    description:
      "I was grateful to be invited to deliver a TEDx Talk at MRU — a lifelong achievement that I will always cherish.",
  },
  {
    title: "35000 LinkedIn Followers + 10 Million Impressions",
    image: "/assets/moment4.jpg",
    description:
      "Getting 10 Million impressions on LinkedIn at such an age is a huge milestone for me, as my story got accepted by thousands of people.",
  },
  {
    title: "LinkedIn Star",
    image: "/assets/moment5.jpg",
    description:
      "My Profile was selected as a LinkedIn Star Profile, LinkedIn Entrepreneurship Digest, and Top 1% of the world’s most viewed profiles.",
  },
  {
    title: "My First ‘Luxurious’ Watch",
    image: "/assets/moment6.jpg",
    description:
      "After years of dedication and hard work, I am incredibly proud to own my first luxury watch – a symbol of perseverance and a milestone I will always cherish.",
  },
  {
    title: "The First Offline Session",
    image: "/assets/moment7.jpg",
    description:
      "I was invited by SV Polytechnic Institute (Rajkot) by HOD Mr. Mukesh Kumar Kansara to deliver a session on Starting a Business in Early Age. It is always the most proud moment for me.",
  },
  {
    title: "The First Presentation",
    image: "/assets/moment8.jpg",
    description:
      "This is the image of one of my early presentations at my college NMIMS with my colleagues. It always helped me a lot to boost my presentation skills.",
  },
  {
    title: "Founding Coding Community",
    image: "/assets/moment9.jpg",
    description:
      "Sarthak Mittal initiated coding community in NMIMS Indore, to empower juniors about current industry trends and removing the coding phobia. The event linked to Youthon’21 Youth Leaders Foundation a highly successful initiative. Now YLC is under Mittal Alliance.",
  },
  {
    title: "The First Talk Show",
    image: "/assets/moment10.jpg",
    description:
      "I was honored to deliver a founder talk in IPS Academy Indore for the First Time. It is the great honor for me to achieve this in such an early age.",
  },
  {
    title: "Teaching @ Microsoft Student Community",
    image: "/assets/moment11.jpg",
    description:
      "Yesterday I taught 80+ students at NIIT and NMIMS “The Fundamentals of Python”. I also provided certifications to each and every attendee powered by Microsoft.",
  },
  {
    title: "Founding Coding Community",
    image: "/assets/moment12.jpg",
    description:
      "Sarthak Mittal initiated coding community in NMIMS Indore, to empower juniors about current industry trends and removing the coding phobia. The event linked to Youthon’21 Youth Leaders Foundation a highly successful initiative. Now YLC is under Mittal Alliance.",
  },
];

export default function LifeMoments() {
  return (
    <div className="bg-black text-white min-h-screen py-10 px-4">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-yellow-500">
          MY STRUGGLES MADE ME HUMBLE & GROUNDED
        </h1>
        <p className="text-lg text-gray-300">
          Some moments which made my life memorable
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">
        {moments.map((moment, idx) => (
          <div
            key={idx}
            className="bg-yellow-50 text-black shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={moment.image}
              alt={moment.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">
                {moment.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {moment.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
