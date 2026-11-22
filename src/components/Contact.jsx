import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";

const SERVICE_ID = "service_wuwbee8";
const TEMPLATE_ID = "template_2nk0uqg";
const PUBLIC_KEY = "UjIenTGgAJYS-cloq";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [fallback, setFallback] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");
    setFallback("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("Message sent. Thanks for reaching out!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        const data = new FormData(formRef.current);
        const subject = encodeURIComponent(data.get("subject") || "Portfolio contact");
        const body = encodeURIComponent(
          `From: ${data.get("from_name")} <${data.get("from_email")}>\n\n${data.get("message")}`
        );
        setStatus("The contact form is unavailable right now.");
        setFallback(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      })
      .finally(() => setSending(false));
  };

  return (
    <form ref={formRef} className="contact-form panel" onSubmit={submit}>
      <input name="from_name" placeholder="Your name" required />
      <input name="from_email" type="email" placeholder="Your email" required />
      <input name="subject" placeholder="Subject" required />
      <textarea name="message" rows={5} placeholder="Message" required />
      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send message"}
      </button>
      {fallback && (
        <a className="btn btn-outline" href={fallback}>
          Email me directly
        </a>
      )}
      <p className="status">{status}</p>
    </form>
  );
}