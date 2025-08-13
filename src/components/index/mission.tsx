import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const missions = [
  {
    img: "/image/mission1.png",
    title: "Review sản phẩm nhận thưởng",
    time: "10D : 23H : 11M",
    reward: "5,000 $VI",
  },
  {
    img: "/image/mision2.png",
    title: "Chụp hình cửa hàng mới",
    time: "10D : 23H : 11M",
    reward: "5,000 $VI",
  },
  // Thêm nhiệm vụ nếu muốn test dots
  {
    img: "/image/mission1.png",
    title: "Check-in cửa hàng",
    time: "5D : 12H : 30M",
    reward: "3,000 $VI",
  },
];

const ITEMS_PER_PAGE = 2;

export const Mission: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Tính số trang (mỗi trang 2 nhiệm vụ)
  const totalPages = Math.ceil(missions.length / ITEMS_PER_PAGE);

  // Lấy nhiệm vụ cho trang hiện tại
  const missionsToShow = missions.slice(
    current * ITEMS_PER_PAGE,
    current * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <>
    <div
      style={{
        padding: "16px 0 0 0",
        background: "#FFCC99",
        borderRadius: 0,
        width: "100%",
        margin: "16px 0",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12, marginLeft: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 20, color: "#232B3A", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: 6 }}>💎</span>
          Nhiệm vụ nhận thưởng
        </span>
        <span style={{ marginLeft: "auto", marginRight: 8 }}
        onClick={() => navigate("/missionPage")}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="14" fill="#F2C2F7" />
            <path d="M8.16602 13.9998H19.8327M19.8327 13.9998L13.9993 8.1665M19.8327 13.9998L13.9993 19.8332" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {/* Missions */}
      <div style={{ display: "flex", gap: 16, justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
        {missionsToShow.map((m, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: 24,
              boxShadow: "0 2px 8px #0001",
              width: 160,
              maxWidth: 180,
              padding: "0 0 16px 0",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <img
                src={m.img}
                alt={m.title}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "cover",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                }}
              />
              <div style={{
                position: "absolute",
                top: 8,
                left: 40,
                background: "#fff",
                color: "rgba(0,0,0,0.7)",
                borderRadius: 12,
                padding: "2px 10px",
                fontSize: 12,
                fontWeight: 700,
              }}>
                {m.time}
              </div>
            </div>
            <div style={{ padding: "12px 12px 0 12px", width: "100%" }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#232B3A", marginBottom: 4 }}>
                {m.title}
              </div>
              <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 8 }}>
                <span role="img" aria-label="gift">🎁</span> {m.reward}
              </div>
            </div>
            <button
              style={{
                marginTop: 8,
                background: "#FFE6FB",
                color: "#FF6AD6",
                border: "none",
                borderRadius: 12,
                padding: "8px 0",
                width: "80%",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Tham gia
            </button>
          </div>
        ))}
      </div>
      {/* Dots */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 8, gap: 8 }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: idx === current ? "#B600C4" : "#E5E5E5",
                display: "inline-block",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      )} 
           
    </div>
    {/* Banner dưới cùng */}
      <div
        style={{
          margin: "16px auto 0 auto",
          width: "90%",
          minWidth: 260,
          maxWidth: 360,
          height: 78,
          background: "linear-gradient(90deg, #FFD7D6 0%, #FDAAC6 100%)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
       
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#3D0043", marginLeft: 10 }}>
            Triển khai <span style={{ fontStyle: "italic", color: "#fff" }}>miễn phí 24h</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#3D0043" ,marginLeft: 10}}>
            chương trình tích điểm<br />cho doanh nghiệp
          </div>
        </div>
        <button
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            background: "#fff",
            color: "#3D0043",
            border: "none",
            borderRadius: 64,
            padding: "8px 18px",
            fontWeight: 700,
            fontSize: 15,
            boxShadow: "0 2px 8px #0001",
            cursor: "pointer",
          }}
        >
          Thử ngay
        </button> 
        <img
          src="/image/gift-dynamic-01.png"
          alt="gift"
          style={{
            width: 100,
            height: 100,
            marginLeft: 16,
            marginRight: 0,
            marginTop: 70,
            objectFit: "contain",
          }}
        />
      </div>
      
      </>
    
  );
};

export default Mission;