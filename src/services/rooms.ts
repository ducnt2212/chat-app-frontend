import { api } from "@/lib/api";

export type Room = {
  id: number;
  name: string;
  is_private: boolean;
  created_by: number;
  created_at: string;
};

type ListRoomsResponse = {
  rooms: Room[];
};

export async function getRooms(): Promise<ListRoomsResponse> {
  return api<ListRoomsResponse>("/rooms");
}
