export interface Ioption {
  title: string;
  favicon: string;
  specUrl: string;
  nonce?: string;
  redocOptions?: object;
}

const html = `<!DOCTYPE html>
<html>
  <head>
    <title>[[title]]</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="[[favicon]]">
    <style>
      body {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="redoc-container"></div>
    <script nonce='[[nonce]]' src="https://unpkg.com/redoc@latest/bundles/redoc.standalone.js"> </script>
  </body>
  <script>
    Redoc.init(
      "[[spec-url]]",
      [[options]],
      document.getElementById("redoc-container")
    );
  </script>
</html>`;

function redocHtml(
  options: Ioption = {
    title: 'ReDoc',
    favicon: '',
    specUrl: 'http://petstore.swagger.io/v2/swagger.json'
  }
): string {
  const { title, favicon, specUrl, nonce = '', redocOptions = {} } = options;
  return html
    .replace('[[title]]', title)
    .replace('[[favicon]]', favicon)
    .replace('[[spec-url]]', specUrl)
    .replace('[[nonce]]', nonce)
    .replace('[[options]]', JSON.stringify(redocOptions));
}

export { redocHtml };
export default redocHtml;
