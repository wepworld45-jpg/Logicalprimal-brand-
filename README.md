# LogicPrimal UGC Agency

This repository contains the deployed static site for LogicPrimal Entertainment. The main experience is the self-contained `index.html` page, with a lightweight `thank-you.html` destination for form submissions and a fallback `404.html` page.

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. It deploys the repository root to GitHub Pages whenever changes are pushed to `main`, and it can also be run manually from the Actions tab.

After the first successful workflow run, the expected project-site URL is:

<https://wepworld45-jpg.github.io/Logicalprimal-brand-/> 

## Contact form

The contact form posts to FormSubmit and sends inquiries to `mminions58@email.com`. The configured success destination is `thank-you.html` on the GitHub Pages site.

## Local preview

Because the site is static, it can be previewed with any static file server. For example:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080/> in a browser.
