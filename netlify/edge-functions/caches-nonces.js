export default async (request, context) => {
	let valForHeader = 3138000
  const response = await context.next()
  response.headers.set("X-BW-Test-Header", valForHeader)
  return response
}
