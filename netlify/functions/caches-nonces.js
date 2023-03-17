export default async (request, context) => {
  const url = new URL(request.url)

  if (url.searchParams.get("method") !== "set-response-header") {
    return context.next()
  }

	let valForHeader = 3138000

  console.log(`Adding a custom header to the response for ${url}`)

  const response = await context.next()
  response.headers.set("X-BW-test-header", valForHeader)
  return response
}
