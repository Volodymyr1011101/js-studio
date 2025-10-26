const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://www.studio-js.pl';

const staticUrls = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/privacy'
];

const dynamicUrls = [];

const links = [...staticUrls, ...dynamicUrls].map(url => ({
  url: url,
  changefreq: 'weekly',
  priority: url === '/' ? 1.0 : 0.8,
  lastmod: new Date().toISOString()
}));

async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname });

    links.forEach(link => stream.write(link));

    stream.end();

    const xml = await streamToPromise(stream);

    let outputDir = path.join(__dirname, 'dist', 'js-studio', 'browser');

    if (!fs.existsSync(outputDir)) {
      const defaultOutput = path.join(__dirname, 'dist', 'browser');
      if (fs.existsSync(defaultOutput)) {
        outputDir = defaultOutput;
      } else {
        console.error('Не вдалося знайти папку збірки. Перевірте шляхи.');
        return;
      }
    }

    fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), xml.toString());

    console.log(`✅ sitemap.xml успішно згенеровано і збережено у ${outputDir}`);

  } catch (error) {
    console.error('Помилка генерації sitemap:', error);
  }
}

generateSitemap();
