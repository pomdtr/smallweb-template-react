# Smallweb React Template

![screenshot of the app running](./assets/screenshot.png)

## Usage

1. Install smallweb
1. Clone the repository in your smallweb folder

    ```sh
    git clone https://github.com/pomdtr/smallweb-react-template ~/www/smallweb-react-template
    ```

1. Go to <https://smallweb-react-template.localhost> and see your app running.

## Development

- Use `deno task install-frontend-deps` to install frontend dependencies.
- Use `deno task build` to build the frontend, then embed it in the app.

## Distribution

- Update the name field in the `deno.json` file.
- Run `deno publish` to publish your app to the JSR registry.

User will web able to install it this way:

```ts
// ~/www/<app>/main.ts
import { App } from "jsr:@<username>/<app>@<version>";

const app = new App({
    param1: "value1",
});

export default app;
```
