const URL = 'https://gefeststroi.com';

async function generateSitemap() {
  const internalRoutes = ['/'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const allRoutes = [...internalRoutes];

  return allRoutes;
}

export async function getServerSideProps({ res }) {
  const sitemapData = await generateSitemap();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapData
        .map(
          (item) =>
            `<url><loc>${item.url}</loc><lastmod>${item.lastModified}</lastmod></url>`,
        )
        .join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
