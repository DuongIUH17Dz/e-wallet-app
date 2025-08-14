import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const gift = {
  img: "/image/voucher1.png",
  title: "Voucher giảm 10K The Brownies",
  expired: "30/12/2025",
  address: "232/6 Võ Thị Sáu",
  desc: "Relax at home, and let QuickCart do the rest!",
  terms: [
    "Valid for a single use on QuickCart in Vietnam only",
    "Applicable to product cost and delivery charges only",
    "Voucher must be used within the indicated validity period. No extensions permitted",
    "Cannot be combined with other vouchers, offers, or discounts in a single order",
    "Not redeemable for cash or other forms of payment",
    "Voucher is non-transferable, non-refundable, and non-exchangeable",
  ],
  point: 5000,
  unit: "$VI",
};

const ExchangeGift: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Ảnh */}
      <div style={{ position: "relative" }}>
        <img
          src={gift.img}
          alt={gift.title}
          style={{ width: "100%", height: 180, objectFit: "cover" }}
        />
        {/* Nút back */}
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 12,
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => navigate(-1)}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g filter="url(#filter0_d_188_2093)">
              <rect x="4" width="28" height="28" rx="14" fill="white" />
              <path d="M23.8327 13.9998H12.166M12.166 13.9998L17.9993 19.8332M12.166 13.9998L17.9993 8.1665" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="filter0_d_188_2093" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse">
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
      </div>
      {/* Nội dung chi tiết */}
      <div style={{ padding: "24px 18px 0 18px" }}>
        {/* Tiêu đề */}
        <div style={{ fontWeight: 700, fontSize: 22, color: "#232B3A", marginBottom: 8 }}>
          {gift.title}
        </div>
        {/* HSD & Địa chỉ */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 12 }}>
          <span style={{ fontSize: 15, color: "#7A89A8", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M12.5 5.33301C12.5 4.27214 12.0786 3.25473 11.3284 2.50458C10.5783 1.75444 9.56087 1.33301 8.5 1.33301C7.43913 1.33301 6.42172 1.75444 5.67157 2.50458C4.92143 3.25473 4.5 4.27214 4.5 5.33301C4.5 9.99967 2.5 11.333 2.5 11.333H14.5C14.5 11.333 12.5 9.99967 12.5 5.33301Z" fill="#B600C4"/>
              <path d="M9.65333 13.9997C9.53613 14.2017 9.3679 14.3694 9.16548 14.486C8.96307 14.6026 8.73359 14.664 8.5 14.664C8.26641 14.664 8.03693 14.6026 7.83452 14.486C7.6321 14.3694 7.46387 14.2017 7.34667 13.9997" fill="#B600C4"/>
              <path d="M9.65333 13.9997C9.53613 14.2017 9.3679 14.3694 9.16548 14.486C8.96307 14.6026 8.73359 14.664 8.5 14.664C8.26641 14.664 8.03693 14.6026 7.83452 14.486C7.63211 14.3694 7.46387 14.2017 7.34667 13.9997M12.5 5.33301C12.5 4.27214 12.0786 3.25473 11.3284 2.50458C10.5783 1.75444 9.56087 1.33301 8.5 1.33301C7.43913 1.33301 6.42172 1.75444 5.67157 2.50458C4.92143 3.25473 4.5 4.27214 4.5 5.33301C4.5 9.99967 2.5 11.333 2.5 11.333H14.5C14.5 11.333 12.5 9.99967 12.5 5.33301Z" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            HSD: {gift.expired}
          </span>
          <span style={{ fontSize: 15, color: "#7A89A8", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
              <g clipPath="url(#clip0_288_2860)">
                <path d="M2.5 7.33301L15.1667 1.33301L9.16667 13.9997L7.83333 8.66634L2.5 7.33301Z" fill="#B600C4" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_288_2860">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
            {gift.address}
          </span>
        </div>
        {/* Button Nhắc tôi + Xem bản đồ */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <button
            style={{
              flex: 1,
              background: "#F7F7FB",
              color: "#B600C4",
              border: "none",
              borderRadius: 12,
              padding: "10px 0",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
            onClick={() => alert("Nhắc tôi")}
          >
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M12.5 5.33301C12.5 4.27214 12.0786 3.25473 11.3284 2.50458C10.5783 1.75444 9.56087 1.33301 8.5 1.33301C7.43913 1.33301 6.42172 1.75444 5.67157 2.50458C4.92143 3.25473 4.5 4.27214 4.5 5.33301C4.5 9.99967 2.5 11.333 2.5 11.333H14.5C14.5 11.333 12.5 9.99967 12.5 5.33301Z" fill="#B600C4"/>
              <path d="M9.65333 13.9997C9.53613 14.2017 9.3679 14.3694 9.16548 14.486C8.96307 14.6026 8.73359 14.664 8.5 14.664C8.26641 14.664 8.03693 14.6026 7.83452 14.486C7.6321 14.3694 7.46387 14.2017 7.34667 13.9997" fill="#B600C4"/>
              <path d="M9.65333 13.9997C9.53613 14.2017 9.3679 14.3694 9.16548 14.486C8.96307 14.6026 8.73359 14.664 8.5 14.664C8.26641 14.664 8.03693 14.6026 7.83452 14.486C7.63211 14.3694 7.46387 14.2017 7.34667 13.9997M12.5 5.33301C12.5 4.27214 12.0786 3.25473 11.3284 2.50458C10.5783 1.75444 9.56087 1.33301 8.5 1.33301C7.43913 1.33301 6.42172 1.75444 5.67157 2.50458C4.92143 3.25473 4.5 4.27214 4.5 5.33301C4.5 9.99967 2.5 11.333 2.5 11.333H14.5C14.5 11.333 12.5 9.99967 12.5 5.33301Z" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Nhắc tôi
          </button>
          <button
            style={{
              flex: 1,
              background: "#F7F7FB",
              color: "#B600C4",
              border: "none",
              borderRadius: 12,
              padding: "10px 0",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
            onClick={() => alert("Xem bản đồ")}
          >
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
              <g clipPath="url(#clip0_288_2860)">
                <path d="M2.5 7.33301L15.1667 1.33301L9.16667 13.9997L7.83333 8.66634L2.5 7.33301Z" fill="#B600C4" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_288_2860">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
            Xem bản đồ
          </button>
        </div>
        {/* Mô tả */}
        <div style={{ fontSize: 15, color: "#232B3A", marginBottom: 16 }}>
          {gift.desc}
        </div>
        {/* Điều kiện/Terms */}
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#232B3A" }}>Terms and Conditions</div>
        <div style={{ fontSize: 15, color: "#232B3A", marginBottom: 24, whiteSpace: "pre-line" }}>
          {gift.terms.map((t, idx) => (
            <div key={idx}>{t}</div>
          ))}
        </div>
      </div>
      {/* Chọn & Đổi quà */}
      <div style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        background: "#fff",
        boxShadow: "0 -2px 8px #0001",
        padding: "16px 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        zIndex: 10,
      }}>
        <button
          style={{
            flex: 1,
            background: "#F7F7FB",
            color: "#B600C4",
            border: "none",
            borderRadius: 12,
            padding: "12px 0",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Chọn
        </button>
        <span style={{
          background: "#F7F7FB",
          color: "#B600C4",
          borderRadius: 12,
          padding: "12px 24px",
          fontWeight: 700,
          fontSize: 16,
        }}>
          {gift.point.toLocaleString()} {gift.unit}
        </span>
        <button
          style={{
            flex: 1,
            background: "#B600C4",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "12px 0",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={() => alert("Đổi quà thành công!")}
        >
          Đổi quà
        </button>
      </div>
    </div>
  );
};

export default ExchangeGift;