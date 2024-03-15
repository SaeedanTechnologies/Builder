import { DndProvider } from "react-dnd";
import Navbar from "./molecules/Navbar";
import Sidebar from "./molecules/Sidebar";
import { HTML5Backend } from "react-dnd-html5-backend";

const PageBuilder = () => {
  return (
    <div className="h-screen flex items-start bg-gray-100 font-sans text-gray-900 overflow-y-hidden">
      <DndProvider backend={HTML5Backend}>
        <Sidebar />
        <Navbar />
      </DndProvider>
    </div>
  );
};

export default PageBuilder;
