import { Octokit } from '@octokit/rest'

export const githubClient = new Octokit({
  auth: process.env.GITHUB_PAT
})

export const GITHUB_REPO_CONFIG = {
  owner: process.env.GITHUB_OWNER || '',
  repo: process.env.GITHUB_REPO || ''
} as const

// 디버깅용 콘솔입니다.
if (process.env.NODE_ENV === 'development') {
  console.log('깃허브 환경변수를 확인합니다!')
  console.log('토큰 유무 : ', !!process.env.GITHUB_PAT)
  console.log('Owner : ', process.env.GITHUB_OWNER)
  console.log('Repo : ', process.env.GITHUB_REPO)
  console.log('Config : ', GITHUB_REPO_CONFIG)
}
