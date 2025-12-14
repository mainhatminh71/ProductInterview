
  # Login and Registration Pages

  This is a code bundle for Login and Registration Pages. The original project is available at https://www.figma.com/design/uw777kXExafUxAystWEal2/Login-and-Registration-Pages.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Environment Variables

  Create a `.env` file in the root directory with the following variable:

  ```
  VITE_BASE_API_URL=https://product-interview.onrender.com
  ```

  **Note:** The `.env` file is excluded from git for security. Make sure to set this environment variable in your deployment platform.

  ## Deployment

  ### Vercel (Recommended)

  1. Install Vercel CLI: `npm i -g vercel`
  2. Run `vercel` to deploy
  3. Add environment variable `VITE_BASE_API_URL` in Vercel dashboard:
     - Go to your project settings
     - Navigate to Environment Variables
     - Add `VITE_BASE_API_URL` with value `https://product-interview.onrender.com`

  Or connect your GitHub repository to Vercel:
  1. Go to [vercel.com](https://vercel.com)
  2. Import your GitHub repository
  3. Add environment variable `VITE_BASE_API_URL` in project settings
  4. Deploy automatically on every push

  ### Netlify

  1. Install Netlify CLI: `npm i -g netlify-cli`
  2. Run `netlify deploy` or connect via GitHub
  3. Add environment variable `VITE_BASE_API_URL` in Netlify dashboard

  ### Other Platforms

  Make sure to set the `VITE_BASE_API_URL` environment variable in your deployment platform's settings.
  