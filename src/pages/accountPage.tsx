import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BottomTab } from "../components/index/bottomtab";

const AccountPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div style={{ background: "#F7F7FB", minHeight: "100vh", paddingBottom: 24 }}>
      {/* Header avatar + thông tin tài khoản */}
<div style={{
  background: "linear-gradient(180deg, #B600C4 0%, #66006D 100%)",
  borderBottomLeftRadius: 54,
  borderBottomRightRadius: 54,
  padding: "32px 0 24px 0",
  position: "relative",
  textAlign: "center",
  height:220
}}>
  {/* Avatar logo */}
  <div style={{
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translateX(-50%)",
    width: 72,
    height: 72,
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px #0001",
    zIndex: 2,
    marginTop: 36, // Để avatar nằm ở giữa header
  }}>
    <img
      src="/image/logo.png"
      alt="avatar"
      style={{
        width: 48,
        height: 48,
        objectFit: "contain",
        borderRadius: "50%",
      }}
    />
  </div>
  {/* Thông tin tài khoản */}
  <div style={{
    marginTop: 46,
    background: "#fff",
    borderRadius: 20,
    boxShadow: "0 2px 8px #0001",
    padding: "24px 0 0 0",
    width: 320,
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  }}>
    <div style={{ fontWeight: 700, fontSize: 22, color: "#232B3A", marginBottom: 8 }}>
      Võ Uy Danh
    </div>
    <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 4 }}>
      vouydanh@gmail.com
    </div>
    <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 16 }}>
      +84903535693
    </div>
    <div style={{
      display: "flex",
      borderTop: "1px solid #F0F0F0",
      background: "#fff",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      overflow: "hidden",
    }}>
      <div style={{
        flex: 1,
        padding: "12px 0",
        borderRight: "1px solid #F0F0F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontWeight: 700,
        color: "#B600C4",
        fontSize: 15,
        cursor: "pointer",
      }}>
        <span role="img" aria-label="gift">🎁</span> Kho quà
      </div>
      <div style={{
        flex: 1,
        padding: "12px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontWeight: 700,
        color: "#B600C4",
        fontSize: 15,
        cursor: "pointer",
      }}>
        <span role="img" aria-label="history">🕑</span> Lịch sử
      </div>
    </div>
  </div>
</div>
      {/* Quản lý chi tiêu cá nhân */}
      <div
        style={{
          margin: "74px 18px 0 18px",
          background: "linear-gradient(90deg, #B600C4 0%, #FFB600 100%)",
          borderRadius: 16,
          padding: "16px 18px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 20,
          position: "relative",
          cursor: "pointer",
          overflow: "hidden", // Thêm dòng này để ảnh không bị tràn ra ngoài
          minHeight: 80,      // Đảm bảo chiều cao tối thiểu cho thẻ
        }}
      >
        <div style={{ flex: 1 }}>
            <span>Quản lý chi tiêu</span>
            <br />
            <span style={{ marginLeft:30}}>cá nhân</span>
        </div>
        <div style={{
          position: "absolute",
          right: 18,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          height: 48,
        }}>
          <div style={{
      width: 160,
      height: 160,
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      background: "transparent",
    }}>
      <img
        src="/image/wallet-dynamic-02.png"
        alt="wallet"
        style={{
          width: 100,
          height: 108,
          objectFit: "cover",
        }}
      />
    </div>
          {/* SVG mũi tên */}
          <span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="14" fill="white"/>
              <path d="M8.16602 13.9993H19.8327M19.8327 13.9993L13.9993 8.16602M19.8327 13.9993L13.9993 19.8327" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      {/* Tiện ích */}
      <div style={{ margin: "24px 18px 0 18px" }}>
        <div style={{ fontWeight: 700, fontSize: 16, color: "#232B3A", marginBottom: 12 }}>Tiện ích</div>
        <div style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 8px #0001",
          padding: "8px 0",
        }}>
          {[
            { icon: "🌐", label: "Ngôn ngữ" },
            { icon: "🔔", label: "Thông báo" },
            { icon: "👤", label: "Thông tin cá nhân" },
            { icon: "🏢", label: "Doanh nghiệp của tôi" },
            { icon: "⭕", label: "Circle" },
            { icon: "📱", label: "Mã QR giới thiệu" },
            { icon: "👥", label: "Người nhận lời mời" },
            { icon: "🔒", label: "Cài đặt FaceID" },
            { icon: "🚪", label: "Thoát" },
          ].map((item, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 18px",
              borderBottom: idx < 8 ? "1px solid #F0F0F0" : "none",
              cursor: "pointer",
            }}>
              <span style={{ fontSize: 22, color: "#B600C4", width: 32 }}>{item.icon}</span>
              <span style={{ fontSize: 16, color: "#232B3A", flex: 1 }}>{item.label}</span>
              <span style={{ fontSize: 18, color: "#B600C4" }}>&gt;</span>
            </div>
          ))}
        </div>
      </div>
      <BottomTab />
    </div>
    
  );
};

export default AccountPage;