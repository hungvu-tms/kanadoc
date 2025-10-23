/* eslint-disable @typescript-eslint/no-explicit-any */
export async function apiFetch<T = any>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl =
    process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "Missing API_BASE_URL or NEXT_PUBLIC_API_BASE_URL in environment variables"
    );
  }

  const url = `${baseUrl}${path}`;

  const res = await fetch(url, {
    cache: "force-cache",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
  await new Promise((r) => setTimeout(r, 1000));

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status} ${res.statusText} (${url})`);
  }

  return res.json() as Promise<T>;
}
