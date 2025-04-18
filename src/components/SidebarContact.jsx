import { SearchIcon } from "../icons";

export default function SidebarContact() {
  return (
    <div
      className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2
		pt-4 px-2 max-xl:hidden"
    >
      <div className="flex justify-between text-gray-500">
        <span>Contact</span>
        <div className="flex gap-2">
          <SearchIcon className="w-6" />
          ...
        </div>
      </div>
      <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
        <div className="avatar items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://www.svgrepo.com/show/407389/scientist-medium-dark-skin-tone.svg" />
          </div>
        </div>
        Eren Yeager
      </button>
      <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
        <div className="avatar items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://www.svgrepo.com/show/420314/builder-helmet-worker.svg" />
          </div>
        </div>
        Mikasa Ackerman
      </button>
      <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
        <div className="avatar items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://www.svgrepo.com/show/327779/worker-builder-construction-hard-hat-jobsite-architecture-work.svg" />
          </div>
        </div>
        Armin Arlert
      </button>
      <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
        <div className="avatar items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://www.svgrepo.com/show/420364/avatar-male-man.svg" />
          </div>
        </div>
        Reiner Braun
      </button>
      <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
        <div className="avatar items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://www.svgrepo.com/show/420319/actor-chaplin-comedy.svg" />
          </div>
        </div>
        Annie Leonhart
      </button>
      <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
        <div className="avatar items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://www.svgrepo.com/show/420327/avatar-child-girl.svg" />
          </div>
        </div>
        Historia Reiss
      </button>
    </div>
  );
}
