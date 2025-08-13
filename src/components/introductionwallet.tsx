import React from "react";

interface IntroductionWalletProps {
  open: boolean;
  onClose: () => void;
}

const guideData = [
  {
    label: "$VI",
    color: "#B600C4",
    bg: "#FFE6FB",
    desc: "Dùng cho kho quà chung, trả phí, đổi các điểm doanh nghiệp.",
  },
  {
    label: "$BB",
    color: "#FF6A6A",
    bg: "#FFD7D6",
    desc: "Dùng trong hệ sinh thái BB (sản quà tặng Beloved & Beyond).",
  },
  {
    label: "Nội bộ",
    color: "#3D7CFF",
    bg: "#E6F0FF",
    desc: "Đổi quà nội bộ.",
  },
  {
    label: "$",
    color: "#FFB600",
    bg: "#FFE6C2",
    desc: "Đổi quà nội bộ hoặc đổi sang $VI.",
  },
];

const IntroductionWallet: React.FC<IntroductionWalletProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.25)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "24px 20px 16px 20px",
          minWidth: 280,
          maxWidth: 320,
          boxShadow: "0 2px 16px #0002",
          position: "relative",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            fontSize: 22,
            fontWeight: 700,
            color: "#7A89A8",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </span>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 18 }}>
          Hướng dẫn ví
        </div>
        {guideData.map((item, idx) => (
         <React.Fragment key={idx}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "72px 1fr",
        alignItems: "center",
        minHeight: 32,
        marginBottom: 0,
        gap: 0,
      }}
    >
      <span
        style={{
          background: item.bg,
          color: item.color,
          fontWeight: 500,
          fontSize: 16,
          borderRadius: 12,
          width: 72,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {item.label}
      </span>
      <span style={{ fontSize: 14, color: "#232B3A", marginLeft: 8 }}>
        {item.desc}
      </span>
    </div>
    {idx < guideData.length - 1 && (
      <div
        style={{
          borderBottom: "1px solid #E5E5E5",
          margin: "10px 0",
        }}
      />
    )}
  </React.Fragment>
))}
      </div>
    </div>
  );
};

export default IntroductionWallet;