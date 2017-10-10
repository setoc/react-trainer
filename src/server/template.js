// src/template.js

export default ({ body, title, initialState }) => {
    return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset="UTF-8" />
        <script>window.__APP_INITIAL_STATE__=${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/js/vendor.bundle.js"></script>
      <script src="/js/app.bundle.js"></script>
    </html>
  `;
};