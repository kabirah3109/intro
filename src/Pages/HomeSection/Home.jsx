import React from "react";

const Home = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('/img1.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          
        }}
      >
        {/* dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Content */}

        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
          Welcome to MyApp
        </h1>
        <p style={{ fontSize: "1.5rem", margin: "20px 0" }}>
          Built with React
        </p>
        <button
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            backgroundColor: "#ff9e00",
            color: "black",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </header>
    </div>
  );
};

export default Home;
