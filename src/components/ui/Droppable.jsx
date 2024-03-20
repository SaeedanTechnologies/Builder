import { useDroppable } from "@dnd-kit/core";

function Droppable() {
  const droppable = useDroppable({
    id: "droppable-area",
    data: { isDesignerDropArea: true },
  });

  return (
    <p className="mt-4 w-full  text-3xl text-muted-foreground flex flex-grow items-center justify-center font-bold">
      Drop here
    </p>
  );
}

export default Droppable;
