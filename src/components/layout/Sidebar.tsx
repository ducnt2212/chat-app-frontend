import { Home, MessageSquare, Settings, UserRound } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: false },
  { icon: MessageSquare, label: "Messages", active: true },
  { icon: UserRound, label: "Contacts", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-20 shrink-0 flex-col items-center border-r border-[#c2c6d6] bg-white py-6">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-1 flex size-12 items-center justify-center rounded-xl bg-[#2170e4] text-white">
          <MessageSquare className="size-6 fill-current" />
        </div>
        <span className="text-lg font-bold text-primary">M</span>
      </div>

      <nav className="flex w-full flex-1 flex-col gap-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`mx-2 flex cursor-pointer flex-col items-center justify-center rounded-xl py-3 transition-colors ${
              active
                ? "bg-[#2170e4] text-white"
                : "text-[#424754] hover:bg-[#e8e8e8]"
            }`}
          >
            <Icon className="size-5" />
            <span className="mt-1 text-[10px] font-medium">{label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto flex size-10 items-center justify-center rounded-full bg-[#e0e3e5] text-sm font-semibold text-[#424754]">
        U
      </div>
    </aside>
  );
}
