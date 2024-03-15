import { Element, ListItem } from "@/components";

const Content = () => {
  const handleOnDrop = (e) => {
    e.dataTransfer.getData("widgetType");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("Drag over");
  };

  return (
    <main className="flex-1  h-screen overflow-y-scroll pb-20">
      <div className=" bg-white">
        <section
          className="py-10 px-12"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          <Element titleClass={""} title={"H1-hero title"}>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.4] outline-none">
              We create digital products for business and user goals.
            </h1>
          </Element>

          <Element titleClass={"text-sm"} title={"Paragraph-Description"}>
            <p className="mt-4 text-md leading-loose text-gray-400  outline-none">
              Help find solutions with UI/UX designs that are intuitive and in
              accordance with client business goals. We provide a high quality
              service in UI / UX Design & Development.
            </p>
          </Element>

          <Element titleClass={"text-sm"} title={"List-hero"}>
            <ul className="mt-4 text-sm leading-loose text-gray-400  outline-none  list-disc flex flex-col gap-y-4">
              <ListItem>
                <li>Creola Katherine Johnson: mathematician.</li>
              </ListItem>
              <ListItem>
                <li>Creola Katherine Johnson: mathematician.</li>
              </ListItem>
              <ListItem>
                <li>Mario José Molina-Pasquel Henríquez: chemist.</li>
              </ListItem>

              <ListItem>
                <li>Mohammad Abdus Salam: physicist.</li>
              </ListItem>
            </ul>
          </Element>
        </section>
      </div>
    </main>
  );
};

export default Content;
