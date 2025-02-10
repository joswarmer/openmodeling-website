# Freon Documentation

This project contains the sources for the openModeling.nl.
It uses SvelteKit. 

## Developing

During development, you can use the following commands.

```bash
# Install dependencies
npm install

# create the website from the Markdown content
npm run buildSite

# create the website and serve it on localhost:3000
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Creating a documentation website

Create the website and browse through it.

```bash
# Install dependencies
npm install

# create the website from the Markdown content
npm run buildSite

# create the website in the directory 'docs'
npm run build

# preview the website
npm run preview
```

> Note: sometimes you need to set the line separators to CRLF - Windows to get the embedded code
> correctly into the pages.

During development the latter two commands can be exchanged by the following command. 

```bash
# build and serve the website
npm run dev
```

> Note: preview should *not* be used to serve your website in production.
