export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { name, email, type, message } = req.body || {};

    const allowedTypes = ["Feedback", "Need Help", "Report a Problem"];

    if (!name || !email || !type || !message) {
      return res.status(400).json({ error: "Please complete all fields." });
    }

    if (typeof name !== "string" || name.trim().length > 100) {
      return res.status(400).json({ error: "Please enter a valid name." });
    }

    if (typeof email !== "string" || email.trim().length > 254 || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    if (!allowedTypes.includes(type)) {
      return res.status(400).json({ error: "Please choose a valid message type." });
    }

    if (typeof message !== "string" || message.trim().length > 3000) {
      return res.status(400).json({ error: "Your message is too long." });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: "Email service is not configured yet." });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "User-Agent": "ai-engineer-portfolio-contact-form"
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || "Kanthi.sathish777@gmail.com"],
        reply_to: email.trim(),
        subject: `Portfolio Contact — ${type}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
          <p><strong>Type:</strong> ${escapeHtml(type)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message.trim()).replace(/\n/g, "<br>")}</p>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Resend error:", errorData);
      return res.status(502).json({
        error: errorData?.message || errorData?.name || "The message could not be sent. Please try again."
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
