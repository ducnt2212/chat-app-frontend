import { api } from "@/lib/api";

type LoginResponse = {
  token: string;
};

export async function register(
  username: string,
  email: string,
  password: string,
): Promise<void> {
  await api("/auth/register", {
    method: "POST",
    body: { username, email, password },
  });
}

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}
