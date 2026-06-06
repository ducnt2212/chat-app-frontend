import { Hash, MessageSquare, Settings, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-full w-64 flex shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-5">
        <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600">
          <MessageSquare className="size-5 text-white" />
        </div>
        <span className="text-lg font-semibold text-slate-900">Meet</span>
      </div>

      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
        <section>
          <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Rooms
          </h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white">
              <Hash className="size-4 shrink-0" />
              General
            </li>
            <li className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
              <Hash className="size-4 shrink-0 text-slate-400" />
              Random
            </li>
            <li className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
              <Hash className="size-4 shrink-0 text-slate-400" />
              Backend
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Direct Messages
          </h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
              <User className="size-4 shrink-0 text-slate-400" />
              Alice
            </li>
            <li className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
              <User className="size-4 shrink-0 text-slate-400" />
              Bob
            </li>
          </ul>
        </section>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
          <Settings className="size-4 shrink-0 text-slate-400" />
          Settings
        </div>
      </div>
    </aside>
  );
}
