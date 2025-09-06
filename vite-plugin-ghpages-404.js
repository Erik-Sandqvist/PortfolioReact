import { writeFileSync, copyFileSync } from "fs";
import { resolve } from "path";

export default function ghPages404() {
  return {
    name: "vite-plugin-ghpages-404",
    closeBundle() {
      const distPath = resolve(process.cwd(), "dist");
      const indexHtml = resolve(distPath, "index.html");
      const notFoundHtml = resolve(distPath, "404.html");

      // Kopiera index.html till 404.html
      copyFileSync(indexHtml, notFoundHtml);

      // Lägg till en liten script för redirect
      const content = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      var redirect = window.location.protocol + '//' + window.location.host + '/PortfolioReact/';
      var pathname = window.location.pathname.replace('/PortfolioReact', '');
      window.location.replace(redirect + '#' + pathname);
    </script>
  </head>
  <body></body>
</html>
      `;
      writeFileSync(notFoundHtml, content, "utf-8");
    },
  };
}
