import { IconReact,IconPlusSquare } from "@/icons"

const Sidebar = () => {
  return (
    
        <aside className="h-screen w-18 flex flex-col items-center border-r border-gray-200 bg-white">
            <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
                <IconReact/>
            </div>
            <nav className="flex flex-1 flex-col gap-y-4 pt-10">
                <a className="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50" href="#">
                <IconPlusSquare className="h-6 w-6 stroke-current"/>
                </a>
            </nav>
        </aside>
  )
}

export default Sidebar