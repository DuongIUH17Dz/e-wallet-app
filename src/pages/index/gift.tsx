import React, { useState } from "react";

type GiftItem = {
  image: string;
  title: string;
  point: number;
  tem: number;
  left: number;
};

const gifts: GiftItem[] = [
  {
    image: "/image/voucher1.png",
    title: "Voucher giảm 10K The Brownies",
    point: 5000,
    tem: 2,
    left: 99,
  },
  {
    image: "/image/voucher2.png",
    title: "Voucher giảm 20% cho mọi sản phẩm",
    point: 8000,
    tem: 5,
    left: 99,
  },
  // Thêm quà khác nếu muốn
];

const ITEMS_PER_PAGE = 2;

export const Gift: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(gifts.length / ITEMS_PER_PAGE);
  const giftsToShow = gifts.slice(
    current * ITEMS_PER_PAGE,
    current * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div style={{ padding: "16px 0 0 0" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12, marginLeft: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 20, color: "#232B3A", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: 6 }}>🎁</span>
          Quà xịn cho bạn
        </span>
      </div>
      {/* Gifts */}
      <div style={{ display: "flex", gap: 16, justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
        {giftsToShow.map((g, idx) => (
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
            }}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <img
                src={g.image}
                alt={g.title}
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
                right: 8,
                background: "#fff",
                color: "#3D0043",
                borderRadius: 12,
                padding: "2px 10px",
                fontSize: 12,
                fontWeight: 700,
                boxShadow: "0 2px 8px #0001",
              }}>
                Còn lại {g.left}
              </div>
            </div>
            <div style={{ padding: "12px 12px 0 12px", width: "100%" }}>
              <div
                 style={{
                    fontWeight: 700,
                    fontSize: 16,
              color: "#232B3A",
              marginBottom: 4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}>              
              {g.title}
              </div>
              <div style={{ fontSize: 15, color: "#7A89A8", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <span>
                  <span style={{ fontWeight: 700 ,color:"black" }}>{g.point}</span> $VI <span role="img" aria-label="point">/</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {g.tem}
                  <span style={{ verticalAlign: "middle", marginLeft: 2 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20L20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="url(#paint0_linear_601_10901)"/>
                      <mask id="mask0_601_10901" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <path d="M10 20C10 11.6667 12.9167 10 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="url(#paint1_linear_601_10901)"/>
                      </mask>
                      <g mask="url(#mask0_601_10901)">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="url(#paint2_linear_601_10901)"/>
                        <path d="M10 0.657895C15.1447 0.657895 19.3421 4.84211 19.3421 10C19.3421 15.1579 15.1447 19.3421 10 19.3421C4.85526 19.3421 0.657895 15.1447 0.657895 10C0.657895 4.85526 4.84211 0.657895 10 0.657895ZM10 0C4.47368 0 0 4.47368 0 10C0 15.5263 4.47368 20 10 20C15.5263 20 20 15.5263 20 10C20 4.47368 15.5263 0 10 0Z" fill="url(#paint3_linear_601_10901)"/>
                        <path d="M10.0003 18.0924C5.53978 18.0924 1.9082 14.4608 1.9082 10.0003C1.9082 5.53978 5.53978 1.9082 10.0003 1.9082C14.4608 1.9082 18.0924 5.53978 18.0924 10.0003C18.0924 14.4608 14.4608 18.0924 10.0003 18.0924ZM10.0003 2.30294C5.75031 2.30294 2.30294 5.75031 2.30294 10.0003C2.30294 14.2503 5.75031 17.6977 10.0003 17.6977C14.2503 17.6977 17.6977 14.2503 17.6977 10.0003C17.6977 5.75031 14.2503 2.30294 10.0003 2.30294Z" fill="url(#paint4_linear_601_10901)"/>
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_601_10901" x1="11.6667" y1="12.5" x2="14.5833" y2="15.4167" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white"/>
                          <stop offset="1" stopColor="#BEBEBE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_601_10901" x1="2.92895" y1="2.92895" x2="17.0711" y2="17.0711" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#28D8FF"/>
                          <stop offset="1" stopColor="#43BAFF"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_601_10901" x1="2.92895" y1="2.92895" x2="17.0711" y2="17.0711" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#28D8FF"/>
                          <stop offset="1" stopColor="#43BAFF"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_601_10901" x1="3.57079" y1="2.33803" x2="16.4292" y2="17.662" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#B3EBFF"/>
                          <stop offset="0.055" stopColor="#AAE9FE"/>
                          <stop offset="0.145" stopColor="#92E6FD"/>
                          <stop offset="0.258" stopColor="#6AD7FB"/>
                          <stop offset="0.389" stopColor="#33CDF8"/>
                          <stop offset="0.5" stopColor="#009FF5"/>
                          <stop offset="0.613" stopColor="#09BFF6"/>
                          <stop offset="0.798" stopColor="#21BDFA"/>
                          <stop offset="1" stopColor="#439EFF"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_601_10901" x1="2.99426" y1="5.95531" x2="17.0064" y2="14.0453" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ACF2FF"/>
                          <stop offset="1" stopColor="#1EA6F4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <button
              style={{
                marginTop: 8,
                background: "#B600C4",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "8px 0",
                width: "80%",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Đổi quà
            </button>
          </div>
        ))}
      </div>
      {/* Dots */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 8, gap: 8 }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: idx === current ? "#B600C4" : "#E5E5E5",
                display: "inline-block",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      )}
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Gift;