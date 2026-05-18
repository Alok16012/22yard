"use client";
import { useState, useEffect } from "react";
import AppHeader from "@/components/AppHeader";
import AppSearchBar from "@/components/AppSearchBar";
import AppPromoBanner from "@/components/AppPromoBanner";
import AppSportsList from "@/components/AppSportsList";
import AppMatchCards from "@/components/AppMatchCards";
import AppSportCards from "@/components/AppSportCards";
import AppOfferStrip from "@/components/AppOfferStrip";
import AppStats from "@/components/AppStats";
import AppFooterCTA from "@/components/AppFooterCTA";
import AppBottomNav from "@/components/AppBottomNav";
import TickerBanner from "@/components/TickerBanner";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0b1e",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "430px",
        minHeight: "100vh",
        background: "#120f1e",
        position: "relative",
        paddingBottom: "80px",
        boxShadow: "0 0 60px rgba(124,58,237,0.15)",
      }}>
        <TickerBanner />
        <AppHeader />
        <AppSearchBar />
        <AppPromoBanner />
        <AppSportsList />
        <AppMatchCards />
        <AppSportCards />
        <AppOfferStrip />
        <AppStats />
        <AppFooterCTA />
        <AppBottomNav />
      </div>
    </div>
  );
}
