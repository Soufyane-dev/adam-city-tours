"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const TRIPADVISOR_WORDMARK =
  "https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg";

export default function TripAdvisorWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent strict mode double injection
    if (document.getElementById("tripadvisor-script-live")) return;

    const script = document.createElement("script");
    script.id = "tripadvisor-script-live";
    script.src = "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=796&locationId=32975170&lang=en_US&rating=true&nreviews=4&writereviewlink=true&popIdx=true&iswide=true&border=true&display_version=2";
    script.async = true;
    script.setAttribute("data-loadtrk", "");
    script.onload = function () {
      (window as any).loadtrk = true;
    };

    document.body.appendChild(script);

    return () => {
      // Optional: Cleanup script if needed (usually left as is to avoid breaking TA)
    };
  }, []);

  return (
    <div className="w-full flex justify-center" ref={containerRef}>
      <div id="TA_selfserveprop796" className="TA_selfserveprop">
        <ul id="WnFSjDHxEO" className="TA_links 7UETmPUuC">
          <li id="wCU4XVPW" className="bQHlPzQBVnyY">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g293734-d20363595-Reviews-Adamcitytours-Marrakech_Marrakech_Safi.html"
            >
              <Image
                src={TRIPADVISOR_WORDMARK}
                alt="TripAdvisor"
                width={160}
                height={28}
                className="h-6 w-auto max-w-[min(100%,9rem)]"
                loading="lazy"
                unoptimized
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
