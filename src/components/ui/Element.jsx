import { IconDuplicateOutline, IconDelete } from "@/icons";
import { useRef } from "react";

const Element = ({ children, titleClass, title }) => {
  const divElement = useRef();
  return (
    <div
      className="group relative outline-none"
      contentEditable={true}
      suppressContentEditableWarning={true}
      ref={divElement}
    >
      <div className="absolute inset-0 hidden border-2 border-blue-600 group-focus-within:block">
        <div className="absolute -translate-y-full pl-2">
          <div className="flex items-center gap-x-2 rounded-t-lg bg-blue-600 px-3 py-1 text-white cursor-pointer ">
            <span className={titleClass}>{title}</span>

            <span
              onClick={() => {
                divElement.current.remove();
              }}
            >
              <IconDelete className="h-4 w-4 fill-current" />
            </span>

            <span
              onClick={() => {
                alert("copy");
              }}
            >
              <IconDuplicateOutline className="h-4 w-4 fill-current" />
            </span>
          </div>
        </div>
        <div className="absolute left-0 top-0 -translate-y-full h-2 w-2 -translate-x-full border-2 border-blue-600"></div>
        <div className="absolute right-0 top-0 -translate-y-full h-2 w-2 translate-x-full border-2 border-blue-600"></div>
        <div className="absolute left-0 bottom-0 translate-y-full h-2 w-2 -translate-x-full border-2 border-blue-600"></div>
        <div className="absolute right-0 bottom-0 translate-y-full h-2 w-2 translate-x-full border-2 border-blue-600"></div>
      </div>
      {children}
    </div>
  );
};

export default Element;