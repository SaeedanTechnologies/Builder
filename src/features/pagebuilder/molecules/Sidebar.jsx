import { Tooltip } from "@/components";
import {
  IconReact,
  IconPlusSquare,
  IconSearch,
  IconSettings,
  IconCategory,
  IconTags,
} from "@/icons";

const Sidebar = () => {
  return (
    <aside className="h-screen w-18 flex flex-col items-center border-r border-gray-200 bg-white pb-10">
      <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
        <IconReact />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <a
          className="relative group rounded-xl p-2 text-blue-600 hover:bg-gray-100"
          href="#"
        >
          <IconPlusSquare className="h-6 w-6 stroke-current" />
          <Tooltip>
            Add elements<span className="text-gray-400">(A)</span>
          </Tooltip>
        </a>
        <a
          className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <IconSettings className="h-6 w-6 stroke-current" />
          <Tooltip>
            Settings<span className="text-gray-400">(S)</span>
          </Tooltip>
        </a>
        <a
          className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <IconSearch className="h-6 w-6 stroke-current" />
          <Tooltip>
            SEO<span className="text-gray-400">(S)</span>
          </Tooltip>
        </a>
        <a
          className="relative group rounded-xl  p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <IconCategory className="h-6 w-6 stroke-current" />
          <Tooltip>
            Categories<span className="text-gray-400">(C)</span>
          </Tooltip>
        </a>
        <a
          className="relative group rounded-xl  p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <IconTags className="h-6 w-6 stroke-current" />
          <Tooltip>
            Tags<span className="text-gray-400">(T)</span>
          </Tooltip>
        </a>
      </nav>
      <div>
        <button className="overflow-hidden rounded-full">
          <img
            className="h-10 w-10 object-cover"
            src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg"
            alt="admin"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
