import Navbar from "./molecules/Navbar";
import Sidebar from "./molecules/Sidebar";

const PageBuilder = () => {
  return (
    <div className="h-screen flex items-start bg-gray-100 font-sans text-gray-900 overflow-y-hidden">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default PageBuilder;
