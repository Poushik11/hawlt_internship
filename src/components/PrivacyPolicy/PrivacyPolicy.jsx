// src/PrivacyPolicy.js

import React from "react";
import "./privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="main-heading">
        <span>Privacy</span> <span className="highlight">Policy</span>
      </h1>

      <section className="section">
        <p className="effective-date">Effective Date: 10/07/24</p>
        <h2 className="sub-heading">Introduction</h2>
        <p className="text">
          Welcome to Hawlt. We are committed to protecting your personal
          information and your right to privacy. If you have any questions or
          concerns about our policy, or our practices with regards to your
          personal information, please contact us at{" "}
          <span className="highlight1">Support@hawlt.com</span> or by phone at
          <span className="highlight1">+91 9353018894.</span>
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">Information We Collect</h2>
        <p className="text">
          We collect personal information that you provide to us voluntarily
          when you express an interest in obtaining information about us or our
          PG (Paying Guest) services, when you participate in activities on the
          site (such as posting messages in our online forums or entering
          competitions, contests or giveaways) or otherwise contacting us.
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">How We Use Your Information</h2>
        <p className="text">
          We use the information we collect or receive to communicate directly
          with you. We may also send you promotional emails containing
          information about our PG services.
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">Sharing Your Information</h2>
        <p className="text">
          We do not share, sell, rent or trade any of your information with
          third parties for their promotional purposes.
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">Your Data Protection Rights</h2>
        <p className="text">
          You have the right to access, update, or delete the information we
          have on you. If you make a request, we have one month to respond to
          you. If you would like to exercise any of these rights, including the
          deletion of your account, please contact us at{" "}
          <span className="highlight1">Support@hawlt.com</span> or by phone at
          <span className="highlight1">+91 9353018894.</span>
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">Changes to this privacy policy.</h2>
        <p className="text">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="section">
        <h2 className="sub-heading">Contact Us</h2>
        <p className="text">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="contact-list">
          <li>
            By email: <span className="highlight1">Support@hawlt.com</span>
          </li>
          <li>By contacting us through the website.</li>
          <li>
            By phone number: <span className="highlight1">+91 9353018894</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
