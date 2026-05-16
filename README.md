# The Gita Explorer

A high-performance, interactive Next.js web application bridging ancient Vedic philosophy with cutting-edge frontend architecture. This project transforms the Bhagavad Gita from a static text into an immersive, multi-dimensional digital experience.

## 🚀 Overview

The Gita Explorer is built on a highly structured, master-level JSON dataset that breaks down each verse into literal translations, philosophical insights, psychological diagnoses, and modern applications. The frontend is engineered to render this complex data seamlessly, utilizing advanced scroll-based animations and custom glassmorphism components to create a serene, focused user experience.

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, `use client` directives)
- **Library:** React (Functional components, custom Hooks)
- **Animation Engine:** GSAP & ScrollTrigger
- **Styling:** Modern CSS (Custom properties, backdrop-filters, radial gradients)

## ✨ Core Features & UI Components

### 1. The Architecture Component

A unique visualization mapping ancient Vedic architectural structures directly to human physiological systems. This component explores the macrocosm-microcosm relationship, illustrating how external temples mirror the internal architecture of the human body and mind.

### 2. Interactive GlassCards

The primary vessel for verse data. These custom cards feature:

- Deep `backdrop-blur` for a frosted-glass aesthetic.
- Custom border styling to define hierarchy.
- Dynamic, interactive radial-gradients that track mouse position, creating a subtle, luminous glow that follows the user's focus.

### 3. Scroll-Driven Pillar Cards

Data is revealed progressively as the user moves through the text. Utilizing **GSAP ScrollTrigger**, the "pillar-card" elements feature highly optimized, staggered reveal animations that trigger smoothly on scroll, ensuring the user is never overwhelmed by the density of the information.

### 4. Deep JSON Data Integration

The app seamlessly ingests a complex `camelCase` JSON structure, dynamically rendering deeply nested arrays of psychological insights, scientific/rational metaphors, and mindset-shift paradigms without performance degradation.

## 📦 Getting Started

### Prerequisites

Ensure you have Node.js (v18.x or later) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/krishnasai89/Gita.git](https://github.com/krishnasai89/Gita.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd Gita
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or yarn install / pnpm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🧠 Animation Logic Note

The GSAP animation logic within the pillar cards relies on precise DOM targeting viaHere is a comprehensive, production-ready `README.md` tailored specifically to the architecture, tech stack, and unique UI components of the Gita website we’ve been building.
