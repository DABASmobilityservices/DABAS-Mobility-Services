# DABAS Mobility Services — Official Corporate Website Package
Commercial Sedan & Hatchback Car Rentals | Fleet Management
Headquarters: Delhi, India

---

## Business Contact Details
- **Company**: DABAS Mobility Services
- **Location**: Delhi, India
- **Phone**: +91 93191 12352
- **Email**: dabasmobilityservices@gmail.com
- **WhatsApp**: +91 93191 12352
- **Fleet Scope**: Exclusively Commercial Sedan Cars (Dzire/Aura class) & Commercial Hatchback Cars (WagonR/Swift/Tiago class)

---

## 📁 Package Contents
- `index.html`: Main HTML5 website
- `css/style.css`: Logo-themed corporate stylesheet (Navy, Gold, Sky Blue)
- `js/app.js`: Centralized `DABAS_CONFIG` and client interaction logic
- `assets/images/`:
  - `logo.jpg`: Official DABAS Mobility Services logo
  - `hero_cars_fleet.jpg`: Commercial sedan & hatchback fleet banner
  - `commercial_sedan.jpg`: Commercial sedan car photography
  - `commercial_hatchback.jpg`: Commercial hatchback car photography
- `README.md`: This deployment & customization guide

---

## 1. Quick Preview
Double-click `index.html` in your file explorer to open it in any web browser. No web server installation is required.

---

## 2. Centralized Configuration
Open `js/app.js` (or `<script>` in single-file version) to verify your settings:

```javascript
const DABAS_CONFIG = {
  businessName: "DABAS Mobility Services",
  location: "Delhi, India",
  phone: "+91 93191 12352",
  phoneRaw: "9319112352",
  email: "dabasmobilityservices@gmail.com",
  whatsappNumber: "919319112352",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST"
};
```

---

## 3. Free Online Publishing
- **Netlify Drop**: Drag and drop the `dabas_mobility_services` folder onto https://app.netlify.com/drop for instant HTTPS deployment.
- **GitHub Pages**: Upload to a repository and enable GitHub Pages in Settings.
- **Custom Domain**: Point your DNS CNAME/A records to your host provider.
