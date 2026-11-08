# Masterchief Global Website (`masterchiefglobal.com`)

Official corporate and B2B maritime solutions platform for **Masterchief Global Pvt Ltd** — *A Complete Spectrum of Maritime Solutions*.

- **ISO 9001:2015 Certified Company**
- **Registered Ship Chandler:** Vizhinjam International Seaport, Thiruvananthapuram
- **ShipServ TradeNet ID (TNID):** `318202`
- **24/7 Operations Desk:** `ops@masterchiefglobal.com` | `+91 9778606981 / 9778606991`

---

## Local Development & Build

```powershell
# Install dependencies
npm.cmd install

# Start local development server (http://localhost:5173)
npm.cmd run dev

# Build production static files into dist/
npm.cmd run build
```

---

## GoDaddy Deployment Guide

### Option 1: Direct Upload to GoDaddy Web Hosting (cPanel Linux or Plesk Windows)
A pre-built production archive is packaged at:
`c:\WS\masterchief-website\masterchief-godaddy-cpanel-upload.zip`

It includes:
- [`.htaccess`](./public/.htaccess) for GoDaddy Linux / cPanel (Apache)
- [`web.config`](./public/web.config) for GoDaddy Windows / Plesk (IIS)
- [`robots.txt`](./public/robots.txt) and [`sitemap.xml`](./public/sitemap.xml) for search engine indexing
- All compiled assets, fonts, project photos, and `/Masterchief_Global_Brochure.pdf`

**Steps:**
1. Open **GoDaddy → My Products → Web Hosting → Manage → cPanel Admin → File Manager**.
2. Open the **`public_html`** directory (or `httpdocs` on Plesk).
3. Upload **`masterchief-godaddy-cpanel-upload.zip`** and click **Extract** directly inside `public_html`.
4. In **GoDaddy Domain DNS Management** for `masterchiefglobal.com`:
   - Point the root **`A` record (`@`)** to your GoDaddy Web Hosting IP address.
   - Point the **`CNAME` record (`www`)** to `@` (`masterchiefglobal.com`).

---

### Option 2: GoDaddy Domain + Vercel Hosting (Current Live DNS Setup)
Currently, `masterchiefglobal.com` uses GoDaddy nameservers (`ns17.domaincontrol.com` / `ns18.domaincontrol.com`) with DNS records pointing to Vercel:
- `A` (`@`) → `216.198.79.1`
- `CNAME` (`www`) → `cname.vercel-dns.com`

To deploy directly to Vercel without modifying GoDaddy DNS:
```powershell
npx.cmd vercel --prod
```
Or push this repository to the GitHub repo linked to your Vercel project.

