import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const events = [
  {
    logo: "/image/logo2.png",
    title: "Workshop Vidimi",
    time: "Saturday, April 12,\n8:30AM - 12:00PM",
    location: "232/6 Võ Thị Sáu",
    reward: "+10,000 $VI",
    state: "Upcoming",
  },
  {
    logo: "/image/logo.png",
    title: "Workshop Vidimi",
    time: "Saturday, April 12,\n8:30AM - 12:00PM",
    location: "Location",
    reward: "+5,000 $VI",
    state: "Upcoming",
  },
  {
    logo: "/image/logo2.png",
    title: "Workshop Vidimi",
    time: "Saturday, April 12,\n8:30AM - 12:00PM",
    location: "Location",
    reward: "+2,000 $VI",
    state: "Took place",
  },
];

const tabs = [
  { label: "Tất cả", value: "all" },
  { label: "Sắp diễn ra", value: "Upcoming" },
  { label: "Đã diễn ra", value: "Took place" },
];

export const EventPage: React.FC = () => {
  const [tab, setTab] = useState("all");
  const navigate = useNavigate();

  // Lọc sự kiện theo tab
  const filteredEvents = tab === "all"
    ? events
    : events.filter(e => e.state === tab);

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ padding: "18px 0 0 0", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 18px" }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#232B3A" ,display: "flex", alignItems: "center",marginTop:40}}>
            <span
    style={{ marginRight: 22, cursor: "pointer", display: "flex", alignItems: "center" }}
    onClick={() => navigate(-1)}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675" stroke="#1F2A44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
            Sự kiện
          </span>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 12, marginTop: 18, padding: "0 18px" }}>
          {tabs.map(t => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              style={{
                padding: "8px 18px",
                borderRadius: 18,
                border: "none",
                fontWeight: 700,
                fontSize: 15,
                background: tab === t.value ? "#E6D6F7" : "#F5F5F5",
                color: tab === t.value ? "#B600C4" : "#232B3A",
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {/* Event List */}
      <div style={{ padding: "24px 18px 0 18px" }}>
        {filteredEvents.map((e, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: 24,
              boxShadow: "0 2px 8px #0001",
              display: "flex",
              alignItems: "center",
              padding: "16px 18px",
              marginBottom: 18,
              position: "relative",
            }}
          >
            {/* Logo + Reward */}
            <div style={{ position: "relative", marginRight: 16 }}>
              <img
                src={e.logo}
                alt="logo"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  objectFit: "cover",
                  background: "linear-gradient(90deg,#d946ef,#6366f1)",
                }}
              />
              {/* Reward ribbon */}
              <div style={{
                position: "absolute",
                left: -18,
                top: 4,
                zIndex: 2,
                background: "#3DCBFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 8,
                padding: "2px 10px",
                borderRadius: 8,
                transform: "rotate(-40deg)",
                boxShadow: "0 2px 8px #0001",
                width: 70,
                textAlign: "center",
                clipPath: "polygon(20% 0, 72% 0, 100% 100%, 0 100%)",
              }}>
                {e.reward}
              </div>
            </div>
            {/* Info */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#232B3A", marginBottom: 4 }}>
                {e.title}
              </div>
              <div style={{ fontSize: 14, color: "#7A89A8", whiteSpace: "pre-line" }}>
                {e.time}
              </div>
              <div style={{ fontSize: 14, color: "#7A89A8" }}>
                {e.location}
              </div>
            </div>
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <div style={{ textAlign: "center", color: "#7A89A8", marginTop: 32 }}>
            Không có sự kiện nào.
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;