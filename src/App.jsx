import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certificates";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Profile from "./components/Profile";

const pageMeta = {
  home: {
    title: "Kanthi Sathish | AI Engineer",
    description:
      "Kanthi Sathish — AI Engineer portfolio featuring machine learning, computer vision, generative AI, projects, skills, and experience.",
  },
  about: {
    title: "About | Kanthi Sathish — AI Engineer",
    description:
      "Learn about Kanthi Sathish, an AI Engineer focused on machine learning, computer vision, and generative AI.",
  },
  skills: {
    title: "Skills | Kanthi Sathish — AI Engineer",
    description:
      "Explore Kanthi Sathish's AI engineering skills across machine learning, computer vision, generative AI, and related technologies.",
  },
  profile: {
    title: "Profile | Kanthi Sathish — AI Engineer",
    description:
      "View Kanthi Sathish's professional AI engineering profile, capabilities, and technical focus areas.",
  },
  projects: {
    title: "Projects | Kanthi Sathish — AI Engineer",
    description:
      "Explore AI and machine learning projects by Kanthi Sathish, including computer vision and generative AI applications.",
  },
  experience: {
    title: "Experience | Kanthi Sathish — AI Engineer",
    description:
      "View Kanthi Sathish's AI engineering experience, internships, and professional work.",
  },
  education: {
    title: "Education | Kanthi Sathish — AI Engineer",
    description:
      "View Kanthi Sathish's education and academic background in AI and engineering.",
  },
  certifications: {
    title: "Certifications | Kanthi Sathish — AI Engineer",
    description:
      "View Kanthi Sathish's professional certifications and AI-related credentials.",
  },
  timeline: {
    title: "Timeline | Kanthi Sathish — AI Engineer",
    description:
      "Follow Kanthi Sathish's academic and professional journey in AI engineering.",
  },
  contact: {
    title: "Contact | Kanthi Sathish — AI Engineer",
    description:
      "Get in touch with Kanthi Sathish for AI engineering opportunities, collaborations, and projects.",
  },
};

function App() {
  useEffect(() => {
    const updatePageMeta = () => {
      const section = window.location.hash.replace("#", "") || "home";
      const meta = pageMeta[section] || pageMeta.home;

      document.title = meta.title;

      const description = document.querySelector('meta[name="description"]');
      if (description) {
        description.setAttribute("content", meta.description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", meta.title);
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute("content", meta.description);
      }

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute("content", meta.title);
      }

      const twitterDescription = document.querySelector(
        'meta[name="twitter:description"]'
      );
      if (twitterDescription) {
        twitterDescription.setAttribute("content", meta.description);
      }
    };

    updatePageMeta();
    window.addEventListener("hashchange", updatePageMeta);

    return () => window.removeEventListener("hashchange", updatePageMeta);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Profile />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
