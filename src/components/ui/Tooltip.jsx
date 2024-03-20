const Tooltip = ({ children }) => {
  return (
    <div className="absolute inset-y-0 left-12 hidden group-hover:flex items-center">
      <div className="whitespace-nowrap relative px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-sm text-gray-900">
        <div className="absolute inset-y-0 -left-1 flex items-center">
          <div className="w-2 h-2 rotate-45 bg-white"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
