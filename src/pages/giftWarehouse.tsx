import React from "react";
import { useNavigate } from "react-router-dom";
import { BottomTab } from "../components/index/bottomtab";

// Dữ liệu mẫu
const gifts = [
  {
    img: "/image/voucher1.png",
    title: "Voucher giảm 10K The Brownies",
    point: 5000,
    viUnit: "$VI",
    stamp: 2,
    remain: 99,
  },
  {
    img: "/image/voucher2.png",
    title: "Voucher giảm 10K The Brownies",
    point: 5000,
    viUnit: "$VI",
    stamp: 2,
    remain: 99,
  },
  {
    img: "/image/voucher1.png",
    title: "Voucher giảm 20K Coffee House",
    point: 8000,
    viUnit: "$VI",
    stamp: 3,
    remain: 50,
  },
  {
    img: "/image/voucher2.png",
    title: "Voucher giảm 15K Bánh Mì",
    point: 6000,
    viUnit: "$VI",
    stamp: 1,
    remain: 120,
  },
];

const GiftWarehouse: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div style={{ background: "#F7F7FB", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
  background: "#B600C4",
  padding: "24px 18px 16px 18px",
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  color: "#fff",
}}>
    <div style={{ fontSize: 24, fontWeight: 700,marginTop:20 }}>Điểm đang có </div>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
    {/* Điểm $VI */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ fontSize: 13, color: "#F0F0F0", fontWeight: 500 }}>Điểm $VI</div>
      <div style={{ fontWeight: 700, fontSize: 24, marginTop: 2 }}>16,234</div>
    </div>
    {/* Mũi tên */}
    <span style={{ margin: "0 12px" ,marginTop:28}}>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M6.5 12L10.5 8L6.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <span style={{ width: 1, height: 32, background: "#fff",marginTop:10 }}></span>
    {/* Số tem */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <div style={{ fontSize: 13, color: "#F0F0F0", fontWeight: 500 }}>Số tem</div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M12.5 24L24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint0_linear_195_2589)"/>
          <mask id="mask0_195_2589" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
            <path d="M12.5 24C12.5 14 16 12 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint1_linear_195_2589)"/>
          </mask>
          <g mask="url(#mask0_195_2589)">
            <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint2_linear_195_2589)"/>
            <path d="M12.5 0.789474C18.6737 0.789474 23.7105 5.81053 23.7105 12C23.7105 18.1895 18.6737 23.2105 12.5 23.2105C6.32632 23.2105 1.28947 18.1737 1.28947 12C1.28947 5.82632 6.31053 0.789474 12.5 0.789474ZM12.5 0C5.86842 0 0.5 5.36842 0.5 12C0.5 18.6316 5.86842 24 12.5 24C19.1316 24 24.5 18.6316 24.5 12C24.5 5.36842 19.1316 0 12.5 0Z" fill="url(#paint3_linear_195_2589)"/>
            <path d="M12.4996 21.7111C7.14696 21.7111 2.78906 17.3532 2.78906 12.0006C2.78906 6.64793 7.14696 2.29004 12.4996 2.29004C17.8522 2.29004 22.2101 6.64793 22.2101 12.0006C22.2101 17.3532 17.8522 21.7111 12.4996 21.7111ZM12.4996 2.76372C7.39959 2.76372 3.26275 6.90057 3.26275 12.0006C3.26275 17.1006 7.39959 21.2374 12.4996 21.2374C17.5996 21.2374 21.7364 17.1006 21.7364 12.0006C21.7364 6.90057 17.5996 2.76372 12.4996 2.76372Z" fill="url(#paint4_linear_195_2589)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_195_2589" x1="14.5" y1="15" x2="18" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#BEBEBE"/>
            </linearGradient>
            <linearGradient id="paint1_linear_195_2589" x1="4.01474" y1="3.51474" x2="20.9853" y2="20.4853" gradientUnits="userSpaceOnUse">
              <stop stopColor="#28D8FF"/>
              <stop offset="1" stopColor="#43BAFF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_195_2589" x1="4.01474" y1="3.51474" x2="20.9853" y2="20.4853" gradientUnits="userSpaceOnUse">
              <stop stopColor="#28D8FF"/>
              <stop offset="1" stopColor="#43BAFF"/>
            </linearGradient>
            <linearGradient id="paint3_linear_195_2589" x1="4.78495" y1="2.80563" x2="20.2151" y2="21.1944" gradientUnits="userSpaceOnUse">
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
            <linearGradient id="paint4_linear_195_2589" x1="4.09233" y1="7.14656" x2="20.9069" y2="16.8546" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ACF2FF"/>
              <stop offset="1" stopColor="#1EA6F4"/>
            </linearGradient>
          </defs>
        </svg>
        <span style={{ fontWeight: 700, fontSize: 20, marginLeft: 2 }}>9</span>
      </div>
    </div>
    {/* Mũi tên phải */}
    <span style={{ marginLeft: 8,marginTop:28 }}>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M6.5 12L10.5 8L6.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    
  </div>
  {/* Tabs */}
  <div style={{ display: "flex", marginTop: 24, gap: 0 }}>
    <div style={{
      flex: 1,
      textAlign: "center",
      fontWeight: 700,
      fontSize: 17,
      color: "#fff",
      borderBottom: "3px solid #fff",
      paddingBottom: 8,
      cursor: "pointer",
    }}>Quà tặng</div>
    <div style={{
      flex: 1,
      textAlign: "center",
      fontWeight: 700,
      fontSize: 17,
      color: "#fff",
      opacity: 0.5,
      borderBottom: "3px solid transparent",
      paddingBottom: 8,
      cursor: "pointer",
      position: "relative",
    }}>
      Đã đổi
    </div>
  </div>
