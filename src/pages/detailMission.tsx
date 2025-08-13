import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { missions } from "./missionPage";

export const DetailMission: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const mission = missions[Number(id)];

  if (!mission) return <div>Không tìm thấy nhiệm vụ</div>;

  const progress = Math.round((mission.currentGift / mission.totalGift) * 100);

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Ảnh */}
      <div style={{ position: "relative" }}>
        
        {/* Nút back */}
        <span
          style={{
            position: "absolute",
            top: 98,
            left: 8,
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => navigate(-1)}
        >
          {/* SVG nút back */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g filter="url(#filter0_d_188_2093)">
              <rect x="4" width="28" height="28" rx="14" fill="white" shapeRendering="crispEdges"/>
              <path d="M23.8327 13.9998H12.166M12.166 13.9998L17.9993 19.8332M12.166 13.9998L17.9993 8.1665" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="filter0_d_188_2093" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_188_2093"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_188_2093" result="shape"/>
              </filter>
            </defs>
          </svg>
        </span>
        {/* Nút share */}
        <span
          style={{
            position: "absolute",
            top: 98,
            right: 8,
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => alert("Share")}
        >
          {/* SVG nút share */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
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
      <div style={{ position: "relative" }}>
    <img src={mission.img} alt={mission.title} style={{ width: "100%", height: 220, objectFit: "cover" }} />
    {/* ...nút back và share SVG như bạn đã có... */}
  </div>
  {/* Nội dung chi tiết */}
  <div style={{ padding: "24px 18px 0 18px" }}>
    
    {/* Brand */}
    <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <text style={{ fontWeight: 400, fontSize: 12, color: "#232B3A", marginBottom: 8 }}>Đăng bởi: </text>
        <img
            src={mission.brandLogo}
            alt={mission.brandName}
            style={{ width: 24, height: 24, borderRadius: "50%", marginRight: 8 }}
        />
      <span style={{ fontWeight: 700, color: "#232B3A", fontSize: 15 }}>{mission.brandName}</span>
    </div>
    {/* Tiêu đề */}
    <div style={{ fontWeight: 700, fontSize: 22, color: "#232B3A", marginBottom: 8 }}>
      {mission.title}
    </div>
    {/* Thời gian & số người tham gia */}
    <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 4 }}>
      <span role="img" aria-label="clock">🕒</span> Kết thúc vào <b>{mission.endTime}</b>
    </div>
    <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 16 }}>
      <span role="img" aria-label="user">👤</span> Đã tham gia: <b>{mission.joined} người</b>
    </div>
    {/* Progress quà tặng */}
    <div style={{
      background: "#FFE6CC",
      borderRadius: 16,
      padding: "16px 18px",
      marginBottom: 18,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#232B3A" }}>Số lượng quà tặng</div>
      <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 8 }}>
        {mission.currentGift}/{mission.totalGift}
      </div>
      <div style={{ width: "100%", height: 8, background: "#FFF", borderRadius: 8 }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "#FF6B00",
          borderRadius: 8,
          transition: "width 0.3s",
        }} />
      </div>
      {/* Icon quà tặng mờ bên phải */}
      <span style={{
        position: "absolute",
        right: 18,
        top: 18,
        opacity: 0.15,
        fontSize: 48,
      }}>
        🎁
      </span>
    </div>
    {/* Điều kiện tham gia */}
    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#232B3A" }}>Điều kiện tham gia:</div>
    <div style={{ fontSize: 15, color: "#232B3A", marginBottom: 24, whiteSpace: "pre-line" }}>
      {mission.conditions.join("\n")}
    </div>
    {/* Phần thưởng + nút */}
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 24,
      background: "#FFF",
      borderRadius: 12,
      padding: "12px 0",
    }}>
        
      <span style={{ fontWeight: 700, fontSize: 22, color: "#B600C4" }}><span style={{ fontSize: 12, color: "#7A89A8" }}>Phần thưởng:<br></br></span>
        {mission.reward} <span style={{ fontSize: 15, color: "#7A89A8" }}>{mission.rewardUnit}</span>
      </span>
      <button
        style={{
          background: "#FFE6CC",
          color: "#FF6B00",
          border: "none",
          borderRadius: 12,
          padding: "12px 24px",
          fontWeight: 700,
          fontSize: 17,
          cursor: "pointer",
        }}
      >
        Tham gia nhiệm vụ
      </button>
    </div>
  </div>
    </div>
  );
};

export default DetailMission;