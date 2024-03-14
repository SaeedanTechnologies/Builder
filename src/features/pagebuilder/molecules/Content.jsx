import { IconBxsPencil } from "@/icons";
const Content = () => {
  return (
    <main className="flex-1  h-screen overflow-y-scroll pb-20">
      <div className=" bg-white">
        <section className="py-10 px-12">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 hidden border-2 border-blue-600 group-focus-within:block">
              <div className="absolute -translate-y-full pl-2">
                <div className="flex items-center gap-x-2 rounded-t-lg bg-blue-600 px-3 py-1 text-white">
                  <span>H1-hero title</span>
                  <IconBxsPencil className="h-4 w-4 fill-current" />
                </div>
              </div>
              <div className="absolute left-0 top-0 -translate-y-full h-2 w-2 -translate-x-full border-2 border-blue-600"></div>
              <div className="absolute right-0 top-0 -translate-y-full h-2 w-2 translate-x-full border-2 border-blue-600"></div>
              <div className="absolute left-0 bottom-0 translate-y-full h-2 w-2 -translate-x-full border-2 border-blue-600"></div>
              <div className="absolute right-0 bottom-0 translate-y-full h-2 w-2 translate-x-full border-2 border-blue-600"></div>
            </div>
            <h1
              className="max-w-3xl text-5xl font-bold leading-[1.4] outline-none"
              contentEditable
            >
              We create digital products for business and user goals.
            </h1>
          </div>
          <p className="mt-4 text-lg leading-loose text-gray-400">
            Help find solutions with UI/UX designs that are intuitive and in
            accordance with client business goals. We provide a high quality
            service in UI / UX Design & Development.
          </p>
          <div className="flex items-center gap-4 pt-8">
            <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
              Let's work together
            </button>
            <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
              Check our work
            </button>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
              Let's work together
            </button>
            <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
              Check our work
            </button>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
              Let's work together
            </button>
            <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
              Check our work
            </button>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
              Let's work together
            </button>
            <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
              Check our work
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Content;
