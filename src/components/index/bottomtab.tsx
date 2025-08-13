import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
const tabs = [
  {
    label: "Trang chủ",
    icon: <img src="/image/logo2.png" alt="Trang chủ" style={{ width: 22, height: 22 }} />,
    active: true,
  },
  {
    label: "Khám phá",
    icon: (
      <svg width="22" height="22" viewBox="0 0 25 24" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M8.79883 18L1.79883 22V6L8.79883 2M8.79883 18L16.7988 22M8.79883 18V2M16.7988 22L23.7988 18V2L16.7988 6M16.7988 22V6M16.7988 6L8.79883 2" stroke="#7A89A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="white" transform="translate(0.798828)"/>
          </clipPath>
        </defs>
      </svg>
    ),
    active: false,
  },
  {
    label: "Quét QR",
    icon: (
      <svg width="22" height="22" viewBox="0 0 60 60" fill="none">
        <rect x="3" y="3" width="54" height="54" rx="27" fill="url(#paint0_linear)"/>
        <rect x="3" y="3" width="54" height="54" rx="27" stroke="white" strokeWidth="6"/>
        <path d="M26 21H23C22.4696 21 21.9609 21.2107 21.5858 21.5858C21.2107 21.9609 21 22.4696 21 23V26M39 26V23C39 22.4696 38.7893 21.9609 38.4142 21.5858C38.0391 21.2107 37.5304 21 37 21H34M34 39H37C37.5304 39 38.0391 38.7893 38.4142 38.4142C38.7893 38.0391 39 37.5304 39 37V34M21 34V37C21 37.5304 21.2107 38.0391 21.5858 38.4142C21.9609 38.7893 22.4696 39 23 39H26" stroke="#F9E6FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 30H40.5" stroke="#F9E6FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear" x1="30" y1="6" x2="30" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E600FF"/>
            <stop offset="1" stopColor="#B600C4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    active: false,
    highlight: true,
  },
  {
    label: "Cộng đồng",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M16.998 21V19C16.998 17.9391 16.5766 16.9217 15.8265 16.1716C15.0763 15.4214 14.0589 15 12.998 15H4.99805C3.93718 15 2.91977 15.4214 2.16962 16.1716C1.41947 16.9217 0.998047 17.9391 0.998047 19V21M22.998 21V19C22.9974 18.1137 22.7024 17.2528 22.1594 16.5523C21.6164 15.8519 20.8562 15.3516 19.998 15.13M15.998 3.13C16.8585 3.3503 17.6211 3.8507 18.1657 4.55231C18.7103 5.25392 19.0059 6.11683 19.0059 7.005C19.0059 7.89317 18.7103 8.75608 18.1657 9.45769C17.6211 10.1593 16.8585 10.6597 15.998 10.88M12.998 7C12.998 9.20914 11.2072 11 8.99805 11C6.78891 11 4.99805 9.20914 4.99805 7C4.99805 4.79086 6.78891 3 8.99805 3C11.2072 3 12.998 4.79086 12.998 7Z" stroke="#7A89A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="22" height="22" fill="white" transform="translate(-0.00195312)"/>
          </clipPath>
        </defs>
      </svg>
    ),
    active: false,
  },
  {
    label: "Tài khoản",
    icon: (

      <svg width="22" height="22" viewBox="0 0 25 24" fill="none">
        <path d="M20.4004 21V19C20.4004 17.9391 19.979 16.9217 19.2288 16.1716C18.4787 15.4214 17.4613 15 16.4004 15H8.40039C7.33952 15 6.32211 15.4214 5.57196 16.1716C4.82182 16.9217 4.40039 17.9391 4.40039 19V21M16.4004 7C16.4004 9.20914 14.6095 11 12.4004 11C10.1913 11 8.40039 9.20914 8.40039 7C8.40039 4.79086 10.1913 3 12.4004 3C14.6095 3 16.4004 4.79086 16.4004 7Z" stroke="#7A89A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    active: false,
  },
];

export const BottomTab: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        background: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.04)",
        padding: "12px 0 0 0",
        position: "fixed",      
        left: 0,                
        right: 0,               
        bottom: 0,              
        zIndex: 100,            
      }}
    >
      {tabs.map((tab, idx) => (
        <div
          key={tab.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            color: tab.active ? "#B600C4" : "#7A89A8",
            fontWeight: tab.active ? 700 : 500,
            fontSize: 16,
            paddingBottom: tab.label === "Quét QR" ? 0 : 0,
            position: "relative",
            
            
          }}
          onClick={() => {
            if (tab.label === "Tài khoản") {
              navigate("/account");
            }
            else if (tab.label === "Trang chủ") {
              navigate("/");
            } else if (tab.label === "Khám phá") {
              navigate("/explore");
            } else if (tab.label === "Quét QR") {
              navigate("/scan");
            } else if (tab.label === "Cộng đồng") {
              navigate("/community");
            }
            // Thêm điều hướng cho các tab khác nếu muốn
          }}
        >
          <div
            style={{
              background: tab.highlight
                ? "linear-gradient(180deg, #E600FF 0%, #B600C4 100%)"
                : "transparent",
              borderRadius: tab.highlight ? "50%" : "none",
              padding: tab.highlight ? 8 : 0,
              marginBottom: 4,
              boxShadow: tab.highlight ? "0 2px 8px #E600FF33" : "none",
              border: tab.highlight ? "4px solid #fff" : "none",
              // XÓA position và top để icon không bị đẩy xuống
            }}
          >
            {tab.icon}
          </div>
          <span
            style={{
              
              color: tab.active ? "#B600C4" : "#7A89A8",
              fontWeight: tab.active ? 700 : 500,
              fontSize: 12,
            }}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomTab;