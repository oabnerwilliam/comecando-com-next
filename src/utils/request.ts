export const request = async <T>(url: string): Promise<T> => {
  const res = await fetch(`/api/${url}`)
  return await res.json()
}
