import SidebarBtnElement from "./SidebarBtnElement";
import { BlockElements } from "./BlockElements";

const DesignerSideBar = () => {
  return (
    <div className=" h-screen overflow-y-scroll bg-white border-box border-gray-200 border-r flex flex-col gap-5  px-5 pt-10 pb-32 w-[200px]">
      <span className="font-semibold">Add</span>

      <div className="w-full  flex flex-col gap-3">
        <span>Media</span>

        <div className="grid grid-cols-2 gap-4 cursor-pointer items-center justify-center"></div>
      </div>

      <div className="w-full  flex flex-col gap-3">
        <span>Elements</span>
        <SidebarBtnElement blockElement={BlockElements.Text} />

        <div className="grid grid-cols-2 gap-4 cursor-pointer items-center justify-center"></div>
      </div>

      <div className="w-full  flex flex-col gap-3">
        <span> Web Elements</span>

        <div className="grid grid-cols-2 gap-4 cursor-pointer items-center justify-center"></div>
      </div>
    </div>
  );
};

export default DesignerSideBar;
