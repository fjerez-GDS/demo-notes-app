import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";

export default function main(app: any) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack);
}