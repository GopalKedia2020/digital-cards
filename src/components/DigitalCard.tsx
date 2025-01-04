import React from "react";

const BusinessCard: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Header with Logos */}
      <div
        style={{
          background: "#fff",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="Somani Realtors"
          style={{ height: "40px" }}
        />
        <img
          src="/34-year-logo.png" // Replace with your 34-year celebration logo path
          alt="34 Years Logo"
          style={{ height: "40px" }}
        />
      </div>

      {/* Profile Photo */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          background: "#0056B3", // Blue background
          color: "#fff",
          padding: "50px 20px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "5px solid #fff",
            overflow: "hidden",
          }}
        >
          <img
            src="/profile.jpg" // Replace with your actual profile photo path
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Contact Details */}
      <div style={{ background: "#0056B3", color: "#fff", padding: "10px 20px" }}>
        <h3 style={{ margin: "60px 0 5px", fontSize: "1.2em" }}>Sumeet Roy</h3>
        <p style={{ margin: "0", fontSize: "0.9em" }}>Assistant General Manager - Operations</p>
        <p style={{ margin: "0", fontSize: "0.9em" }}>Somani Realtors</p>
      </div>

      {/* Info Section */}
      <div style={{ padding: "15px 20px", background: "#f9f9f9", color: "#333" }}>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>📞</span>
          <a href="tel:+919830015606" style={{ color: "#0056B3", textDecoration: "none" }}>
            +91 98300 15606
          </a>
        </div>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>📧</span>
          <a
            href="mailto:sumeetroy@somanirealtors.com"
            style={{ color: "#0056B3", textDecoration: "none" }}
          >
            sumeetroy@somanirealtors.com
          </a>
        </div>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>📍</span>
          <p style={{ margin: 0 }}>40, Ashutosh Mukherjee Road, 2nd Floor, Kolkata</p>
        </div>
      </div>

      {/* Social Icons */}
      <div
        style={{
          padding: "15px",
          background: "#0056B3",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5em" }}>
          🌐
        </a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5em" }}>
          🔗
        </a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5em" }}>
          📘
        </a>
      </div>

      {/* Save Contact Button */}
      <div
        style={{
          textAlign: "center",
          background: "#0056B3",
          padding: "15px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <a
          href="#"
          style={{
            display: "block",
            background: "#003D82",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            color: "#fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0069D9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#003D82")}
        >
          Save Contact
        </a>
      </div>
    </div>
  );
};

export default BusinessCard;
