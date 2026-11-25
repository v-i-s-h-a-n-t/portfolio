# Deploying with Vercel

The production domain `vishantk.dev` is registered with Namecheap. This guide deploys the existing GitHub repository to Vercel and connects the domain. It does not change DNS or deploy the project for you.

## Import the GitHub repository

1. Sign in to Vercel and connect the GitHub account that can access `v-i-s-h-a-n-t/portfolio`.
2. Choose **Add New → Project** and import `v-i-s-h-a-n-t/portfolio`.
3. Use the repository root as the project root and keep the detected Next.js framework and default build settings.
4. Add `NEXT_PUBLIC_SITE_URL` with value `https://vishantk.dev` in the Production, Preview, and Development environments as appropriate.
5. Deploy and confirm the generated Vercel deployment builds successfully before attaching the custom domain.

The same variable is provided in `.env.example` for local use. Restart the development server after changing `.env.local`.

## Connect the Namecheap domain

1. In the Vercel project, open **Settings → Domains** and add `vishantk.dev` and `www.vishantk.dev`.
2. Copy the DNS records Vercel shows for this project.
3. In Namecheap, open **Domain List → Manage → Advanced DNS** and add the exact records Vercel requested. Keep Namecheap as the registrar and its current nameservers unless you intentionally choose the nameserver method shown by Vercel.
4. Preserve any DNS records used by other services, such as email. Vercel does not provide email hosting.
5. Wait for Vercel to verify both hostnames and provision HTTPS. Configure one hostname to redirect to the chosen canonical hostname in Vercel.
6. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin, then redeploy so generated metadata uses the production host.

DNS values can differ by project, so use the values on the Vercel Domains screen rather than copying example records from elsewhere. DNS changes can take time to propagate.

## Verify the deployment

- Check the Vercel deployment status and confirm the production branch is `main`.
- Visit the canonical domain over HTTPS and verify the homepage, project directory and details, résumé PDF, and contact links.
- Check `/robots.txt`, `/sitemap.xml`, and `/social-image` on the deployed domain.
- Confirm page metadata and canonical links use `https://vishantk.dev`.
- Confirm GitHub Actions CI passes for the commit deployed to production.

No production deployment or DNS update has been performed as part of this repository change.
