import { Lock } from "lucide-react";

import type { Room } from "@/services/rooms";

export type RoomListProps = {
  rooms: Room[];
  loading: boolean;
  error: string | null;
};

export default function RoomList({ rooms, loading, error }: RoomListProps) {
  if (loading) {
    return <RoomListMessage>Loading rooms...</RoomListMessage>;
  }

  if (error) {
    return <RoomListMessage variant="error">{error}</RoomListMessage>;
  }

  if (rooms.length === 0) {
    return <RoomListMessage>No rooms yet</RoomListMessage>;
  }

  return (
    <>
      {rooms.map((room) => (
        <RoomListItem key={room.id} room={room} />
      ))}
    </>
  );
}

function RoomListMessage({
  children,
  variant = "muted",
}: {
  children: React.ReactNode;
  variant?: "muted" | "error";
}) {
  return (
    <p
      className={`px-2 py-3 text-sm ${
        variant === "error" ? "text-red-600" : "text-[#424754]"
      }`}
    >
      {children}
    </p>
  );
}

function RoomListItem({ room }: { room: Room }) {
  return (
    <div className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#424754] hover:bg-[#e8e8e8]">
      {room.is_private && <Lock className="size-3.5 shrink-0 text-[#424754]" />}
      <span className="truncate font-medium">{room.name}</span>
    </div>
  );
}
