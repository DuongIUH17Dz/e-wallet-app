import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onOk?: () => void;
}

const MissionSuccessModal: React.FC<Props> = ({ open, onClose, onOk }) => {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(12, 5, 5, 0.88)",
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
        {/* Title */}
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 32, color: "#232B3A" }}>
          Đăng kí nhiệm vụ<br />thành công!
        </div>
        {/* OK button */}
        <button
          style={{
            width: "100%",
            background: "#FFE6CC",
            color: "#FF6B00",
            border: "none",
            borderRadius: 32,
            padding: "14px 0",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
          }}
          onClick={onOk ? onOk : onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MissionSuccessModal;