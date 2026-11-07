# Personal website

Jekyll site hosted on GitHub Pages with the Hacker theme. The homepage content is in `index.md`.

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
