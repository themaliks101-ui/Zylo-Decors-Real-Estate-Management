/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrinityGrid from "./components/TrinityGrid";
import ShopTheLook from "./components/ShopTheLook";
import PortfolioGallery from "./components/PortfolioGallery";
import StyleQuiz from "./components/StyleQuiz";
import AIConcierge from "./components/AIConcierge";
import Footer from "./components/Footer";

import { AuthProvider, WishlistProvider } from "./context/AppContext";

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <div className="bg-obsidian min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <TrinityGrid />
            <ShopTheLook />
            <PortfolioGallery />
            <StyleQuiz />
          </main>
          <Footer />
          <AIConcierge />
        </div>
      </WishlistProvider>
    </AuthProvider>
  );
}


