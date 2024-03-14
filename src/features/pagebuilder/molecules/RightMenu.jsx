import { Accordion } from "@/components";
import {
  IconUser,
  IconDesktop,
  IconBxsChevronDown,
  IconLayoutAlignTop,
  IconLayoutAlignRight,
  IconLayoutAlignMiddle,
  IconLayoutAlignLeft,
  IconLayoutAlignCenter,
  IconLayoutAlignBottom,
  IconEye,
} from "@/icons";

const RightMenu = () => {
  return (
    <aside className="w-[300px] flex flex-col bg-white border-l border-gray-200">
      <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6 py-4">
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
          <IconUser className="h-5 w-5 stroke-current text-gray-400" />
          <span className="text-sm font-semibold leading-6"> Invite</span>
        </button>
        <button className="flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
          Publish
        </button>
      </div>
      <div className="flex flex-1 flex-col pb-20">
        <div className="h-screen overflow-y-scroll pb-20">
          <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6 ">
            <span className="text-sm font-semibold">Selector</span>
            <span className="text-sm text-gray-400 ">
              Inheriting{" "}
              <span className="font-medium text-gray-900">2 selectors</span>
            </span>
          </div>
          <div className="border-b border-gray-200 px-6 py-4">
            <button className="flex w-full items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 justify-between">
              <div className="flex items-center gap-x-2">
                <span className="rounded-lg bg-white p-1 shadow">
                  <IconDesktop className="h-5 w-5 stroke-current text-blue-600" />
                </span>
                <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600">
                  H1-hero title
                </span>
              </div>
              <IconBxsChevronDown className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <div className="mt-2 text-sm text-gray-400">
              1 on this page,7 on other page
            </div>
          </div>
          <Accordion title="layout">
            <div className="flex items-center justify-between">
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <IconLayoutAlignBottom className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <IconLayoutAlignCenter className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <IconLayoutAlignLeft className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <IconLayoutAlignRight className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <IconLayoutAlignTop className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <IconLayoutAlignMiddle className="h-5 w-5 stroke-current text-gray-400" />
              </button>
            </div>
          </Accordion>
          <Accordion title="spacing">
            <div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
              <span className="absolute top-2 left-2 text-[10px] uppercase text-gray-400">
                margin
              </span>
              <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
                padding
              </span>
              <div className="relative w-full">
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center justify-center gap-2">
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={20}
                    type="text"
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={0}
                    type="text"
                  />
                </div>
                <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center justify-center gap-2">
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={0}
                    type="text"
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={20}
                    type="text"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center justify-center gap-2">
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={0}
                    type="text"
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={20}
                    type="text"
                  />
                </div>
                <div className="absolute inset-y-0 left-0 flex -translate-x-1/2  items-center justify-center gap-2">
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={20}
                    type="text"
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    className="h-4 w-4 text-sm outline-none"
                    defaultValue={0}
                    type="text"
                  />
                </div>
                <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                  <div className="h-full w-full rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="size">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="pointer-event-none absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm text-gray-400">W</span>
                </div>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue={"Auto"}
                />
              </div>
              <div className="relative">
                <div className="pointer-event-none absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm text-gray-400">H</span>
                </div>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue={"Auto"}
                />
              </div>
              <div className="relative">
                <div className="pointer-event-none absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm text-gray-400">Min W</span>
                </div>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue={"Auto"}
                />
              </div>
              <div className="relative">
                <div className="pointer-event-none absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm text-gray-400">Max W</span>
                </div>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue={"Auto"}
                />
              </div>
              <div className="relative">
                <div className="pointer-event-none absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm text-gray-400">Min H</span>
                </div>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue={"Auto"}
                />
              </div>
              <div className="relative">
                <div className="pointer-event-none absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm text-gray-400">Max H</span>
                </div>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue={"Auto"}
                />
              </div>
              <div className="col-span-2">
                <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Overflow</span>
                  </div>

                  <span className="flex items-center justify-end gap-x-2 text-sm">
                    <IconEye className="h-5 w-5 stroke-current text-gray-400" />
                    <span>Invisible</span>
                  </span>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 leading-6">
                    <IconBxsChevronDown className="h-5 w-5 stroke-current text-gray-400" />
                  </div>
                </button>
              </div>
            </div>
          </Accordion>
          <Accordion title="typography"></Accordion>
          <Accordion title="Position"></Accordion>
          <Accordion title="Border"></Accordion>
          <Accordion title="Background"></Accordion>
        </div>
      </div>
    </aside>
  );
};

export default RightMenu;
