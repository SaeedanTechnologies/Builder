import { IconBxsChevronLeft, IconEye } from "@/icons";
import { DndContext } from "@dnd-kit/core";
import RightMenu from "./RightMenu";
import Content from "./Content";
import BlockElements from "./BlockElements";
import { DragOverlayWrapper } from "@/components";

const Navbar = () => {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <header className="flex h-18 items-center justify-center border-b border-gray-200 bg-white gap-x-3">
          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
            <IconBxsChevronLeft className="h-6 w-6 stroke-current text-gray-400" />
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <IconEye className="w-6 h-6 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Preview</span>
          </button>
        </header>

        <DndContext>
          <div className="flex">
            {/* <BlockElements /> */}
            <Content />
          </div>
          <DragOverlayWrapper />
        </DndContext>
      </div>
      <RightMenu />
    </>
  );
};

export default Navbar;
