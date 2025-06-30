import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import path from 'path'

const withVanillaExtract = createVanillaExtractPlugin()

// homework에 있는 .env 파일을 로드합니다.
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env')
})

const nextConfig = {}

export default withVanillaExtract(nextConfig)
