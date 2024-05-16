import { useLocation } from "react-router-dom";

const links = [
  {
    path: "/",
    source: "/dashboard.png",
    text: "General",
  },
  {
    path: "/",
    source: "/eye.png",
    text: "Optometry",
  },
  {
    path: "/",
    source: "/neuron.png",
    text: "Neurology",
  },
  {
    path: "/",
    source: "/lungs.png",
    text: "Pulmonology",
  },
  {
    path: "/",
    source: "/heart.png",
    text: "Cardiology",
  },
  {
    path: "/",
    source: "/x-ray.png",
    text: "Dermatology",
  },
  {
    path: "/analytics",
    source: "/analytics.png",
    text: "Analysis",
  },
  {
    path: "/",
    source: "/help.png",
    text: "Help",
  },
  {
    path: "/",
    source: "/settings.png",
    text: "Settings",
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="w-28 h-full bg-[#10101c] shadow-lg p-2 text-sm font-semibold text-center">
      <ul className="h-full flex flex-col justify-between">
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className={pathname.includes("/analytics")&&(i==6) ? "bg-blue-400 p-1 rounded" : "p-1"}
            >
              <a href={link.path} className="flex flex-col gap-1">
                <img
                  src={link.source}
                  alt={link.text}
                  className="w-8 aspect-square m-auto"
                />
                <span>{link.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
