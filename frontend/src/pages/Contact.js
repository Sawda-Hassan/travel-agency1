import React, { useState } from "react";
import "./ContactUs.css";
import { postJSON, API_URL } from '../api'; 
import Footer from "./Footer";

// If you don't want api.js, uncomment this inline helper:
/*
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
async function postJSON(path, payload) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { message: text }; }
  if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);
  return data;
}
*/

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return alert("Please fill your name, email, and message.");
    }
    try {
      setSubmitting(true);
      await postJSON("/api/messages", { name, email, message });
      alert("Your message has been sent!");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      console.error(err);
      alert(`Failed to send your message: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <section className="contact-details-section">
        {/* … your columns exactly as you had … */}
        <div className="contact-form-column">
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <h3>Send us a message</h3>

            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input id="name" value={name}
                     onChange={(e)=>setName(e.target.value)}
                     required disabled={submitting}/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input id="email" type="email" value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     required disabled={submitting}/>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message (optional)</label>
              <textarea id="message" value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        disabled={submitting}/>
            </div>

            <button type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Submit"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}
