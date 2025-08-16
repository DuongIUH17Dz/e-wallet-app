import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "N/A">("N/A");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [refCode, setRefCode] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const isFilled = name && gender && dob && phone && email && agree;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* Banner giống login */}
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
      </div>
      {/* Form đăng ký */}
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
            // Xử lý đăng ký ở đây
            navigate("/index");
          }
        }}
      >
        {/* Họ tên */}
        <div style={{ width: "100%" }}>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#232B3A",
            marginBottom: 6,
            marginLeft: 4,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            Họ tên
            <span style={{ color: "#FF236D", fontSize: 16 }}>*</span>
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Nhập Họ và Tên của bạn"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 16px",
                borderRadius: 24,
                border: "1px solid #E5E5E5",
                fontSize: 16,
                outline: "none",
              }}
            />
          </div>
        </div>
        {/* Số điện thoại */}
        <div style={{ width: "100%" }}>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#232B3A",
            marginBottom: 6,
            marginLeft: 4,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            Số điện thoại
            <span style={{ color: "#FF236D", fontSize: 16 }}>*</span>
          </div>
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
        </div>
        {/* Email */}
        <div style={{ width: "100%" }}>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#232B3A",
            marginBottom: 6,
            marginLeft: 4,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            Email
            <span style={{ color: "#FF236D", fontSize: 16 }}>*</span>
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 16px",
                borderRadius: 24,
                border: "1px solid #E5E5E5",
                fontSize: 16,
                outline: "none",
              }}
            />
          </div>
          <div style={{
            fontSize: 13,
            color: "#7A89A8",
            marginTop: 6,
            marginLeft: 4,
          }}>
            Mật khẩu sẽ được tự động gửi vào email của bạn ngay khi đăng ký thành công!
          </div>
        </div>
        {/* Giới tính */}
        <div style={{ width: "100%" }}>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#232B3A",
            marginBottom: 6,
            marginLeft: 4,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            Giới tính
            <span style={{ color: "#FF236D", fontSize: 16 }}>*</span>
          </div>
          <div style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <button
              type="button"
              onClick={() => setGender("male")}
              style={{
                background: gender === "male" ? "#EAF4FF" : "#fff",
                border: gender === "male" ? "2px solid #237BFF" : "1px solid #E5E5E5",
                borderRadius: 18,
                padding: "8px 18px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                fontWeight: 700,
                color: "#237BFF",
                fontSize: 16,
                marginLeft:-30
              }}
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M17.1094 3L10.7683 9.67508M10.7683 9.67508C11.1985 10.0996 11.5406 10.6051 11.7747 11.1624C12.0089 11.7197 12.1304 12.3178 12.1325 12.9223C12.1345 13.5267 12.0169 14.1257 11.7865 14.6845C11.5561 15.2433 11.2175 15.7511 10.7901 16.1785C10.3626 16.606 9.85486 16.9446 9.29602 17.175C8.73717 17.4054 8.13826 17.523 7.53379 17.5209C6.92932 17.5189 6.33122 17.3973 5.77392 17.1632C5.21663 16.9291 4.71115 16.587 4.2866 16.1567C3.4517 15.2923 2.98973 14.1346 3.00017 12.9328C3.01062 11.7311 3.49264 10.5815 4.34243 9.73175C5.19221 8.88196 6.34177 8.39994 7.54351 8.38949C8.74524 8.37905 9.903 8.84102 10.7674 9.67591L10.7683 9.67508Z" stroke="#237BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1094 3H17.1094V10.5" stroke="#237BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nam
            </button>
            <button
              type="button"
              onClick={() => setGender("female")}
              style={{
                background: gender === "female" ? "#FFF0F5" : "#fff",
                border: gender === "female" ? "2px solid #FF236D" : "1px solid #E5E5E5",
                borderRadius: 18,
                padding: "8px 18px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                fontWeight: 700,
                color: "#FF236D",
                fontSize: 16,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.63918 18.5L9.63871 16.295L9.63871 11.4514M9.63871 11.4514C9.03425 11.4554 8.43496 11.3398 7.87534 11.1113C7.31572 10.8828 6.80683 10.5459 6.37797 10.1199C5.94911 9.69387 5.60876 9.18725 5.3765 8.62918C5.14424 8.07111 5.02467 7.4726 5.02467 6.86812C5.02467 6.26365 5.14424 5.66514 5.3765 5.10707C5.60876 4.54899 5.94911 4.04237 6.37797 3.61638C6.80683 3.19038 7.31572 2.85343 7.87534 2.62491C8.43496 2.3964 9.03425 2.28084 9.63871 2.28489C10.8403 2.30578 11.9856 2.79777 12.828 3.65491C13.6704 4.51205 14.1424 5.66575 14.1424 6.86753C14.1424 8.06931 13.6704 9.22302 12.828 10.0802C11.9856 10.9373 10.8403 11.4293 9.63871 11.4502V11.4514Z" stroke="#FF236D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15H13" stroke="#FF236D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nữ
            </button>
            <button
              type="button"
              onClick={() => setGender("N/A")}
              style={{background: gender === "N/A" ? "#EAF4FF" : "#fff",
                border: gender === "N/A" ? "2px solid #121212ff" : "1px solid #E5E5E5",
                borderRadius: 18,
                padding: "8px 18px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                fontWeight: 400,
                color: "#070707ff",
                fontSize: 16,
                marginLeft:10}}>
                N/A
            </button>
          </div>
        </div>
        {/* Ngày sinh */}
        <div style={{ width: "100%" }}>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#232B3A",
            marginBottom: 6,
            marginLeft: 4,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            Ngày sinh
            <span style={{ color: "#FF236D", fontSize: 16 }}>*</span>
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="date"
              placeholder="Ngày sinh"
              value={dob}
              onChange={e => setDob(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 44px",
                borderRadius: 24,
                border: "1px solid #E5E5E5",
                fontSize: 16,
                outline: "none",
                color: dob ? "#232B3A" : "#7A89A8",
              }}
            />
            <span style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 0.7,
            }}>
             
              
            </span>
          </div>
        </div>
        {/* Mã người giới thiệu */}
        <div style={{ width: "100%" }}>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#232B3A",
            marginBottom: 6,
            marginLeft: 4,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            Mã người giới thiệu
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Mã người giới thiệu (nếu có)"
              value={refCode}
              onChange={e => setRefCode(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 44px",
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
              {/* SVG mã giới thiệu */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 12H22.5" stroke="#B600C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
        {/* Checkbox đồng ý điều khoản */}
        <div style={{
          display: "flex",
          alignItems: "center",
          fontSize: 15,
          color: "#232B3A",
          marginBottom: 0,
            marginTop: 12,
            marginLeft: 25,
        }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
            style={{ accentColor: "#B600C4", marginRight: 8 }}
          />
          Tôi đồng ý với các&nbsp;
          <a
            href="#"
            style={{ color: "#237BFF", fontWeight: 500, textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Điều khoản
          </a>
          &nbsp;tại Vidimi
        </div>
        {/* Nút đăng ký */}
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
          Đăng Ký
        </button>
      </form>
      {/* Quay lại đăng nhập */}
      <div style={{
        marginTop: 52,
        textAlign: "center",
        fontSize: 15,
        color: "#232B3A",
        marginBottom: 20,
      }}>
        Đã có tài khoản?{" "}
        <a href="#" style={{ color: "#B600C4", fontWeight: 700, textDecoration: "underline" }}
          onClick={e => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Đăng Nhập
        </a>
      </div>
    </div>
  );
};

export default Register;