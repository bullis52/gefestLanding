export async function getServerSideProps({ res }) {
  const sitemap = `User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://gefeststroi.com/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function RobotsTxt() {
  return null;
}
