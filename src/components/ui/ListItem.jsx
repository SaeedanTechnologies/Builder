import { useState } from "react";

const ListItem = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`group relative ${isFocused ? "border-blue-600" : ""}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* <div className="pointer-events-none absolute inset-0 hidden border-2 border-blue-600 group-focus-within:block">
        <div className="absolute left-0 top-0 -translate-y-full h-2 w-2 -translate-x-full border-2 border-blue-600"></div>
        <div className="absolute right-0 top-0 -translate-y-full h-2 w-2 translate-x-full border-2 border-blue-600"></div>
        <div className="absolute left-0 bottom-0 translate-y-full h-2 w-2 -translate-x-full border-2 border-blue-600"></div>
        <div className="absolute right-0 bottom-0 translate-y-full h-2 w-2 translate-x-full border-2 border-blue-600"></div>
      </div> */}
      {children}
    </div>
  );
};

export default ListItem;
