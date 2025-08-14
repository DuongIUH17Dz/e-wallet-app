import React, { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onOk: (value: string) => void;
}

const options = [
  { value: "vi", label: "5,000 $VI", disabled: false },
  { value: "bb", label: "5,000 $BB", disabled: false },
  { value: "bnb", label: "3 tem B&B", disabled: true, note: "Không đủ. ", link: "Kiếm thêm" },
  { value: "vidimi", label: "3 tem VIDIMI", disabled: false },
];

const ChooseGiftModal: React.FC<Props> = ({ open, onClose, onOk }) => {
  const [selected, setSelected] = useState("vi");

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.38)", // tăng từ 0.18 lên 0.38 cho tối hơn
      zIndex: 9999,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        background: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: "100%",
        maxWidth: "100vw",
        boxShadow: "0 -2px 16px #0002",
        padding: "24px 18px 18px 18px",
        minHeight: 340,
        animation: "slideUp 0.25s",
      }}>
        {/* Close */}
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 18,
            fontSize: 18,
            color: "#232B3A",
            cursor: "pointer",
            fontWeight: 700,
          }}
          onClick={onClose}
        >×</span>
        {/* Title */}
        <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 18 }}>
          Chọn để đổi quà
        </div>
        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
          {options.map(opt => (
            <div
              key={opt.value}
              style={{
                background: selected === opt.value && !opt.disabled ? "#F7D7FB" : "#F7F7FB",
                color: opt.disabled ? "#BEBEBE" : "#232B3A",
                borderRadius: 16,
                padding: "12px 16px",
                fontWeight: 700,
                fontSize: 16,
                cursor: opt.disabled ? "not-allowed" : "pointer",
                position: "relative",
                border: selected === opt.value && !opt.disabled ? "2px solid #B600C4" : "none",
                opacity: opt.disabled ? 0.7 : 1,
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => !opt.disabled && setSelected(opt.value)}
            >
              {opt.label}
              {opt.disabled && (
                <span style={{ marginLeft: 8, fontWeight: 400, fontSize: 14 }}>
                  {opt.note}
                  <span style={{ color: "#B600C4", fontWeight: 500, cursor: "pointer" }}>{opt.link}</span>
                </span>
              )}
            </div>
          ))}
        </div>
        {/* OK button */}
        <button
          style={{
            width: "100%",
            background: "#B600C4",
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: "12px 0",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
          }}
          onClick={() => onOk(selected)}
        >
          OK
        </button>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ChooseGiftModal;