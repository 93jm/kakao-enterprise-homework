import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/api", "@repo/shared"],
};

export default withVanillaExtract(nextConfig);
