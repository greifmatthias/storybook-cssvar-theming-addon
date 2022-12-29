[![Release](https://github.com/greifmatthias/storybook-cssvar-theming-addon/actions/workflows/release.yml/badge.svg)](https://github.com/greifmatthias/storybook-cssvar-theming-addon/actions/workflows/release.yml)

# Storybook Addon CssVar Theming
Overwrite Story CSSVars for displaying theming changes

### Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code

### Switch from TypeScript to JavaScript

Don't want to use TypeScript? We offer a handy eject command: `yarn eject-ts`

This will convert all code to JS. It is a destructive process, so we recommended running this before you start writing any code.

## Release Management

### Setup

This project is configured to use [auto](https://github.com/intuit/auto) for release management. It generates a changelog and pushes it to both GitHub and npm. Therefore, you need to configure access to both:

- [`NPM_TOKEN`](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-access-tokens) Create a token with both _Read and Publish_ permissions.
- [`GH_TOKEN`](https://github.com/settings/tokens) Create a token with the `repo` scope.

#### Local

To use `auto` locally create a `.env` file at the root of your project and add your tokens to it:

```bash
GH_TOKEN=<value you just got from GitHub>
NPM_TOKEN=<value you just got from npm>
```
