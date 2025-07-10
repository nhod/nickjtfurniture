# Nick and JT Furniture For Sale

A simple, elegant furniture marketplace website built with 11ty (Eleventy) and inspired by Design Within Reach's clean aesthetic. Perfect for selling furniture during a move or decluttering.

## 🚀 Quick Start

1. **Replace sample data with your real furniture:**
   - Update `_data/furniture.csv` with your actual furniture pieces
   - Add your high-resolution images to the `images/` folder
   
2. **Deploy to GitHub Pages:**
   - Commit and push your changes
   - GitHub Actions will automatically build and deploy your site

## 📁 Project Structure

```
nickjtfurniture/
├── _data/
│   └── furniture.csv          # Furniture data (edit this!)
├── images/                    # Your furniture photos (add here!)
├── src/
│   ├── _includes/
│   │   └── base.njk          # Base HTML template
│   ├── css/
│   │   └── style.css         # DWR-inspired styling
│   ├── furniture/
│   │   └── furniture.njk     # Detail page template
│   └── index.njk             # Homepage template
├── .eleventy.js              # 11ty configuration
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment
└── package.json
```

## 📝 Adding Your Furniture

### 1. Update the CSV file

Edit `_data/furniture.csv` with your furniture pieces:

```csv
name,description,price,images,sold
"Mid-Century Walnut Dining Table","Beautiful walnut wood dining table, seats 6 comfortably.","$1,250","dining-table-1.jpg,dining-table-2.jpg","false"
"West Elm Velvet Sofa","Navy blue velvet 3-seater sofa. Very comfortable.","$800","velvet-sofa-1.jpg,velvet-sofa-2.jpg","true"
```

**CSV Format:**
- `name`: Furniture piece name
- `description`: Detailed description
- `price`: Price with $ symbol
- `images`: Comma-separated list of image filenames
- `sold`: "true" or "false" (sold items appear grayed out)

### 2. Add Your Images

1. Place high-resolution images in the `images/` folder
2. Use descriptive filenames (e.g., `dining-table-1.jpg`, `dining-table-2.jpg`)
3. Supported formats: JPG, PNG, WebP
4. The system automatically creates responsive thumbnails

## 🚀 Deployment Instructions

### Automatic Deployment (Recommended)

1. **Add your real data:**
   ```bash
   # Edit your CSV file
   nano _data/furniture.csv
   
   # Add your images to the images/ folder
   cp ~/path/to/your/photos/* images/
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add real furniture data and images"
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Build your site with 11ty
   - Deploy to GitHub Pages
   - Your site will be live at: `https://nhod.github.io/nickjtfurniture/`

### Manual Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run serve
# Opens at http://localhost:4242/nickjtfurniture/

# Build for production
npm run build
```

## 📱 Features

- **Mobile-first responsive design** - Optimized for mobile viewing
- **DWR-inspired aesthetic** - Clean, minimal design
- **Automatic image processing** - Creates responsive thumbnails
- **Sold item handling** - Sold items appear grayed out with "SOLD" overlay
- **Contact integration** - Email links to jt@nickandjt.com
- **GitHub Pages deployment** - Automatic deployment via GitHub Actions

## 🎨 Design Features

- Clean typography and generous whitespace
- Responsive grid layouts
- Hover effects and smooth transitions
- Grayscale treatment for sold items
- Mobile-optimized touch targets
- Professional color palette

## 📧 Contact

All inquiries go to: **jt@nickandjt.com**

Potential buyers can click "Contact about this item" on any available piece to send an email inquiry.

## 🔧 Technical Details

- **Framework**: 11ty (Eleventy) static site generator
- **Templating**: Nunjucks
- **Styling**: Custom CSS with CSS custom properties
- **Images**: Automatic responsive image generation
- **Deployment**: GitHub Actions + GitHub Pages
- **Data**: CSV-based content management

## 🛠️ Troubleshooting

**Site not updating after push?**
- Check the Actions tab in GitHub for build status
- GitHub Pages can take a few minutes to update
- Try clearing your browser cache

**Images not showing?**
- Ensure image filenames in CSV match actual files
- Check that images are in the `images/` folder
- Supported formats: JPG, PNG, WebP

**Local development not working?**
- Run `npm install` to install dependencies
- Check that you're using Node.js 14+ 
- Use `npm run serve` to start the dev server

## 📦 Dependencies

- `@11ty/eleventy`: Static site generator
- `@11ty/eleventy-img`: Image processing
- `csvtojson`: CSV parsing for furniture data

---

Built with ❤️ for a successful furniture sale!
