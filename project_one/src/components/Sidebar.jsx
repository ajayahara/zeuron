import { Link, useLocation } from "react-router-dom";

const links = [
  {
    path: "/dashboard",
    source: "/dashboard.png",
    text: "General",
  },
  {
    path: "/eye",
    source: "/eye.png",
    text: "Optometry",
  },
  {
    path: "/neuron",
    source: "/neuron.png",
    text: "Neurology",
  },
  {
    path: "/",
    source: "/lungs.png",
    text: "Pulmonology",
  },
  {
    path: "/heart",
    source: "/heart.png",
    text: "Cardiology",
  },
  {
    path: "/xray",
    source: "/x-ray.png",
    text: "Dermatology",
  },
  {
    path: "/analytics",
    source: "/analytics.png",
    text: "Analysis",
  },
  {
    path: "/help",
    source: "/help.png",
    text: "Help",
  },
  {
    path: "/settings",
    source: "/settings.png",
    text: "Settings",
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-24 h-full bg-[#10101c] shadow-lg p-1 text-xs font-semibold text-center">
      <ul className="h-full flex flex-col justify-between">
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className= {`px-1 py-2 ${pathname==link.path?"bg-blue-400 rounded border-r-2 border-b-2 border-pink-900 shadow-lg":""}`}
            >
              <Link to={link.path} className="flex flex-col">
                <img
                  src={link.source}
                  alt={link.text}
                  className="w-6 aspect-square m-auto"
                />
                <span>{link.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
