import RoomList, { type RoomListProps } from "@/components/chat/RoomList";

export default function RoomListPanel({
  rooms,
  loading,
  error,
}: RoomListProps) {
  return (
    <section className="flex w-44 shrink-0 flex-col border-r border-[#c2c6d6] bg-white">
      <div className="border-b border-[#c2c6d6] px-4 py-3">
        <h2 className="text-sm font-semibold text-[#424754]">Rooms</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <RoomList rooms={rooms} loading={loading} error={error} />
      </div>
    </section>
  );
}
