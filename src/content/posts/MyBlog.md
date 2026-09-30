---
title: 'How to Create This Blog'
description: 'There was a need for a public place to put Projects, Thoughts and Ideas in a structured and finished form.'
pubDate: '2026-09-03'
tags: []
type: 'project'
---

### Motivation
The idea for this project came up after reading "Show your Work." The thought to have some public place to put my projects really resonated with me. I think many creative people have the problem of having too many loose ends of unfinished projects. We tend to think that this will be finished at some point in life. But lets be honest that point rarely arises and also there are so many other interesting ideas and sidequests to follow! 

My approach in general to handle this is to give some sort of structure to clearly define periods in time where I can let processes just flow. And then the structure catches that fowing creativity and puts the things into a solid form. Part of that self control framework is this blog. Here I am forced to put things that are finished to some extend. Maybe its only a chapter of a bigger picture but at least that little part got its form. 

### Intro 
With my background in Data- and Computer Science I understand enough from tech to have an conceptual understanding how things work. Tragically this is not enough to really understand from scratch how all that Web-Dev things are done. So here we are, enough understanding to have a rough idea but not enough to fully grasp it. Thats the intersection where real curiosity arises. A product of that mechanism is this Website. A project for itself to understand how websites are built by hand. 

#### Just to let you know
At this point you probably understood that I am not a Web Developer. So this is a learning documentation of the process how a personal blog can be created using the Astro Framework. This is pretty much the result of Richard Fynemans quote: 

> “If you can't explain something to a first year student, then you haven't really understood.” 

### The Astro Framework
Why Astro in the first place? 

Because I saw some dude on youtube using it. 

In the process of building with Astro I understood why its actually a really good choice if you build this kind of static website. 

Another proof that you should just go for it. You dont learn riding a bike by conceptually comparing a Mountainbike with a Roadbike. You have to grab one and try to ride it. And sometimes you also need some instruction from a child half your age on youtube that spawned from the whomb running on Arch Linux.

So what is the Astro Framework? 

It’s a JavaScript-based web framework which especially excels on content-focused websites because it can pre-render content at build time, serve it as static HTML, and only ship JavaScript to the browser where it’s actually needed.

### How to Astro Project setup 

The following command will run the installation wizard.

```bash
npm create astro@latest my-blog
```

After running that we are asked a bunch of questions. Like:

Where should we create your new project?
- Select your desired location. 

How would you like to start your new project? 
- Use the Blog template which gives some basic structure out of the box

Install dependencies?
- Oui 

Do you plan to use TypeScript?
- Yes 

How strict should it be? 
- Strict 

After initializing the git Repo you are ready to have a look at your created project in your IDE of choice. 

### The typical project structure you will get from the template

```text
my-blog/
├── public/            → static files, served unchanged
│   └── fonts/
├── src/               → everything Astro processes
│   ├── components/
│   ├── content/posts/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
``` 

### Folders

- `public/`: Files copied to the site as they are, such as the favicon, images and `robots.txt`.
- `public/fonts/`: Self-hosted font files, loaded in CSS with `@font-face`.
- `src/`: Your actual source code, which Astro compiles and optimizes.
- `components/`: Reusable UI pieces like `Header.astro`. You build them once and use them anywhere.
- `content/posts/`: Your blog posts as Markdown files, each starting with frontmatter (title, date, description). Astro checks that every post has the required fields.
- `layouts/`: Page templates (the HTML skeleton, header and footer) that wrap your pages and posts, so you don't repeat that code.
- `pages/`: Each file becomes a URL. `index.astro` → `/`, `about.astro` → `/about`, and `blog/[slug].astro` creates one page per post.
- `styles/`: Global CSS for colors, fonts and base styles. Styles for a single component go inside that component.

### Config files

- `astro.config.mjs`: Astro settings: your site URL and integrations like MDX or the sitemap.
- `package.json`: Dependencies and commands: `npm run dev` (local server) and `npm run build` (build the site).
- `tsconfig.json`: TypeScript settings. These give your editor autocomplete and error checking.
- `README.md`: Notes about the project. It isn't part of the website.

### In short:
1. You write a post in `content/posts/`.
2. A page in `pages/` loads it from the collection.
3. The page wraps it in a layout from `layouts/`.
4. The layout pulls in `components/` and `styles/`.
5. `public/` assets are served as they are.
6. `npm run build` outputs a static site to `dist/`.

### Fun part - An example of how I developed further based on the template

What I did first was add the Tailwind CSS extension for a more convenient way to style the website.

After that, I thought about the pages I wanted to provide. I mainly want to write in a blog-style manner, where I distinguish between articles that are thoughts, ideas, or book summaries/resources that I want to put down on paper (or screen). The other category is Projects. Projects are the building blocks for a portfolio to show what I have built and done, with more character than just throwing a random Git repo at someone.

The landing page combines these two with the most recent posts and some personal touches.

I was also inspired by blas.com, who has read and summarized pretty much every book on his page. I don't read as much, but I want to see it as motivation to summarize at least the most impactful books I have read so far. These are listed on a separate page where you see only the covers, which are clickable to get to the summary article if available. The covers are pulled from the "Open Library Covers API."

### How to deploy a Website? 

To deploy the website for free, I recommend using the service of Vercel. You simply connected your Git repository to Vercel. After signing in with the GitHub account, you selected the repository and let Vercel detect the project settings automatically. With just a few clicks, the website is built and deployed, and Vercel also provides a public URL where it can be accessed. From then on, every time someone pushes changes to the repository, Vercel automatically builds and deploys the updated version.

--- 



