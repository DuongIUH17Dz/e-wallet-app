import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { BottomTab } from "../components/index/bottomtab";

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
		lat: 10.981,
		lng: 106.675,
		rating: 4.7,
		distance: "800m",
		activities: "Check-in, quét bill, tham gia sự kiện",
		logo: "/image/brand2.png",
	},
	{
		id: 3,
		name: "Gourmet Bistro",
		lat: 10.982,
		lng: 106.676,
		rating: 4.8,
		distance: "1km",
		activities: "Check-in, nhận nhiệm vụ",
		logo: "/image/logo.png",
	},
];

const Explore: React.FC = () => {
	const [position, setPosition] = useState<[number, number]>([
		10.9805,
		106.6745,
	]); // Vị trí mặc định

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos =>
				setPosition([pos.coords.latitude, pos.coords.longitude]),
			);
		}
	}, []);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Map background */}
			<MapContainer
				center={position}
				zoom={16}
				style={{
					width: "100vw",
					height: "100vh",
					position: "absolute",
					top: 0,
					left: 0,
				}}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<Marker position={position}>
					<Popup>Bạn đang ở đây</Popup>
				</Marker>

				{stores.map(store => (
					<Marker key={store.id} position={[store.lat, store.lng]}>
						<Popup>{store.name}</Popup>
					</Marker>
				))}
			</MapContainer>
			{/* Thanh tìm kiếm địa chỉ luôn hiển thị phía trên giống tab store */}
			<div
				style={{
					position: "fixed",
					top: 24,
					left: "50%",
					transform: "translateX(-50%)",
					width: 320,
					zIndex: 9999,
					display: "flex",
					alignItems: "center",
					background: "#fff",
					borderRadius: 24,
					boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
					padding: "0 12px 0 0",
				}}
			>
				<input
					type="text"
					placeholder="Tìm kiếm địa điểm"
					style={{
						flex: 1,
						padding: "12px 16px",
						borderRadius: 24,
						border: "none",
						fontSize: 16,
						outline: "none",
						background: "transparent",
					}}
				/>
				<span style={{ marginLeft: 8, display: "flex", alignItems: "center" }}>
					{/* SVG icon tìm kiếm */}
					<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
						<rect width="36" height="36" rx="18" fill="#F9E6FB" />
						<path
							d="M25.5 25.5L21.875 21.875M23.8333 17.1667C23.8333 20.8486 20.8486 23.8333 17.1667 23.8333C13.4848 23.8333 10.5 20.8486 10.5 17.1667C10.5 13.4848 13.4848 10.5 17.1667 10.5C20.8486 10.5 23.8333 13.4848 23.8333 17.1667Z"
							stroke="#B600C4"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</div>
			{/* Tab danh sách cửa hàng */}
			<div
        className="tabs-scroll"
				style={{
					position: "fixed",
					bottom: 80, // Đẩy tab store lên trên 80px
					left: 0,
					width: "100vw",
					maxWidth: "100vw",
					borderTopLeftRadius: 24,
					borderTopRightRadius: 24,
					padding: "18px 0 32px 0",
					zIndex: 9999,
					display: "flex",
					flexWrap: "nowrap",
					overflowX: "auto",
					gap: 24,
					justifyContent: "flex-start",
					pointerEvents: "auto", // <-- Đổi từ "none" sang "auto"
				}}
			>
				{stores.map(store => (
					<div
						key={store.id}
						style={{
							minWidth: 240,
							background: "#fff",
							borderRadius: 18,
							boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
							padding: "16px 18px",
							display: "flex",
							flexDirection: "column",
							gap: 8,
							border: "2px solid #EAF4FF",
							pointerEvents: "auto",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
							}}
						>
							<img
								src={store.logo}
								alt={store.name}
								style={{
									width: 40,
									height: 40,
									borderRadius: 12,
									objectFit: "cover",
								}}
							/>
							<div>
								<div
									style={{
										fontWeight: 700,
										fontSize: 17,
									}}
								>
									{store.name}
								</div>
								<div
									style={{
										fontSize: 15,
										color: "#232B3A",
										display: "flex",
										alignItems: "center",
										gap: 4,
									}}
								>
									{store.rating}
									{/* Hiển thị 5 sao, sao vàng cho rating, còn lại màu xám */}
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											width="16"
											height="16"
											style={{ marginLeft: 1 }}
											viewBox="0 0 20 20"
											fill={
												i < Math.round(store.rating)
													? "#FFC107"
													: "#E0E0E0"
											}
										>
											<polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
										</svg>
									))}
									· {store.distance}
								</div>
							</div>
						</div>
						<div
							style={{
								fontSize: 14,
								color: "#232B3A",
								marginTop: 2,
							}}
						>
							Hoạt động tích điểm:{" "}
							<span style={{ fontWeight: 500 }}>
								{store.activities}
							</span>
						</div>
						<div
							style={{
								display: "flex",
								gap: 8,
								marginTop: 8,
							}}
						>
							<button
								style={{
									background: "#EAF4FF",
									color: "#237BFF",
									border: "none",
									borderRadius: 12,
									padding: "7px 18px",
									fontWeight: 700,
									fontSize: 15,
									cursor: "pointer",
									opacity: 1,
								}}
							>
								Sự kiện
							</button>
							<button
								style={{
									background: "#F5F5F5",
									color: "#A0A0A0",
									border: "none",
									borderRadius: 12,
									padding: "7px 18px",
									fontWeight: 700,
									fontSize: 15,
									cursor: "not-allowed",
									opacity: 0.7,
								}}
							>
								Nhiệm vụ
							</button>
						</div>
					</div>
				))}
			</div>
			{/* BottomTab luôn hiển thị sát đáy */}
			<div
				style={{
					position: "fixed",
					bottom: 0,
					left: 0,
					width: "100vw",
					zIndex: 9999,
				}}
			>
				<BottomTab />
			</div>
		</div>
	);
};

export default Explore;