export default {
  async fetch(request, env) {
    // Clone the request so we can modify it without affecting the original
    const requestClone = new Request(request);

    // Get the URL object
    const url = new URL(requestClone.url);

    // If path ends with / (except for the root), redirect to the path without trailing slash
    if (url.pathname !== '/' && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }

    try {
      // Attempt to fetch the asset from the static site
      let response = await env.ASSETS.fetch(requestClone);

      // If the requested page is not found, try to add .html extension
      if (response.status === 404 && !url.pathname.includes('.')) {
        const htmlUrl = new URL(requestClone.url);
        htmlUrl.pathname = `${htmlUrl.pathname}.html`;

        try {
          const htmlResponse = await env.ASSETS.fetch(
            new Request(htmlUrl.toString(), requestClone),
          );

          if (htmlResponse.status === 200) {
            return htmlResponse;
          }
        } catch {
          // Fall through to serving the original response
        }

        // If .html extension doesn't work, fall back to index.html
        const indexUrl = new URL(requestClone.url);
        if (!indexUrl.pathname.endsWith('/')) {
          indexUrl.pathname = `${indexUrl.pathname}/`;
        }
        indexUrl.pathname = `${indexUrl.pathname}index.html`;

        try {
          const indexResponse = await env.ASSETS.fetch(
            new Request(indexUrl.toString(), requestClone),
          );

          if (indexResponse.status === 200) {
            return indexResponse;
          }
        } catch {
          // Fall through to serving the original response
        }
      }

      return response;
    } catch (e) {
      // If something goes wrong with the ASSETS fetch, fall back to standard behavior
      return new Response(`Error fetching asset: ${e.message}`, {
        status: 500,
      });
    }
  },
};
