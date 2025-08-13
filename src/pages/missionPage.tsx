import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const missions = [
  {
    img: "/image/mission1.png",
    title: "Review sản phẩm nhận thưởng",
    time: "10D : 23H : 11M",
    reward: "5,000 ",
    brandLogo: "/image/logo.png",
    brandName: "Vidimi",
    endTime: "10D : 23H : 11M",
    joined: 100,
    totalGift: 1000,
    currentGift: 100,
    conditions: [
      "Valid for a single use on QuickCart in Vietnam only",
      "Applicable to product cost and delivery charges only",
      "Voucher must be used within the indicated validity period. No extensions permitted",
      "Cannot be combined with other vouchers, offers, or promotions",
    ],
    rewardUnit: "$VI",
  },
  {
    img: "/image/mision2.png",
    title: "Chụp hình cửa hàng mới",
    time: "10D : 23H : 11M",
    reward: "5,000 ",
    brandLogo: "/image/logo2.png",
    brandName: "Beloved & Beyond",
    endTime: "10D : 23H : 11M",
    joined: 50,
    totalGift: 500,
    currentGift: 50,
    conditions: [
      "Chỉ áp dụng cho cửa hàng mới",
      "Ảnh phải rõ nét, không chỉnh sửa",
    ],
    rewardUnit: "$VI",
  },
  {
    img: "/image/mission1.png",
    title: "Check-in cửa hàng",
    time: "5D : 12H : 30M",
    reward: "3,000 ",
    brandLogo: "/image/logo.png",
    brandName: "The Brownies",
    endTime: "5D : 12H : 30M",
    joined: 20,
    totalGift: 200,
    currentGift: 20,
    conditions: [
      "Check-in tại cửa hàng bất kỳ",
      "Chụp ảnh cùng sản phẩm",
    ],
    rewardUnit: "$VI",
  },
];

export const MissionPage: React.FC = () => {
  const [tab, setTab] = useState(0); // 0: Nhiệm vụ, 1: Đã tham gia
  const navigate = useNavigate();

  // Hiển thị tất cả nhiệm vụ khi ở tab 0
  const missionsToShow = tab === 0 ? missions : [];

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ padding: "18px 0 0 0", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 18px" }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#232B3A" ,display: "flex", alignItems: "center",marginTop: "40px" }}>
            <span
    style={{ marginRight: 22, cursor: "pointer", display: "flex", alignItems: "center" }}
    onClick={() => navigate(-1)}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675" stroke="#1F2A44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
            Nhiệm vụ
          </span>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginTop: 18, padding: "0 18px", borderBottom: "1px solid #F2F2F2" }}>
          <button
            onClick={() => setTab(0)}
            style={{
              flex: 1,
              padding: "8px 0",
              border: "none",
              background: "none",
              fontWeight: 700,
              fontSize: 17,
              color: tab === 0 ? "#232B3A" : "#7A89A8",
              borderBottom: tab === 0 ? "3px solid #B600C4" : "3px solid transparent",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Nhiệm vụ
          </button>
          <button
            onClick={() => setTab(1)}
            style={{
              flex: 1,
              padding: "8px 0",
              border: "none",
              background: "none",
              fontWeight: 700,
              fontSize: 17,
              color: tab === 1 ? "#232B3A" : "#7A89A8",
              borderBottom: tab === 1 ? "3px solid #B600C4" : "3px solid transparent",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Đã tham gia
          </button>
        </div>
      </div>
      {/* Missions */}
      <div style={{ padding: "24px 18px 0 18px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            marginBottom: 8,
          }}
        >
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
                cursor: "pointer",
              }}
              onClick={() => navigate(`/mission/${idx}`)}
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
                  background: "#FFE6CC",
                  color: "#FF6B00",
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
        {/* Nếu tab Đã tham gia chưa có dữ liệu */}
        {tab === 1 && (
          <div style={{ textAlign: "center", color: "#7A89A8", marginTop: 32 }}>
            Bạn chưa tham gia nhiệm vụ nào.
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionPage;