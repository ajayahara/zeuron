import { Sidebar } from "./components/Sidebar";
import { AllRoute } from "./route/AllRoute";

export const App = () => {
  return (
    <div className="h-[100vh] w-full bg-[#0d0e17] overflow-y-scroll text-white flex gap-4">
      <Sidebar />
      <div className="w-full h-full">
        <AllRoute />
      </div>
    </div>
  );
};
