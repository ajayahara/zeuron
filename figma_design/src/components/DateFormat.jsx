export const DateFormat = ({ date, color }) => {
  return (
    <div
      className={`relative text-md font-semibold p-1 ${
        color ? "text-blue-500" : "text-gray-400"
      }`}
    >
      <p>{date}</p>
      <span
        className={`absolute w-1/4 h-1 rounded mx-auto left-7 ${
          color ? "bg-blue-500" : ""
        }`}
      ></span>
    </div>
  );
};
