"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ChatArea from "@/components/chat/ChatArea";
import RoomListPanel from "@/components/chat/RoomListPanel";
import Sidebar from "@/components/layout/Sidebar";
import { ApiError } from "@/lib/api-error";
import { getRooms, type Room } from "@/services/rooms";

export default function ChatPage() {
  const router = useRouter();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
    }
  }, [router]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return;
    }

    async function loadRooms() {
      setLoading(true);
      setError(null);

      try {
        const data = await getRooms();
        setRooms(data.rooms ?? []);
      } catch (err) {
        setError(
          err instanceof ApiError ? err.getMessage() : "Failed to load rooms.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadRooms();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <RoomListPanel rooms={rooms} loading={loading} error={error} />
      <ChatArea />
    </div>
  );
}
