### Getting started

Run the following command on your local environment:

```shell
yarn
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/config/global.scss`: your SCSS file global
- `src/config/appSEOConfig.ts`: configuration SEO

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.


### Convention:
- Component: UpperCase
- pages: snake-case
- function and almost: camelCase


### Notes for workflow:
- Accept comment for code-text
- All page/components must have below, for all page translated
```shell
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      // Will be passed to the page component as props
    },
  };
};
```

- or
```shell
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const pokemons: any = await getPokemons();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      fallback: {
        [unstable_serialize(['api', 'pokemons'])]: pokemons,
      },
    },
  };
};
```
- or for dynamic page, need to map locale
```shell
export async function getStaticPaths({ locales }: any) {
  const data = await getPokemons();
  const ids = data.map((post: any) => post.id);
  const paths = ids
    .map((id: any) =>
      locales.map((locale: any) => ({
        params: { pid: id.toString() }, // `params` pid will be [pid]
        locale, // locale should not be inside `params`
      }))
    )
    .flat(); // to avoid nested arrays

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ locale, ...rest }) => {
  const pokemonDetail: any = await axiosClient.get(
    `/photos/${rest.params?.pid}`
  );
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      pokemonDetail: pokemonDetail.data,
      fallback: {
        // unstable_serialize() array style key
        [unstable_serialize(['api', 'pokemons', rest.params?.pid])]:
          pokemonDetail.data,
      },
    },
  };
};
```


- All components inside page will write in /modules/folder-page-name
- All GENERAL or SHARED components will write in /components folder
- For Image outside, pass url to `remotePatterns` in `next.config.js`. 
- For Image Component: Limit use `fill` props because of it can't responsive. Use this:
```shell
<div style={{ position: 'relative', width: '300px' }}>
   <Image
     src="https://nxas.nexon.com/images/background/pc-background-07.png"
     alt="testPic"
     width={1280} // This will be resolution of image. Suggest: 1280x720 (HD)
     height={720} // This will be resolution of image. Suggest: 1280x720 (HD)
     style={{
       width: '100%',
       height: 'auto',
       objectFit: 'cover',
      }} // Treat image span full parent div width
    />
</div>
```
 
### Commit Message Format
```shell
yarn commit
```

### Deploy to production
```shell
$ yarn build
$ yarn start
```

### Git workflow:
#### Before coding: 
  - Go to Jira and create task to get Task Code
  - Checkout new branch base on Task Code
#### Before commit:
  - Check and change/update: `git status`
  - If has any, stash your code `git stash` and pull new change `git pull`
  - After pull, `git stash list` to show list stash. And choose stash {id}
  - (*Need Carefully) Check that stash have conflict with our local code `git stash show -p stash@{id}`. 
  - Then pick stash {id} `git stash apply stash@{id}` or `git stash pop` to get and clean up newest stash
  - Resolve conflict if have, then add `git add .`
  - After add, run `yarn commit` to start `cz`. Remember, subject will be the Jira Task Code


---
---
### Done Note
---
---



### Features
Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
yarn build-prod
```

All generated files are located at `out` folder, which you can deploy with any hosting service.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

