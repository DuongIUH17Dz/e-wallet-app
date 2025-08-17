import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const stores = [
  {
    id: 1,
    name: "Beloved & Beyond",
    lat: 10.9805,
    lng: 106.6745,
    rating: 4.5,
    distance: "600m",
    activities: "Check-in, quét bill, tham gia sự kiện, nhận nhiệm vụ",
    logo: "/image/brand1.png",
  },
    {
        id: 2,
        name: "Coffee Haven",
        lat: 10.9810,
        lng: 106.6750,
        rating: 4.7,
        distance: "800m",
        activities: "Check-in, quét bill, tham gia sự kiện",
        logo: "/image/brand2.png",
    },
    {
        id: 3,
        name: "Gourmet Bistro",
        lat: 10.9820,
        lng: 106.6760,
        rating: 4.8,
        distance: "1km",
        activities: "Check-in, nhận nhiệm vụ",
        logo: "/image/logo.png",
    },  
  
];

const Explore: React.FC = () => {
  const [position, setPosition] = useState<[number, number]>([10.9805, 106.6745]); // Vị trí mặc định

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setPosition([pos.coords.latitude, pos.coords.longitude])
      );
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Map background */}
      <MapContainer
        center={position}
        zoom={16}
        style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={position}>
          <Popup>Bạn đang ở đây</Popup>
        </Marker>
        
        {stores.map(store => (
          <Marker key={store.id} position={[store.lat, store.lng]}>
            <Popup>{store.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Search box */}
      <div style={{
        position: "absolute",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        width: 320,
        zIndex: 10,
      }}>
        <input
          type="text"
          placeholder="Tìm kiếm địa điểm"
          style={{
            width: "100%",
            padding: "12px 40px 12px 16px",
            borderRadius: 24,
            border: "none",
            fontSize: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <span style={{
          position: "absolute",
          right: 16,
          top: 12,
          color: "#B600C4",
        }}>
          <svg width="20" height="20" fill="none"><circle cx="9" cy="9" r="8" stroke="#B600C4" strokeWidth="2"/><path d="M17 17L13.5 13.5" stroke="#B600C4" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
      </div>
      {/* Tab danh sách cửa hàng */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "rgba(255,255,255,0.98)",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: "0 -2px 12px rgba(0,0,0,0.08)",
        padding: "18px 0 12px 0",
        zIndex: 10,
        display: "flex",
        overflowX: "auto",
        gap: 12,
        justifyContent: "center",
      }}>
        {stores.map(store => (
          <div key={store.id} style={{
            minWidth: 220,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "12px 16px",
            margin: "0 8px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src={store.logo} alt={store.name} style={{ width: 36, height: 36, borderRadius: 12 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{store.name}</div>
                <div style={{ fontSize: 14, color: "#7A89A8" }}>{store.rating} ★ · {store.distance}</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "#232B3A", marginTop: 4 }}>
              Hoạt động tích điểm: <span style={{ fontWeight: 500 }}>{store.activities}</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <button style={{
                background: "#EAF4FF",
                color: "#237BFF",
                border: "none",
                borderRadius: 12,
                padding: "6px 16px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}>Sự kiện</button>
              <button style={{
                background: "#FFF0F5",
                color: "#FF236D",
                border: "none",
                borderRadius: 12,
                padding: "6px 16px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}>Nhiệm vụ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;