import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const billInfo = {
  code: "132608",
  hotline: "02873055399",
  address: "Tầng 4 TTTM Vincom Lê Văn Việt, Quận 9",
  items: [
    { name: "Phí phụ thu ngày lễ 5% x 1.0", price: 44460 },
    { name: "Ve BF 279k-HP x 2.0", price: 558000 },
    { name: "Ve BF TE đồ uống & bánh x 2.0", price: 168000 },
    { name: "Mochi kem x 2.0", price: 98000 },
    { name: "Khăn ướt in logo x 2.0", price: 10000 },
  ],
  total: 1011728,
  status: "Chấp nhận",
  point: "+600",
  unit: "$BB",
};

const HistoryDetailPage: React.FC = () => {
    const { id } = useParams();
  const { type } = useParams(); // type: "napdiem", "quetbill", "doidiem"
  const navigate = useNavigate();

  // Giả sử lấy dữ liệu từ router hoặc prop, ở đây hardcode cho demo
  let detailType = type || "napdiem";
  if (id === "0") detailType = "tichdiem";
 if (id === "1") detailType = "doidiem";
 if (id === "2") detailType = "napdiem";
 if (id === "3") detailType = "quetbill";

  return (
    <div style={{ background: "#F7F7FB", minHeight: "100vh", paddingBottom: 24 }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "24px 0 0 0",
        marginBottom: 0,
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: 22,
            color: "#232B3A",
            marginLeft: 18,
            cursor: "pointer",
          }}
        >
          ←
        </button>
        <div style={{
          flex: 1,
          textAlign: "center",
          fontWeight: 700,
          fontSize: 18,
          color: "#232B3A",
          marginRight: 40,
        }}>
          {detailType === "napdiem" && "Nạp điểm"}
          {detailType === "quetbill" && "Quét bill"}
          {detailType === "doidiem" && "Đổi điểm"}
        </div>
      </div>
      {/* Thông tin chung */}
      <div style={{ padding: "0 18px", marginBottom: 8 }}>
        <div style={{ color: "#7A89A8", fontSize: 15, marginBottom: 2 }}>232/6 Võ Thị Sáu</div>
        <div style={{ color: "#7A89A8", fontSize: 13, marginBottom: 12 }}>1 Apr 2025 at 12:27 AM</div>
      </div>
      {/* Hiển thị chi tiết theo loại */}
      {detailType === "napdiem" && (
        <div style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 8px #0001",
          padding: "24px 0",
          margin: "0 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 20,
        }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 22, color: "#232B3A" }}>10,000</div>
            <div style={{ fontSize: 15, color: "#7A89A8" }}>VNĐ</div>
          </div>
          <div style={{ margin: "0 18px", fontSize: 22 }}>→</div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 22, color: "#232B3A" }}>10,000</div>
            <div style={{ fontSize: 15, color: "#7A89A8" }}>$VI</div>
          </div>
        </div>
      )}
      {detailType === "doidiem" && (
        <div style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 8px #0001",
          padding: "24px 0",
          margin: "0 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 20,
        }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 22, color: "#232B3A" }}>10,000</div>
            <div style={{ fontSize: 15, color: "#7A89A8" }}>$BB</div>
          </div>
          <div style={{ margin: "0 18px", fontSize: 22 }}>→</div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 22, color: "#232B3A" }}>10,000</div>
            <div style={{ fontSize: 15, color: "#7A89A8" }}>$VI</div>
          </div>
        </div>
      )}
      {detailType === "quetbill" && (
        <div style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 8px #0001",
          padding: "18px",
          margin: "0 18px",
        }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Thông tin hoá đơn</div>
          <div style={{ fontSize: 14, color: "#232B3A", marginBottom: 12 }}>
            Chụp thông tin hoá đơn, bạn sẽ được thưởng điểm tích luỹ. Vui lòng chụp rõ và đầy đủ thông tin trên hoá đơn để AI có thể nhận diện ra tổng tiền, thời gian, chi tiết món.
          </div>
          <img
            src="/image/bill.png"
            alt="bill"
            style={{
              width: 158,
              height: 120,
              objectFit: "cover",
              borderRadius: 8,
              marginBottom: 12,
              display: "block",
            }}
          />
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Thông tin chi tiết</div>
          <div style={{ fontSize: 14, color: "#232B3A", marginBottom: 8 }}>
            Tên: <br />
            Mã hoá đơn: {billInfo.code}<br />
            Hotline: {billInfo.hotline}<br />
            Địa chỉ: {billInfo.address}
          </div>
          <div style={{ fontSize: 14, color: "#232B3A", marginBottom: 8 }}>
            {billInfo.items.map((item, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span>{item.name}</span>
                <span>{item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div style={{
            fontWeight: 700,
            fontSize: 15,
            color: "#232B3A",
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>Tổng tiền hoá đơn</span>
            <span>{billInfo.total.toLocaleString()}</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 8,
          }}>
            <span style={{ fontSize: 15, color: "#232B3A" }}>
              Tình trạng: <span style={{ color: "#00C853", fontWeight: 700 }}>✔ {billInfo.status}</span>
            </span>
            <span style={{ fontWeight: 700, fontSize: 18, color: "#00C853" }}>
              {billInfo.point} <span style={{ fontSize: 13, color: "#7A89A8", fontWeight: 500 }}>{billInfo.unit}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryDetailPage;