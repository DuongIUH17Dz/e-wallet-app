import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm dòng này

const Login: React.FC = () => {
  const [type, setType] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate(); // Thêm dòng này

  // Kiểm tra đủ điều kiện enable nút đăng nhập
  const isFilled = (type === "email" ? email : phone) && password;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* Header gradient + logo + text */}
      <div style={{
        width: "100%",
        background: "linear-gradient(180deg, #B600C4 0%, #FF6B00 100%)",
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        padding: "32px 0 24px 0",
        position: "relative",
      }}>
        <img src="/image/logo.png" alt="logo" style={{
          width: 88, height: 48, borderRadius: 12, marginLeft: 20, display: "block"
        }} />
        <div style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          textAlign: "center",
          marginTop: 12,
          marginBottom: 8,
          marginRight:100
        }}>
          <div>Đăng nhập để tích điểm,</div>
          <div style={{marginRight:65}}>đổi quà miễn phí</div>
        </div>
        {/* Tabs chọn loại đăng nhập */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 0,
          marginTop: 18,
          position: "relative",
          width: 260,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: -16,
        }}>
          <button
            style={{
              flex: 1,
              background: "transparent",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              padding: "10px 0 2px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => setType("email")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.6663 4.00002C14.6663 3.26669 14.0663 2.66669 13.333 2.66669H2.66634C1.93301 2.66669 1.33301 3.26669 1.33301 4.00002M14.6663 4.00002V12C14.6663 12.7334 14.0663 13.3334 13.333 13.3334H2.66634C1.93301 13.3334 1.33301 12.7334 1.33301 12V4.00002M14.6663 4.00002L7.99967 8.66669L1.33301 4.00002" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Email
            {type === "email" && (
              <span style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: -8,
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "10px solid #fff",
              }} />
            )}
          </button>
          <button
            style={{
              flex: 1,
              background: "transparent",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              padding: "10px 0 2px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => setType("phone")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.6669 11.28V13.28C14.6677 13.4657 14.6297 13.6494 14.5553 13.8195C14.4809 13.9897 14.3718 14.1424 14.235 14.2679C14.0982 14.3934 13.9367 14.489 13.7608 14.5485C13.5849 14.6079 13.3985 14.63 13.2136 14.6133C11.1622 14.3904 9.19161 13.6894 7.46028 12.5667C5.8495 11.5431 4.48384 10.1774 3.46028 8.56665C2.3336 6.82745 1.63244 4.84731 1.41361 2.78665C1.39695 2.60229 1.41886 2.41649 1.47795 2.24107C1.53703 2.06564 1.63199 1.90444 1.75679 1.76773C1.88159 1.63102 2.03348 1.52179 2.20281 1.447C2.37213 1.37221 2.55517 1.33349 2.74028 1.33332H4.74028C5.06382 1.33013 5.37748 1.4447 5.62279 1.65567C5.8681 1.86664 6.02833 2.15961 6.07361 2.47998C6.15803 3.12003 6.31458 3.74847 6.54028 4.35332C6.62998 4.59193 6.64939 4.85126 6.59622 5.10057C6.54305 5.34988 6.41952 5.57872 6.24028 5.75998L5.39361 6.60665C6.34265 8.27568 7.72458 9.65761 9.39361 10.6067L10.2403 9.75998C10.4215 9.58074 10.6504 9.45722 10.8997 9.40405C11.149 9.35088 11.4083 9.37029 11.6469 9.45998C12.2518 9.68568 12.8802 9.84224 13.5203 9.92665C13.8441 9.97234 14.1399 10.1355 14.3513 10.385C14.5627 10.6345 14.6751 10.953 14.6669 11.28Z" fill="#fff"/>
            </svg>
            Điện thoại
            {type === "phone" && (
              <span style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: -8,
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "10px solid #fff",
              }} />
            )}
          </button>
        </div>
      </div>
      {/* Form */}
      <form
        style={{
          width: "100%",
          maxWidth: 340,
          margin: "0 auto",
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
        onSubmit={e => {
          e.preventDefault();
          if (isFilled) {
            navigate("/index");
          }
        }}
      >
        {/* Email/Phone input */}
        {type === "email" ? (
          <>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0px 16px 12px 15px",
                  borderRadius: 24,
                  border: "1px solid #E5E5E5",
                  fontSize: 16,
                  outline: "none",
                }}
              />
              <span style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.7,
              }}>
                {/* SVG email */}
                
              </span>
            </div>
            {/* Password input */}
            <div style={{ position: "relative" }}>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 15px",
                  borderRadius: 24,
                  border: "1px solid #E5E5E5",
                  fontSize: 16,
                  outline: "none",
                }}
              />
              <span style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.7,
              }}>
                {/* SVG password */}
                
              </span>
              <span
                style={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  opacity: 0.7,
                }}
                onClick={() => setShowPass(!showPass)}
              >
                {/* SVG eye (ẩn/hiện mật khẩu) */}
                {showPass ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12C23 12 19 4 12 4C5 4 1 12 1 12Z" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_12_1283)">
                      <path d="M9.9 4.24C10.5883 4.07888 11.2931 3.99834 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88M1 1L23 23M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.6819 3.96914 7.65661 6.06 6.06L17.94 17.94Z" stroke="#3E4D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1283">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </span>
            </div>
            {/* Lưu thông tin + Quên mật khẩu */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 15,
              color: "#7A89A8",
            }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input type="checkbox" style={{ accentColor: "#B600C4" }} />
                Lưu thông tin
              </label>
              <a href="#" style={{ color: "#7A89A8", textDecoration: "underline", fontWeight: 500 }}>
                Quên mật khẩu?
              </a>
            </div>
            {/* Nút đăng nhập */}
            <button
              type="submit"
              disabled={!isFilled}
              style={{
                width: "100%",
                background: isFilled ? "#B600C4" : "#F2C2F7",
                color: "#fff",
                border: "none",
                borderRadius: 24,
                padding: "14px 0",
                fontWeight: 700,
                fontSize: 18,
                cursor: isFilled ? "pointer" : "not-allowed",
                marginTop: 8,
                transition: "background 0.2s",
              }}
            >
              Đăng Nhập
            </button>
          </>
        ) : (
          <>
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #E5E5E5",
                borderRadius: 24,
                padding: "0 16px",
                height: 48,
                marginBottom: 18,
                background: "#fff",
              }}>
                {/* Chọn mã quốc gia */}
                <select
                  className="login-country-select"
                  title="Chọn mã quốc gia"
                  defaultValue="+84"
                >
                  <option value="+84">+84</option>
                  {/* Thêm các mã khác nếu cần */}
                </select>
                
                {/* Nhập số điện thoại */}
                <input
                  type="tel"
                  placeholder="123456789"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: 16,
                    flex: 1,
                    background: "transparent",
                  }}
                />
              </div>
              <button
                type="button"
                style={{
                  width: "100%",
                  background: "#B600C4",
                  color: "#fff",
                  border: "none",
                  borderRadius: 24,
                  padding: "14px 0",
                  fontWeight: 700,
                  fontSize: 18,
                  cursor: phone ? "pointer" : "not-allowed",
                  marginBottom: 8,
                  transition: "background 0.2s",
                  opacity: phone ? 1 : 0.6,
                }}
                disabled={!phone}
                onClick={() => {
                  // Xử lý gửi mã OTP ở đây
                }}
              >
                Gửi mã OTP
              </button>
            </div>
          </>
        )}
      </form>
      {/* Đăng ký */}
      <div style={{
        marginTop: 220,
        textAlign: "center",
        fontSize: 15,
        color: "#232B3A",

      }} onClick={() => {
        // Chuyển hướng đến trang đăng ký
        navigate("/register");
      }}
      >
        Bạn chưa có tài khoản?{" "}
        <a href="#" style={{ color: "#B600C4", fontWeight: 700, textDecoration: "underline" }}>
          Đăng Ký
        </a>
      </div>
    </div>
  );
};

export default Login;