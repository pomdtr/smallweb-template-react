import {E} from "jsr:@nfnitloop/deno-embedder@1.4.5/embed.ts"

export default E({
  "assets/index-DVoHNO1Y.js": () => import("./assets/_index-DVoHNO1Y.js.ts"),
  "assets/index-DiwrgTda.css": () => import("./assets/_index-DiwrgTda.css.ts"),
  "assets/react-CHdo91hT.svg": () => import("./assets/_react-CHdo91hT.svg.ts"),
  "index.html": () => import("./_index.html.ts"),
  "vite.svg": () => import("./_vite.svg.ts"),
})