</div>
      {/* Search + filter */}
      <div style={{ padding: "18px 18px 0 18px" }}>
        <input
          type="text"
          placeholder="Tìm quà tặng ..."
          style={{
            width: "100%",
            padding: "10px 16px",
            borderRadius: 12,
            border: "1px solid #E5E5E5",
            fontSize: 14,
            marginBottom: 16,
            outline: "none",
          }}
        />
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          <span style={{
            background: "#dfaaeeff",
            color: "#646363ff",
            borderRadius: 12,
            padding: "6px 16px",
            fontWeight: 400,
            fontSize: 14,
            cursor: "pointer",
          }}>Tất cả <span style={{ color: "#B600C4", fontWeight: 700 }}>20</span></span>
          <span style={{
            background: "#eee8f0ff",
            color: "#363536ff",
            borderRadius: 12,
            padding: "6px 16px",
            fontWeight: 400,
            fontSize: 15,
            cursor: "pointer",
          }}>Thẻ quà tặng <span style={{ color: "#B600C4", fontWeight: 700 }}>5</span></span>
          <span style={{
            background: "#efedefff",
            color: "#4b4b4bff",
            borderRadius: 12,
            padding: "6px 16px",
            fontWeight: 400,
            fontSize: 14,
            cursor: "pointer",
          }}>Cafe <span style={{ color: "#B600C4", fontWeight: 700 }}>2</span></span>
          {/* ...thêm các filter khác nếu cần */}
        </div>
      </div>
      {/* List quà tặng */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        padding: "0 18px 24px 18px",
        marginBottom: 44,
      }}>
        {gifts.map((gift, idx) => (
          <div key={idx} style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            overflow: "hidden",
            marginBottom: 0,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ position: "relative" }}>
              <img
                src={gift.img}
                alt={gift.title}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "cover",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <span style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "#fff",
                color: "#B600C4",
                borderRadius: 12,
                padding: "2px 10px",
                fontSize: 13,
                fontWeight: 700,
                boxShadow: "0 2px 8px #0001",
              }}>
                Còn lại {gift.remain}
              </span>
            </div>
            <div style={{ padding: "12px 12px 0 12px", flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#232B3A", marginBottom: 4 }}>
                {gift.title}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: "#757175ff" }}>
                  {gift.point.toLocaleString()} {gift.viUnit}
                </span>
                <span style={{width:5,height:10,color:"#757175ff",marginBottom:10}}>/</span>
                {/* Icon tem */}
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none">
          <path d="M12.5 24L24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint0_linear_195_2589)"/>
          <mask id="mask0_195_2589" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
            <path d="M12.5 24C12.5 14 16 12 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint1_linear_195_2589)"/>
          </mask>
          <g mask="url(#mask0_195_2589)">
            <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint2_linear_195_2589)"/>
            <path d="M12.5 0.789474C18.6737 0.789474 23.7105 5.81053 23.7105 12C23.7105 18.1895 18.6737 23.2105 12.5 23.2105C6.32632 23.2105 1.28947 18.1737 1.28947 12C1.28947 5.82632 6.31053 0.789474 12.5 0.789474ZM12.5 0C5.86842 0 0.5 5.36842 0.5 12C0.5 18.6316 5.86842 24 12.5 24C19.1316 24 24.5 18.6316 24.5 12C24.5 5.36842 19.1316 0 12.5 0Z" fill="url(#paint3_linear_195_2589)"/>
            <path d="M12.4996 21.7111C7.14696 21.7111 2.78906 17.3532 2.78906 12.0006C2.78906 6.64793 7.14696 2.29004 12.4996 2.29004C17.8522 2.29004 22.2101 6.64793 22.2101 12.0006C22.2101 17.3532 17.8522 21.7111 12.4996 21.7111ZM12.4996 2.76372C7.39959 2.76372 3.26275 6.90057 3.26275 12.0006C3.26275 17.1006 7.39959 21.2374 12.4996 21.2374C17.5996 21.2374 21.7364 17.1006 21.7364 12.0006C21.7364 6.90057 17.5996 2.76372 12.4996 2.76372Z" fill="url(#paint4_linear_195_2589)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_195_2589" x1="14.5" y1="15" x2="18" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#BEBEBE"/>
            </linearGradient>
            <linearGradient id="paint1_linear_195_2589" x1="4.01474" y1="3.51474" x2="20.9853" y2="20.4853" gradientUnits="userSpaceOnUse">
              <stop stopColor="#28D8FF"/>
              <stop offset="1" stopColor="#43BAFF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_195_2589" x1="4.01474" y1="3.51474" x2="20.9853" y2="20.4853" gradientUnits="userSpaceOnUse">
              <stop stopColor="#28D8FF"/>
              <stop offset="1" stopColor="#43BAFF"/>
            </linearGradient>
            <linearGradient id="paint3_linear_195_2589" x1="4.78495" y1="2.80563" x2="20.2151" y2="21.1944" gradientUnits="userSpaceOnUse">
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
            <linearGradient id="paint4_linear_195_2589" x1="4.09233" y1="7.14656" x2="20.9069" y2="16.8546" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ACF2FF"/>
              <stop offset="1" stopColor="#1EA6F4"/>
            </linearGradient>
          </defs>
        </svg>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#43BAFF" }}>{gift.stamp}</span>
              </div>
            </div>
            <div style={{ padding: "0 12px 12px 12px" }}>
              <button style={{
                width: "100%",
                background: "#B600C4",
                color: "#fff",
                border: "none",
                borderRadius: 48,
                padding: "10px 0",
                fontWeight: 600,
                fontSize: 12,
                cursor: "pointer",
              }}>
                Đổi ngay
              </button>
            </div>
          </div>
        ))}
      </div>
      <BottomTab />
    </div>
    
  );
};

export default GiftWarehouse;