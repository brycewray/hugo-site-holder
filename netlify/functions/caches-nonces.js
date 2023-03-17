export default async (request, context) => {
  request.headers.set("X-BW-test-header", valForHeader)
}
