import {
  IconCardImage,
  IconCameraVideo,
  IconUpload,
  IconRectangleHorizontal,
  IconTable,
  IconListUl,
  IconPoll,
  IconCodeTags,
  IconGoogleAds,
  IconSoundcloud,
} from "@/icons";

const BlockElements = () => {
  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  return (
    <div className=" h-screen overflow-y-scroll bg-white border-box border-gray-200 border-r flex flex-col gap-5  px-5 pt-10 pb-32 w-[200px]">
      <span className="font-semibold">Add</span>

      <div className="w-full  flex flex-col gap-3">
        <span>Media</span>

        <div className="grid grid-cols-2 gap-4 cursor-pointer items-center justify-center">
          <div
            className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100"
            draggable
            onDragStart={(e) => handleOnDrag(e, <img src="" alt="" />)}
          >
            <IconCardImage className="h-5 w-5 stroke-current" />
            <img src="" alt="" />
            <span>Image</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconCameraVideo className="h-5 w-5 stroke-current" />
            <span>Video</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconUpload className="h-5 w-5 stroke-current" />
            <span>File</span>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col gap-3">
        <span>Elements</span>

        <div className="grid grid-cols-2 gap-4 cursor-pointer items-center justify-center">
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconRectangleHorizontal className="h-5 w-5 stroke-current" />
            <span>Text</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconRectangleHorizontal className="h-5 w-5 stroke-current" />
            <span>Button</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconTable className="h-5 w-5 stroke-current" />
            <span>Table</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconListUl className="h-5 w-5 stroke-current" />
            <span>List</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconPoll className="h-5 w-5 stroke-current" />
            <span>Poll</span>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col gap-3">
        <span> Web Elements</span>

        <div className="grid grid-cols-2 gap-4 cursor-pointer items-center justify-center">
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconCodeTags className="h-5 w-5 stroke-current" />
            <span>HTML</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconGoogleAds className="h-5 w-5 stroke-current" />
            <span>AdSense</span>
          </div>
          <div className="w-full border shadow text-xs border-gray-200 rouned-md flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:bg-gray-100">
            <IconSoundcloud className="h-5 w-5 stroke-current" />
            <span>Sound Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockElements;
