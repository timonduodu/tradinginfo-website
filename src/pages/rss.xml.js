import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const now = new Date();
  const posts = (await getCollection('blog'))
    .filter(post => post.data.pubDate <= now);
  return rss({
    title: 'TradingWissen.ch',
    description: 'Trading-Information für Schweizer Trader',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
