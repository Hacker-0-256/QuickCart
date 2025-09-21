# quickCart- A simple eCommerce website

quickCartis an open-source **Next.js eCommerce frontend** project.  
It provides a modern, fast and customizable shopping UI.  
This repo is **frontend only** – contributors can improve the design, add new pages, animations and more.

---

## Features

-   Built with **Next.js + Tailwind CSS**
-   Responsive design
-   Reusable components
-   Customizable layouts and colors
-   Open for contributions (UI/UX, animations, themes, layouts etc.)

---

## Getting Started

1. Clone the repo

    ```bash
    git clone https://github.com/GreatStackDev/curuza.git
    cd curuza
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Set up environment variables

    Create a `.env.local` file in the root directory with the following variables:

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
    CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here

    # MongoDB Database
    MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net

    # Inngest Background Jobs
    INNGEST_EVENT_KEY=your_inngest_event_key_here
    INNGEST_SIGNING_KEY=your_inngest_signing_key_here

    # Application Settings
    NEXT_PUBLIC_CURRENCY=₹
    ```

4. Run locally

    ```bash
    npm run dev
    ```

---

## 🚀 Deployment on Vercel

This project is optimized for Vercel deployment. Follow these steps:

### Prerequisites

1. **Clerk Account**: Sign up at [clerk.com](https://clerk.com) and create a new application
2. **MongoDB Atlas**: Create a free cluster at [mongodb.com](https://mongodb.com)
3. **Inngest Account**: Sign up at [inngest.com](https://inngest.com) for background jobs
4. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**:
   In your Vercel project dashboard, go to Settings → Environment Variables and add:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `MONGODB_URI`
   - `INNGEST_EVENT_KEY`
   - `INNGEST_SIGNING_KEY`
   - `NEXT_PUBLIC_CURRENCY` (set to `₹`)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your project automatically
   - Your app will be available at `https://your-project-name.vercel.app`

### Vercel Configuration

The project includes:
- `vercel.json` - Optimized Vercel configuration
- `next.config.mjs` - Next.js config with Vercel optimizations
- Serverless functions for Inngest API routes
- Image optimization for Clerk user avatars

---

## Contributing

We welcome all kinds of contributions! You can:

- Create new pages
- Improve layouts
- Add animations and transitions
- Enhance responsiveness
- Refactor components
- Suggest new UI/UX ideas
- Add themes or color variations
- Introduce accessibility improvements
- Add filtering/search features
- Improve documentation

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the **MIT License**.

---

## 🌟 Contributors

Thanks to everyone who contributes to **Curuza**!