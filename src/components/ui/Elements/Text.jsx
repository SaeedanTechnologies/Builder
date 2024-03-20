import { IconRectangleHorizontal } from "@/icons";
import { useDraggable } from "@dnd-kit/core";

const Text = () => {
  const draggable = useDraggable({
    id: "draggable-text",
    data: {
      isDraggableText: true,
    },
  });

  return (
    <div className="w-full border shadow text-xs border-gray-200 rounded-md flex flex-col items-center justify-center cursor-grab gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
      <IconRectangleHorizontal className="h-5 w-5 stroke-current" />
      <span>Text</span>
    </div>
  );
};

export default Text;
