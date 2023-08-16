export function addParam(url: URL, value: any, key: string) {
  if (value !== undefined) url.searchParams.set(key, String(value));
}
