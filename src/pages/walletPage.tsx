import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dữ liệu ví, bổ sung thêm các trường cần thiết
const wallets = [
  {
    logo: "/image/brand1.png",
    name: "Vidimi",
    address: "232/6 Võ Thị Sáu",
    tags: ["$VI", "$BB", "Nội bộ", "$"],
    amount: "16,234",
    unit: "$VI",
    tem: 2,
  },
  {
    logo: "/image/brand2.png",
    name: "Beloved & Beyond",
    address: "232/6 Võ Thị Sáu",
    tags: ["$VI", "$BB", "Nội bộ", "$"],
    amount: "16,234",
    unit: "$BB",
    tem: 2,
  },
  {
    logo: "/image/brand3.png",
    name: "The Brownies",
    address: "không có",
    tags: ["$VI", "Nội bộ"],
    amount: "1,000",
    unit: "$POINT",
    tem: 1,
  },
];

export const WalletPage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Lọc ví theo tên
  const filteredWallets = wallets.filter(w =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ padding: "18px 0 0 0", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0 18px", marginTop: 40 }}>
  {/* Nút back */}
  <span
    style={{ marginRight: 22, cursor: "pointer", display: "flex", alignItems: "center" }}
    onClick={() => navigate(-1)}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675" stroke="#1F2A44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
  {/* Tiêu đề */}
  <span style={{ fontSize: 22, fontWeight: 700, color: "#232B3A", flex: 1 }}>
    Ví điểm của bạn
  </span>
  {/* Hướng dẫn ví */}
  <span
    style={{
      color: "#B600C4",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer",
      marginLeft: 12,
    }}
    onClick={() => alert("Hướng dẫn ví")}
  >
    Hướng dẫn ví
  </span>
</div>
      </div>
      {/* Search */}
      <div style={{ padding: "18px", paddingBottom: 0 }}>
        <input
          type="text"
          placeholder="Tìm ví ..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid #E5E5E5",
            fontSize: 16,
            outline: "none",
            marginBottom: 12,
          }}
        />
      </div>
      {/* Wallet List */}
      <div style={{ padding: "0 18px" }}>
        {filteredWallets.map((w, idx) => (
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
            {/* Logo */}
            <img
              src={w.logo}
              alt={w.name}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: 16,
                marginTop:-80
              }}
            />
            
            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: "#232B3A" }}>
                {w.name}
              </div>
              <div style={{ fontSize: 14, color: "#7A89A8", marginBottom: 6 }}>
                {w.address}
              </div>
              <div style={{ display: "flex", gap: 4, marginBottom: 8,marginLeft:-55 }}>
  {w.tags.map((tag, i) => (
    <span
      key={i}
      style={{
        background:
          tag === "$VI"
            ? "#FFE6FB"
            : tag === "$BB"
            ? "#FFD7D6"
            : tag === "Nội bộ"
            ? "#E6F0FF"
            : tag === "$"
            ? "#FFE6C2"
            : "#FFF7E6",
        color:
          tag === "$VI"
            ? "#B600C4"
            : tag === "$BB"
            ? "#FF6A6A"
            : tag === "Nội bộ"
            ? "#3D7CFF"
            : tag === "$"
            ? "#FFB600"
            : "#FFB600",
        fontWeight: 500,
        fontSize: 12,
        borderRadius: 12,
        padding: "2px 16px",
        display: "inline-block",
       
        whiteSpace: "nowrap",
        textAlign: "center",
      }}
    >
      {tag}
    </span>
  ))}
</div>
              <div
  style={{
    display: "grid",
    gridTemplateColumns: "60px 1fr 40px 32px",
    alignItems: "center",
    fontWeight: 700,
    fontSize: 18,
    color: "#232B3A",
    marginTop: 8,
  }}
>
  {/* Đơn vị */}
  <span style={{ fontSize: 14, color: "#7A89A8",marginLeft:-55 }}>{w.unit}</span>
  {/* Số lượng */}
  <span style={{ textAlign: "left" }}>{w.amount}</span>
  {/* Tem label */}
  <span style={{ fontSize: 14, color: "#7A89A8", textAlign: "center" }}>Tem</span>
  {/* Số tem */}
  <span style={{ fontWeight: 700, fontSize: 18, color: "#080808", textAlign: "right" }}>{w.tem}</span>
</div>
            </div>
            {/* Tem */}
            
            {/* More icon */}
            <span style={{ marginLeft: 10, cursor: "pointer",marginTop:-73 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#F5F5F5"/>
              <path d="M14 20L18 16L14 12" stroke="#7A89A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>

            </span>
          </div>
        ))}
        {filteredWallets.length === 0 && (
          <div style={{ textAlign: "center", color: "#7A89A8", marginTop: 32 }}>
            Không tìm thấy ví nào.
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletPage;