import { pages } from "./pages/index.ts";
import { sendJSX } from "./utils/sendJSX.ts";

export default Object.entries(pages).map(([pathname, component]) => ({
  pattern: new URLPattern({ pathname }),
  handler: () => sendJSX(component()),
}));
