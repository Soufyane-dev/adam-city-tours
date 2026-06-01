"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  const [activeSection, setActiveSection] = useState("#about");

  const handleTabClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.profileCard} data-state={activeSection}>
      <div className={styles.cardHeader}>
        <div 
          className={styles.cardCover} 
          style={{ backgroundImage: "url('/images/dest-marrakech-modern.png')" }}
        ></div>
        <div className={styles.cardAvatar}>
          <Image 
            src="/images/founder.png" 
            alt="Sufyane" 
            fill 
            className="object-cover"
          />
        </div>
        <h1 className={styles.cardFullname}>Sufyane</h1>
        <h2 className={styles.cardJobtitle}>Founder & Travel Curator</h2>
      </div>

      <div className={styles.cardMain}>
        {/* About Section */}
        <div className={`${styles.cardSection} ${activeSection === "#about" ? styles.isActive : ""}`} id="about">
          <div className={styles.cardContent}>
            <div className={styles.cardSubtitle}>ABOUT THE VISION</div>
            <p className={styles.cardDesc}>
              Adam City Tours was born from a singular passion: to redefine Moroccan travel through the lens of luxury and authenticity. As a native curator, my goal is to lead you beyond the traditional paths to the hidden majesties of our Kingdom.
            </p>
          </div>
          <div className={styles.cardSocial}>
            <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" /></svg></a>
            <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" /><path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" /><path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`${styles.cardSection} ${activeSection === "#experience" ? styles.isActive : ""}`} id="experience">
          <div className={styles.cardContent}>
            <div className={styles.cardSubtitle}>CURATOR EXPERIENCE</div>
            <div className={styles.cardTimeline}>
              <div className={styles.cardItem}>
                <div className={styles.cardItemTitle}>Founder at <span>Adam City Tours</span></div>
                <div className={styles.cardItemDesc}>Leading luxury travel curation and bespoke Moroccan experiences.</div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.cardItemTitle}>Concierge Expert at <span>Royal Mansour</span></div>
                <div className={styles.cardItemDesc}>Managed top-tier guest relations and cultural tours in Marrakech.</div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.cardItemTitle}>Cultural Guide for <span>Ministry of Tourism</span></div>
                <div className={styles.cardItemDesc}>Deep research into Moroccan heritage and architectural storytelling.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`${styles.cardSection} ${activeSection === "#contact" ? styles.isActive : ""}`} id="contact">
          <div className={styles.cardContent}>
            <div className={styles.cardSubtitle}>CONNECT WITH ME</div>
            <div className={styles.cardContactWrapper}>
              <div className={styles.cardContact}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Medina, Marrakech, Morocco
              </div>
              <div className={styles.cardContact}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                +212 665 138 697
              </div>
              <div className={styles.cardContact}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                sufyane@Adam City Tours.ma
              </div>
              <button className={styles.contactMe}>WORK TOGETHER</button>
            </div>
          </div>
        </div>

        <div className={styles.cardButtons}>
          <button 
            onClick={() => handleTabClick("#about")}
            className={activeSection === "#about" ? styles.isActive : ""}
          >
            ABOUT
          </button>
          <button 
            onClick={() => handleTabClick("#experience")}
            className={activeSection === "#experience" ? styles.isActive : ""}
          >
            EXPERIENCE
          </button>
          <button 
            onClick={() => handleTabClick("#contact")}
            className={activeSection === "#contact" ? styles.isActive : ""}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
}
