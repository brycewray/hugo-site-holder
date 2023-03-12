// changing from TS to JS
export default async (request) => {
	let response = await fetch(request)
	const html = (await response.text())
	let newHeaders = new Headers(response.headers)
	newHeaders.set("X-Test-Header", "It worked!")
  return new Response(html, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders
	})
}
