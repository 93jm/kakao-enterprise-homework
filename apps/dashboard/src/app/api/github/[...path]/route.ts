import { NextRequest, NextResponse } from 'next/server'
import { githubClient, GITHUB_REPO_CONFIG } from '@/shared/lib/github/client'

export async function GET(req: NextRequest) {
  return handleProxy(req, 'GET')
}

export async function POST(req: NextRequest) {
  return handleProxy(req, 'POST')
}

export async function PUT(req: NextRequest) {
  return handleProxy(req, 'PUT')
}

export async function DELETE(req: NextRequest) {
  return handleProxy(req, 'DELETE')
}

export async function PATCH(req: NextRequest) {
  return handleProxy(req, 'PATCH')
}

const createGitHubHandlers = () => ({
  'GET:/api/github/issues': async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const per_page = parseInt(searchParams.get('per_page') || '10')
    const q = searchParams.get('q') || ''

    let query = `repo:${GITHUB_REPO_CONFIG.owner}/${GITHUB_REPO_CONFIG.repo} is:issue state:open`

    if (q) {
      query += ` in:title ${q}`
    }

    const response = await githubClient.rest.search.issuesAndPullRequests({
      q: query,
      page,
      per_page,
      sort: 'created',
      order: 'desc'
    })

    return {
      items: response.data.items,
      total_count: response.data.total_count,
      incomplete_results: response.data.incomplete_results
    }
  },

  'POST:/api/github/issues': async (req: NextRequest) => {
    const body = await req.json()
    const { title, body: issueBody, labels } = body

    const response = await githubClient.rest.issues.create({
      ...GITHUB_REPO_CONFIG,
      title,
      body: issueBody,
      labels
    })

    return response.data
  },

  'GET:/api/github/issues/[number]': async (req: NextRequest, pathParams: Record<string, string>) => {
    const issueNumber = parseInt(pathParams.number)

    const response = await githubClient.rest.issues.get({
      ...GITHUB_REPO_CONFIG,
      issue_number: issueNumber
    })

    return response.data
  },

  'PATCH:/api/github/issues/[number]': async (req: NextRequest, pathParams: Record<string, string>) => {
    const issueNumber = parseInt(pathParams.number)
    const body = await req.json()

    const response = await githubClient.rest.issues.update({
      ...GITHUB_REPO_CONFIG,
      issue_number: issueNumber,
      ...body
    })

    return response.data
  }
})

function matchRoute(method: string, path: string, handlers: ReturnType<typeof createGitHubHandlers>) {
  const routeKey = `${method}:${path}`

  if (handlers[routeKey as keyof typeof handlers]) {
    return {
      handler: handlers[routeKey as keyof typeof handlers]
    }
  }

  for (const [key, handler] of Object.entries(handlers)) {
    const [keyMethod, keyPath] = key.split(':')
    if (keyMethod !== method) {
      continue
    }

    const keySegments = keyPath.split('/')
    const pathSegments = path.split('/')

    if (keySegments.length !== pathSegments.length) {
      continue
    }

    const params: Record<string, string> = {}
    let isMatch = true

    for (let i = 0; i < keySegments.length; i++) {
      const keySegment = keySegments[i]
      const pathSegment = pathSegments[i]

      if (keySegment.startsWith('[') && keySegment.endsWith(']')) {
        const paramName = keySegment.slice(1, -1)
        params[paramName] = pathSegment
      } else if (keySegment !== pathSegment) {
        isMatch = false
        break
      }
    }

    if (isMatch) {
      return { handler, params }
    }
  }

  return {}
}

async function handleProxy(req: NextRequest, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH') {
  try {
    const url = req.nextUrl.pathname

    if (!url.startsWith('/api/github/')) {
      return new NextResponse(JSON.stringify({ error: 'Invalid GitHub API path' }), { status: 404 })
    }

    const githubHandlers = createGitHubHandlers()
    const { handler, params } = matchRoute(method, url, githubHandlers)

    if (!handler) {
      return new NextResponse(
        JSON.stringify({
          error: 'GitHub API endpoint not found',
          path: url,
          method
        }),
        { status: 404 }
      )
    }

    const result = await handler(req, params || {})

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error: any) {
    console.error('GitHub API Proxy Error:', error)

    if (error.status) {
      return new NextResponse(
        JSON.stringify({
          error: error.message || 'GitHub API Error',
          status: error.status,
          path: req.nextUrl.pathname
        }),
        { status: error.status }
      )
    }

    return new NextResponse(
      JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        path: req.nextUrl.pathname
      }),
      { status: 500 }
    )
  }
}
