const { promises: fs, statSync } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'lucifer0x17',
    site_url: 'https://lucifer0x17.dev',
    feed_url: 'https://lucifer0x17.dev/feed.xml',
  });

  const postsDirectory = path.join(__dirname, '..', 'pages', 'blogs');
  const allPosts = await readDirectory(postsDirectory);

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  allPosts.forEach((post) => {
    feed.item(post);
  });

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

async function readDirectory(directory) {
  let allPosts = [];
  const items = await fs.readdir(directory, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(directory, item.name);
    if (item.isDirectory()) {
      // If it's a directory, recursively read its contents
      allPosts = allPosts.concat(await readDirectory(fullPath));
    } else {
      // Only process files that don't start with 'index.'
      if (!item.name.startsWith('index.')) {
        const content = await fs.readFile(fullPath);
        const frontmatter = matter(content);

        allPosts.push({
          title: frontmatter.data.title,
          url: '/blogs/' + item.name.replace(/\.mdx?/, '').replace(/\\/g, '/'),
          date: frontmatter.data.date,
          description: frontmatter.data.description,
          categories: frontmatter.data.tag ? frontmatter.data.tag.split(', ') : [],
          author: frontmatter.data.author,
        });
      }
    }
  }

  return allPosts;
}

generate().catch(console.error);
