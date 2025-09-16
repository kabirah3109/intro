import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>ABOUT ME</h2>

        <p style={styles.paragraph}>
          I'm <strong>Awoyeni Kabirah Eniola</strong>, a passionate Frontend
          Developer.
        </p>

        <p style={styles.paragraph}>
          I love coding and building beautiful, responsive websites. I graduated
          from <em>Ladoke Akintola University of Technology, Nigeria</em>, with
          a degree in Nutrition and Dietetics, and have since transitioned into
          tech driven by my passion for creating user-friendly and visually
          appealing web applications.
        </p>

        <div style={styles.section}>
          <h3 style={styles.subHeading}>Skills</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>⚛️ React</li>
            <li style={styles.listItem}>⚡ JavaScript</li>
            <li style={styles.listItem}>🎨 HTML & CSS</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subHeading}>Hobbies</h3>
          <p style={styles.paragraph}>
            Coding, exploring new web technologies, and contributing to open
            source.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f7f9fc",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "60px 20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: "#2d3748",
  },
  card: {
    maxWidth: "800px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    padding: "50px",
    lineHeight: "1.8",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    color: "#1a365d",
    borderBottom: "3px solid #3182ce",
    paddingBottom: "10px",
  },
  subHeading: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#2c5282",
    marginTop: "30px",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "1.15rem",
    color: "#4a5568",
    marginBottom: "16px",
    textAlign: "justify",
  },
  section: {
    marginTop: "20px",
  },
  list: {
    paddingLeft: "20px",
    margin: "15px 0",
  },
  listItem: {
    fontSize: "1.15rem",
    color: "#2b6cb0",
    marginBottom: "10px",
  },
  link: {
    color: "#3182ce",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default About;
