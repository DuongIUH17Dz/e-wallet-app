import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const brands = [
  {
    logo: "/image/brand1.png",
    amount: "12,000",
    unit: "$BB",
  },
  {
    logo: "/image/brand2.png",
    amount: "1,000",
    unit: "$Point",
  },
  {
    logo: "/image/brand3.png",
    amount: "1,500",
    unit: "$PO",
  },
];

export const PointWallet: FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "16px 0 0 0" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12, marginLeft: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 20, color: "#232B3A" }}>
          $ Ví điểm của bạn
        </span>
        <span style={{ marginLeft: "auto", marginRight: 8 }}
         onClick={() => navigate("/walletPage")}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="14" fill="#F2C2F7"/>
            <path d="M8.16602 13.9998H19.8327M19.8327 13.9998L13.9993 8.1665M19.8327 13.9998L13.9993 19.8332" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
       </div>
      <div
      className="tabs-scroll"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 16,
          paddingBottom: 2,          
        }}
      >
        {brands.map((b, idx) => (
          <div
            key={idx}
            style={{
              minWidth: 140,
              background: "#fff",
              borderRadius: 24,
              boxShadow: "0 2px 8px #0001",
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              gap: 12,
            }}
          >
            <img
              src={b.logo}
              alt={b.unit}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#232B3A" }}>
                {b.amount}
              </div>
              <div style={{ fontSize: 14, color: "#7A89A8" }}>{b.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointWallet;