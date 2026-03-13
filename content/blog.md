# Blog Content Guide

## How to Add a New Blog Post

1. Open `/src/pages/BlogList.jsx`
2. Add your post to the `allPosts` array at the top of the file:

```js
{
  slug: 'my-new-post-slug',           // URL: /blog/my-new-post-slug
  title: 'Your Post Title Here',
  description: 'Short description for the blog list page...',
  tag: 'GTM',                          // Category badge
  date: 'Jan 1, 2025',
  readTime: '8 min',
  accent: '#00e5a0',                   // Badge color (use: #00e5a0, #f0ff4b, or #7fffd4)
  featured: false,                     // Set true for ONE featured post only
}
```

3. Open `/src/pages/BlogPost.jsx`
4. Add your full post content to the `posts` object:

```js
'my-new-post-slug': {
  title: 'Your Post Title Here',
  tag: 'GTM',
  date: 'January 1, 2025',
  readTime: '8 min',
  accent: '#00e5a0',
  content: `
## Your First Heading

Your content here. Use markdown:
- **Bold text** 
- *Italic text*
- \`code\`

## Another Section

More content...
  `,
}
```

## Markdown Supported in Posts

- `## Heading 2` → `<h2>`
- `### Heading 3` → `<h3>`  
- `**bold**` → `<strong>`
- `*italic*` → `<em>`
- `` `code` `` → `<code>`
- `- list item` → `<ul><li>`
