import React from "react";
import { FC } from "react";

export const Banner: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(90deg, #d946ef 0%, #6366f1 100%)",
        borderRadius: "32px",
        padding: "22px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        minHeight: "140px",
        width: "95%",
        marginTop: "32px",
        marginLeft: "10px"
      }}
    >
      {/* Logo */}
      <img
        src="/image/logo.png"
        alt="Vidimi Logo"
        style={{
          position: "absolute",
          top: "10px",
          left: "6px",
          width: "100px",
          height: "auto",
        }}
      />

      {/* Text */}
      <div style={{ zIndex: 2, marginLeft: "4px" ,marginTop: "50px"}}>
       
        <div style={{ fontWeight: 900, fontSize: "12px", marginBottom: "8px" }}>
          CHỤP HOÁ ĐƠN<br />MỖI NGÀY ĐỂ
        </div>
        <div style={{ fontWeight: 900, fontSize: "24px" }}>
          TÍCH ĐIỂM &rarr; ĐỔI QUÀ
        </div>
      </div>

      {/* Camera Image */}
      <img
        src="/image/camera-dynamic-02.png"
        alt="Camera"
        style={{
          position: "absolute",
          top: "-40px",
          left: "160px",
          width: "160px",
          height: "160px",
          zIndex: 1,
        }}
      />

      {/* Gift Image */}
      <img
        src="/image/gift-dynamic-02.png"
        alt="Gift"
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-40px",
          width: "160px",
          height: "160px",
          zIndex: 1,
          transform: "rotate(-20deg)"
          
        }}
      />
    </div>
  );
};

export default Banner;