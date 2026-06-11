"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingCalendar() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#FE8254" },
          light: { "cal-brand": "#FE8254" },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace="consultation"
      calLink="sai-yashwanth/consultation"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
