import React, { useState } from "react";
import { BottomTab } from "../components/index/bottomtab";
import { useNavigate } from "react-router-dom";

const tabs = [
  "Tất cả",
  "Tích điểm",
  "Đổi điểm",
  "Nạp điểm",
  "Quét bill",
  "Check-in",
  "Nhiệm vụ",
  "Mời bạn",
];

const historyData = [
  {
    type: "Tích điểm",
    desc: "232/6 Võ Thị Sáu",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+5,000",
    unit: "$Point",
    color: "#00C853",
  },
  {
    type: "Đổi điểm",
    desc: "10,000 $BB → 10,000 $VI",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+10,000",
    unit: "$VI",
    color: "#00C853",
  },
  {
    type: "Nạp điểm",
    desc: "10,000đ → 10,000 $VI",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+10,000",
    unit: "$VI",
    color: "#00C853",
  },
  {
    type: "Quét bill",
    desc: "232/6 Võ Thị Sáu",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+5,000",
    unit: "$Point",
    color: "#00C853",
  },
  {
    type: "Check-in",
    desc: "232/6 Võ Thị Sáu",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+5,000",
    unit: "$Point",
    color: "#00C853",
  },
  {
    type: "Nhiệm vụ",
    desc: "Tên nhiệm vụ",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+5,000",
    unit: "$Point",
    color: "#00C853",
  },
  {
    type: "Mời bạn",
    desc: "",
    date: "1 Apr 2025 at 12:27 AM",
    value: "+5,000",
    unit: "$BB",
    color: "#00C853",
  },
];

const HistoryPage: React.FC = () => {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [mainTab, setMainTab] = useState<"Điểm đã nhận" | "Điểm đã dùng">("Điểm đã nhận");

  // Lọc dữ liệu theo tab
  const filtered = activeTab === "Tất cả"
    ? historyData
    : historyData.filter(item => item.type === activeTab);

  return (
    <div style={{ background: "#F7F7FB", minHeight: "100vh", paddingBottom: 24 }}>
        <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        marginTop: 48,
        marginBottom: 0,
      }}>
        <button
          onClick={() => setMainTab("Điểm đã nhận")}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            fontWeight: 700,
            fontSize: 18,
            color: mainTab === "Điểm đã nhận" ? "#232B3A" : "#7A89A8",
            borderBottom: mainTab === "Điểm đã nhận" ? "3px solid #B600C4" : "3px solid transparent",
            padding: "8px 0",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Điểm đã nhận
        </button>
        <button
          onClick={() => setMainTab("Điểm đã dùng")}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            fontWeight: 700,
            fontSize: 18,
            color: mainTab === "Điểm đã dùng" ? "#232B3A" : "#7A89A8",
            borderBottom: mainTab === "Điểm đã dùng" ? "3px solid #B600C4" : "3px solid transparent",
            padding: "8px 0",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Điểm đã dùng
        </button>
      </div>
      {/* Tabs */}
      <div
      className="tabs-scroll"
       style={{
        display: "flex",
        gap: 8,
        padding: "18px 8px 0 8px",
        overflowX: "auto",
        marginBottom: 8,
        marginTop:-10
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: activeTab === tab ? "#E6C6F7" : "#fff",
              color: activeTab === tab ? "#B600C4" : "#232B3A",
              border: "none",
              borderRadius: 18,
              padding: "8px 18px",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: activeTab === tab ? "0 2px 8px #B600C422" : "none",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Danh sách lịch sử */}
      <div style={{ padding: "0 8px" ,marginBottom:50}}>
        {filtered.map((item, idx) => (
          <div key={idx} 

           style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            padding: "14px 18px",
            marginBottom: 14,
            display: "flex",
            flexDirection: "column",
          }} onClick={() => navigate(`/history/${idx}`)}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#232B3A", marginBottom: 2 }}>
              {item.type}
            </div>
            <div style={{ fontSize: 14, color: "#7A89A8", marginBottom: 2 }}>
              {item.desc}
            </div>
            <div style={{ fontSize: 13, color: "#7A89A8", marginBottom: 8 }}>
              {item.date}
            </div>
            <div style={{
              fontWeight: 700,
              fontSize: 16,
              color: item.color,
              marginLeft: "auto",
            }}>
              {item.value} <span style={{ fontSize: 13, color: "#7A89A8", fontWeight: 500 }}>{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
      <BottomTab /> 
    </div>
  );
};

export default HistoryPage;