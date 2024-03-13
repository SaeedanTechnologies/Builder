import Navbar from "./molecules/Navbar";
import Sidebar from "./molecules/Sidebar";
const PageBuilder = () => {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default PageBuilder;
