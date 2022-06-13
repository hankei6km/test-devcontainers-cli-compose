import fetch from 'node-fetch'

export async function echo(text: string): Promise<string> {
  const q = new URLSearchParams()
  q.append('q', text)
  const res = await fetch(`http://httpbin/get?${q.toString()}`)
  const data = await res.json()

  if (data && typeof data === 'object') {
    return (data as any).args?.q || ''
  }
  return ''
}
