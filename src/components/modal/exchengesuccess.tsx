import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onUseNow: () => void;
  onLater: () => void;
}

const ExchangeSuccessModal: React.FC<Props> = ({ open, onClose, onUseNow, onLater }) => {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.38)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 18,
        width: 320,
        maxWidth: "90vw",
        boxShadow: "0 2px 16px #0002",
        padding: "32px 18px 18px 18px",
        position: "relative",
        textAlign: "center",
      }}>
        {/* Close */}
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontSize: 18,
            color: "#232B3A",
            cursor: "pointer",
            fontWeight: 700,
          }}
          onClick={onClose}
        >×</span>
        {/* Check icon */}
        <div style={{ marginBottom: 18 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#F7F7FB"/>
            <path d="M28 16L18 26L12 20" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Title */}
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
          Đổi điểm thành công!
        </div>
        {/* Subtitle */}
        <div style={{ fontSize: 15, color: "#232B3A", marginBottom: 24 }}>
          Quà tặng bạn đổi được nằm trong <span style={{ fontWeight: 700 }}>Quà của tôi</span>
        </div>
        {/* Button Sử dụng ngay */}
        <button
          style={{
            width: "100%",
            background: "#B600C4",
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: "12px 0",
            fontWeight: 700,
            fontSize: 17,
            cursor: "pointer",
            marginBottom: 12,
          }}
          onClick={onUseNow}
        >
          Sử dụng ngay
        </button>
        {/* Button Để sau */}
        <button
          style={{
            width: "100%",
            background: "transparent",
            color: "#232B3A",
            border: "none",
            borderRadius: 16,
            padding: "12px 0",
            fontWeight: 500,
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={onLater}
        >
          Để sau
        </button>
      </div>
    </div>
  );
};

export default ExchangeSuccessModal;