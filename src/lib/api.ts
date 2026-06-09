import { ApiError, type ApiErrorBody } from "@/lib/api-error";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

type ApiOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export async function api<T>(
  path: string,
  options: ApiOptions = {},
): Promise<T> {
  const { headers, body, ...rest } = options;

  const response = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as T & ApiErrorBody;

  if (!response.ok) {
    throw new ApiError(response.status, {
      error: data.error,
      errors: data.errors,
    });
  }

  return data;
}
