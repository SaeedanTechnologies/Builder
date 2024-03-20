import { IconRectangleHorizontal } from "@/icons";
import { cn } from "@/utils";
import { useDraggable } from "@dnd-kit/core";

export const Button = ({ label }) => {
  const draggable = useDraggable({
    id: "draggable-btn",
    data: {
      isDraggableBtn: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      variant="outline"
      className={cn(
        "w-full border shadow text-xs border-gray-200 rounded-md flex flex-col items-center justify-center gap-1 cursor-grab py-2 px-3 text-gray-400 hover:bg-gray-100",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <IconRectangleHorizontal className="h-5 w-5 stroke-current" />
      <p className="text-sm">{label}</p>
    </Button>
  );
};
