import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";

import About from "@/pages/About";
import AboutCareers from "@/pages/AboutCareers";
import AboutLeadership from "@/pages/AboutLeadership";
import AboutMissionVision from "@/pages/AboutMissionVision";
import AboutTestimonials from "@/pages/AboutTestimonials";
import Achievers from "@/pages/Achievers";
import AchieversJeeAdvanced from "@/pages/AchieversJeeAdvanced";
import AchieversJeeMains from "@/pages/AchieversJeeMains";
import AchieversKCet from "@/pages/AchieversKCet";
import AchieversNeet from "@/pages/AchieversNeet";
import AchieversNstse from "@/pages/AchieversNstse";
import Contact from "@/pages/Contact";
import Courses from "@/pages/Courses";
import CoursesClass11 from "@/pages/CoursesClass11";
import CoursesClass12 from "@/pages/CoursesClass12";
import CoursesOnline from "@/pages/CoursesOnline";
import CoursesOnlineClass11 from "@/pages/CoursesOnlineClass11";
import CoursesOnlineClass12 from "@/pages/CoursesOnlineClass12";
import LandingIndex from "@/pages/LandingIndex";
import V1 from "@/pages/V1";
import V2 from "@/pages/V2";
import V3 from "@/pages/V3";

/** Next.js resets scroll on route change, and follows a `#hash` in the link
 *  (e.g. "Book a visit" → /landing/v2#visit); the SPA has to do both by hand. */
function ScrollToTop() {
  // `key` changes on every navigation, so clicking a link to the hash you are
  // already on (e.g. "Book a visit" on the Contact page) still scrolls to it.
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash, key]);

  return null;
}

function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-xs font-bold tracking-[2px] text-brand-primary uppercase">404</p>
      <h1 className="font-(family-name:--font-display) text-3xl font-bold text-brand-text-primary">
        This page has moved
      </h1>
      <p className="text-sm text-brand-text-secondary">
        The landing pages live under <code>/landing</code> in this build.
      </p>
      <Link
        to="/landing"
        className="btn-brand mt-2 rounded-md px-6 py-2.5 text-sm font-semibold text-white"
      >
        Go to the landing index
      </Link>
    </main>
  );
}

/** Mirrors the app router structure of src/app/(landing)/landing so every URL
 *  is identical to the Next.js version. */
export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<LandingIndex />} />
        <Route path="/landing/v1" element={<V1 />} />
        <Route path="/landing/v2" element={<V2 />} />
        <Route path="/landing/v3" element={<V3 />} />
        <Route path="/landing/about" element={<About />} />
        <Route path="/landing/about/mission-vision" element={<AboutMissionVision />} />
        <Route path="/landing/about/leadership" element={<AboutLeadership />} />
        <Route path="/landing/about/testimonials" element={<AboutTestimonials />} />
        <Route path="/landing/about/careers" element={<AboutCareers />} />
        <Route path="/landing/achievers" element={<Achievers />} />
        <Route path="/landing/achievers/jee-mains" element={<AchieversJeeMains />} />
        <Route path="/landing/achievers/jee-advanced" element={<AchieversJeeAdvanced />} />
        <Route path="/landing/achievers/neet" element={<AchieversNeet />} />
        <Route path="/landing/achievers/k-cet" element={<AchieversKCet />} />
        <Route path="/landing/achievers/nstse" element={<AchieversNstse />} />
        <Route path="/landing/courses" element={<Courses />} />
        <Route path="/landing/courses/class-11" element={<CoursesClass11 />} />
        <Route path="/landing/courses/class-12" element={<CoursesClass12 />} />
        <Route path="/landing/courses/online" element={<CoursesOnline />} />
        <Route path="/landing/courses/online/class-11" element={<CoursesOnlineClass11 />} />
        <Route path="/landing/courses/online/class-12" element={<CoursesOnlineClass12 />} />
        <Route path="/landing/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Matches the repo's root layout: 3s default, dismissible by hand. Lifted
          on phones so toasts clear the V2 bottom action bar. */}
      <Toaster closeButton duration={3000} mobileOffset={{ bottom: 80 }} />
    </>
  );
}
