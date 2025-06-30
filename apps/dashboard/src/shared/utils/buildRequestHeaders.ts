export function buildRequestHeaders(
  requestHeaders: Headers,
  options: {
    contentType?: string
    authorization?: string
  } = {}
): Record<string, string> {
  const headers: Record<string, string> = {}

  requestHeaders.forEach((value, key) => {
    if (!key.toLowerCase().startsWith('host') && !key.toLowerCase().startsWith('content-length')) {
      headers[key] = value
    }
  })

  if (options.contentType) {
    headers['Content-Type'] = options.contentType
  }

  if (options.authorization) {
    headers['Authorization'] = options.authorization
  }

  return headers
}
