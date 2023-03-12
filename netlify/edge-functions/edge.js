export default async (request, context) => {
  request.headers.set("X-BW-Custom-Header", "Your custom header value");
};
