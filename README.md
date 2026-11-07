# Personal website

Jekyll site hosted on GitHub Pages. The homepage content is in `index.md`, the layout is in `_layouts/default.html`, and the design is in `assets/css/site.css`.

The publication search in `assets/js/site.js` enhances the full bibliography. All publications remain available without JavaScript. Fonts are hosted locally with their licenses in `assets/fonts/`.

Career history for the clickable calendar is in `_data/career.yml`. The small project illustrations are SVGs in `assets/projects/`.

## Local preview

With Ruby and Bundler installed:

```sh
# On macOS with Homebrew Ruby:
export PATH="$(brew --prefix ruby)/bin:$PATH"
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --force_polling
```

Open <http://127.0.0.1:4000/>. Jekyll rebuilds the page when you save changes. Restart the server after changing `_config.yml`.

To build without starting the server:

```sh
bundle exec jekyll build
```

Generated files go in `_site/` and are ignored by Git.

## Writing

Add posts to `_posts/YYYY-MM-DD-short-title.md` with this front matter:

```yaml
---
title: "Your post title"
description: "A short introduction for the writing index and sharing previews."
---
```

Write the article below the front matter in Markdown. The post layout, author, publication date, `/blog/short-title/` URL, writing index, homepage previews, and RSS feed are handled automatically. The homepage Writing section and navigation link appear with the first published post.

For unpublished work, use `_drafts/short-title.md` with the same front matter and preview with `bundle exec jekyll serve --drafts --force_polling`. Drafts stay out of the published site.
