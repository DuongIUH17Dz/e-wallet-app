import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { events } from "./eventpage";

const DetailEvent: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const event = events[Number(id)];

  if (!event) return <div>Không tìm thấy sự kiện</div>;

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header tím + nút back */}
      <div style={{ background: "#B600C4", height: 140, position: "relative", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <span
          style={{
            position: "absolute",
            top: 38,
            left: 18,
            cursor: "pointer",
            zIndex: 2,
            background: "#fff",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => navigate(-1)}
        >
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <img src={event.logo} alt={event.title} style={{
          position: "absolute",
          bottom: 20,
          right: 130,
          width: 100,
          height: 100,
          objectFit: "contain",
        }} />
      </div>
      {/* Nội dung */}
      <div style={{ padding: "24px 18px 0 18px" }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: "#232B3A", marginBottom: 8 }}>
          {event.title}
        </div>
        <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 4 }}>
          <span role="img" aria-label="clock">🕒</span> {event.time}
        </div>
        <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 16 }}>
          <span role="img" aria-label="location">📍</span> {event.location}
        </div>
        {/* Các nút */}
        <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
          <button style={{
            background: "#fff",
            border: "1px solid #c4bfbfff",
            borderRadius: 48,
            padding: "8px 18px",
            fontWeight: 700,
            color: "#232B3A",
            fontSize: 15,
            cursor: "pointer",
            width:150,
            height:44
          }}>Nhắc tôi</button>
          <button style={{
            background: "#fff",
            border: "1px solid #c2bfbfff",
            borderRadius: 48,
            padding: "8px 18px",
            fontWeight: 700,
            color: "#232B3A",
            fontSize: 15,
            cursor: "pointer",
            width:150,
            height:44
          }}>Xem bản đồ</button>
          <span style={{
            background: "#fff",
            border: "1px solid #E5E5E5",
            borderRadius: 12,
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}>
            {/* Nút share SVG */}
            <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
              <g filter="url(#filter0_d_188_2091)">
                <rect x="4" width="28" height="28" rx="14" fill="white" shapeRendering="crispEdges"/>
                <path d="M11.334 13.9998V20.6665C11.334 21.1085 11.5096 21.5325 11.8221 21.845C12.1347 22.1576 12.5586 22.3332 13.0007 22.3332H23.0007C23.4427 22.3332 23.8666 22.1576 24.1792 21.845C24.4917 21.5325 24.6673 21.1085 24.6673 20.6665V13.9998M21.334 8.99984L18.0007 5.6665M18.0007 5.6665L14.6673 8.99984M18.0007 5.6665V16.4998" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_188_2091" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_188_2091"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_188_2091" result="shape"/>
                </filter>
              </defs>
            </svg>
          </span>
        </div>
        {/* Nội dung mô tả */}
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#232B3A" }}>Nội dung:</div>
        <div style={{ fontSize: 15, color: "#232B3A", marginBottom: 18 }}>
          Sự kiện Workshop Vidimi với chủ đề Customer Loyalty sẽ mang lại những góc nhìn đa dạng về cách xây dựng và chăm sóc khách hàng trung thành cho doanh nghiệp; và đặc biệt là có nhiều phần quà tặng hấp dẫn đang chờ đến bạn. Tham gia ngay!
        </div>
        {/* Các bước tham gia */}
        <div>
          {event.steps.map((step, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <span style={{ marginRight: 10 }}>
                {/* SVG bước hoàn thành */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="18" fill={step.done ? "#3D7CFF" : "#D6D6D6"}/>
                  <path d="M24.6673 13L15.5007 22.1667L11.334 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#232B3A" }}>{step.label}</div>
                <div style={{ fontSize: 14, color: "#7A89A8" }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Nút tham gia */}
        <div style={{ margin: "32px 0 24px 0" }}>
          <button style={{
            width: "100%",
            background: "#B600C4",
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: "16px 0",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
          }}>
            Tham gia ngay!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;