import { createApp } from "./app";
import { logInfo } from "./utils/logger";

const port = Number(process.env.API_PORT || 4000);
const app = createApp();

app.listen(port, () => {
  logInfo("API server listening", { port });
});
