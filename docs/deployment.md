# Deployment

## Overview

`saleor-dashboard` is a single-page application that the build process turns into a set of static files. You can deploy them anywhere (e.g. [Vercel](https://www.vercel.com/), [Netlify](https://www.netlify.com/), [Render](https://render.com/)).

## Build

To build your `saleor-dashboard` instance, please run:

```bash
npm run build
```

If you want to preview your build, you can do it with:

```bash
npm run preview
```

## Deployment Platforms

### Render

This repository includes a `render.yaml` configuration file for easy deployment to [Render](https://render.com/).

The build output is located in `build/dashboard/` directory, which is automatically configured in the `render.yaml` file.

#### Deploy to Render:

1. Create a new **Static Site** on Render or use the **Blueprint** feature
2. Connect your repository
3. Render will automatically detect the `render.yaml` configuration
4. Set your required environment variables (especially `API_URL`)
5. Deploy!

#### Required Environment Variables:

- `API_URL` - URI of your Saleor GraphQL API instance (e.g., `https://your-saleor-instance.com/graphql/`)

#### Optional Environment Variables:

- `APP_MOUNT_URI` - URI at which the Dashboard app will be mounted (default: `/`)
- `STATIC_URL` - URL where static files are located (default: `/`)
- `LOCALE_CODE` - Locale code for default language (default: `EN`)
- `SKIP_SOURCEMAPS` - Skip source maps generation for smaller build size (default: `true`)

For more environment variables, see [configuration.md](./configuration.md).

### Other Platforms

For other deployment platforms like Vercel or Netlify, make sure to:

1. Set the build command to: `npm ci --legacy-peer-deps && npm run build`
2. Set the publish directory to: `build/dashboard`
3. Configure the necessary environment variables (see [configuration.md](./configuration.md))
