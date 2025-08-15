import React, { useState } from "react";
import { BottomTab } from "../components/index/bottomtab";

const communities = [
  { name: "Cộng đồng Vidimi", logo: "/image/logo2.png", posts: 6 },
  { name: "Cộng đồng BB", logo: "/image/brand1.png", posts: 2 },
  { name: "Cộng đồng Brownies", logo: "/image/brand2.png", posts: 3 },
 
];

const postImages = [
  "/image/mission1.png",
  "/image/mision2.png",
  "/image/voucher1.png",
  "/image/voucher2.png",
];

const TABS = [
  { label: "Tin tức" },
  { label: "Cộng đồng của bạn" },
  { label: "Bài đăng" },
];

const Comunity: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");

  // Lọc cộng đồng theo từ khoá tìm kiếm
  const filteredCommunities = communities.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header cộng đồng với hình chìm */}
      <div style={{
        background: "linear-gradient(90deg, #B600C4 0%, #FF6B00 100%)",
        padding: "32px 18px 18px 18px",
        position: "relative",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        minHeight: 120,
      }}>
        <img
          src="/image/flag-dynamic-02.png"
          alt="flag"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: 90,
            opacity: 0.18,
            pointerEvents: "none",
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{ fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 10 }}>
          Cộng đồng
        </div>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="white"/>
        <path d="M13.9993 8.16602V19.8327M8.16602 13.9993H19.8327" stroke="#B600C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        {/* Tabs */}
        <div
        className="tabs-scroll-small"
          style={{
            display: "flex",
            gap: 2,
            marginTop: 12,
            whiteSpace: "nowrap",
            overflowX: "auto",
          }}
        >
          {TABS.map((tab, idx) => (
            <button
              key={tab.label}
              style={{
                background: activeTab === idx ? "#fff" : "transparent",
                color: activeTab === idx ? "#B600C4" : "#fff",
                borderRadius: 64,
                padding: "6px 18px",
                fontWeight: 400,
                fontSize: 15,
                border: "none",
                boxShadow: activeTab === idx ? "0 2px 8px #0001" : "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Nội dung theo tab */}
      {activeTab === 0 && (
        <>
          {/* Cộng đồng của bạn */}
          <div style={{ padding: "24px 18px 0 18px" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Cộng đồng của bạn</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setActiveTab(1)}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="14" fill="#F2C2F7"/>
                  <path d="M8.16602 13.9993H19.8327M19.8327 13.9993L13.9993 8.16602M19.8327 13.9993L13.9993 19.8327" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div>
              {communities.map((c, idx) => (
                <div key={idx} style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 14,
                  background: "#F7F7FB",
                  borderRadius: 14,
                  padding: "10px 12px",
                }}>
                  <img src={c.logo} alt={c.name} style={{
                    width: 40, height: 40, borderRadius: 12, marginRight: 12,
                    objectFit: "cover",
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{c.name}</div>
                    <div style={{ fontSize: 14, color: "#7A89A8" }}>{c.posts} bài đăng mới</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bài đăng mới */}
          <div style={{ padding: "24px 18px 0 18px" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Bài đăng mới</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#F2C2F7"/>
                <path d="M8.16602 13.9993H19.8327M19.8327 13.9993L13.9993 8.16602M19.8327 13.9993L13.9993 19.8327" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              background: "#F7F7FB",
              borderRadius: 14,
              padding: "16px 14px",
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
                <img src="/image/logo2.png" alt="Vidimi" style={{ width: 32, height: 32, borderRadius: 8, marginRight: 8 }} />
                <div style={{ fontWeight: 700, fontSize: 15, color: "#B600C4" }}>Cộng đồng Vidimi</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <img src="/image/olivia.png" alt="Olivia" style={{ width: 28, height: 28, borderRadius: "50%", marginRight: 8 }} />
                <div>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>Olivia Rhye</span>
                  <span style={{ fontSize: 13, color: "#7A89A8", marginLeft: 8 }}>vừa check in</span><br />
                  <span style={{ fontSize: 13, color: "#7A89A8", marginLeft: 2 }}>3 giây trước</span>
                </div>
              </div>
              {/* Grid 4 ảnh */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 8,
                marginTop: 8,
                marginBottom: 80,
              }}>
                {postImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`post-img-${idx}`}
                    style={{
                      width: "100%",
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {activeTab === 1 && (
        <div style={{ padding: "24px 18px 0 18px" }}>
          {/* Thanh tìm kiếm */}
          <input
            type="text"
            placeholder="Tìm cộng đồng ..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #E5E5E5",
              fontSize: 16,
              marginBottom: 18,
              outline: "none",
            }}
          />
          {/* Danh sách cộng đồng */}
          <div>
            {filteredCommunities.map((c, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 14,
                background: "#F7F7FB",
                borderRadius: 14,
                padding: "10px 12px",
              }}>
                <img src={c.logo} alt={c.name} style={{
                  width: 40, height: 40, borderRadius: 12, marginRight: 12,
                  objectFit: "cover",
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{c.name}</div>
                  <div style={{ fontSize: 14, color: "#7A89A8" }}>{c.posts} bài đăng mới</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div style={{ padding: "24px 18px 0 18px" }}>
          {/* Giao diện Bài đăng */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Bài đăng mới</span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="14" fill="#F2C2F7"/>
              <path d="M8.16602 13.9993H19.8327M19.8327 13.9993L13.9993 8.16602M19.8327 13.9993L13.9993 19.8327" stroke="#3D0043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{
            background: "#F7F7FB",
            borderRadius: 14,
            padding: "16px 14px",
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
              <img src="/image/logo2.png" alt="Vidimi" style={{ width: 32, height: 32, borderRadius: 8, marginRight: 8 }} />
              <div style={{ fontWeight: 700, fontSize: 15, color: "#B600C4" }}>Cộng đồng Vidimi</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <img src="/image/olivia.png" alt="Olivia" style={{ width: 28, height: 28, borderRadius: "50%", marginRight: 8 }} />
              <div>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Olivia Rhye</span>
                <span style={{ fontSize: 13, color: "#7A89A8", marginLeft: 8 }}>vừa check in</span><br />
                <span style={{ fontSize: 13, color: "#7A89A8", marginLeft: 2 }}>3 giây trước</span>
              </div>
            </div>
            {/* Grid 4 ảnh */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 8,
              marginTop: 8,
              marginBottom: 80,
            }}>
              {postImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`post-img-${idx}`}
                  style={{
                    width: "100%",
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <BottomTab />
    </div>
  );
};

export default Comunity;