import React from 'react'

const Footer = () => {
  // Объект со стилями, чтобы код в верстке был чистым и не вызывал ошибок
  const footerStyle = {
    backgroundColor: '#98aab0',
    color: '#ffffff',
    padding: '30px 20px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '1.8'
  };

  const linkStyle = {
    color: '#402e61',
    textDecoration: 'none',
    margin: '0 15px',
    display: 'inline-block'
  };

  const dividerStyle = {
    borderTop: '1px solid #333333',
    margin: '20px auto 0 auto',
    paddingTop: '15px',
    maxWidth: '600px',
    color: '#666666',
    fontSize: '12px'
  };

  return (
    <footer style={footerStyle}>
    
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', letterSpacing: '1px' }}>
        МОЙ МАГАЗИН
      </h3>

      
      <div style={{ margin: '15px 0' }}>
        <a href="#" style={linkStyle}>Каталог</a>
        <a href="#" style={linkStyle}>Доставка</a>
        <a href="#" style={linkStyle}>Контакты</a>
      </div>

      
      <div style={{ fontSize: '13px', color: '#b3b3b3' }}>
        <span>Тел: <a href="tel: +1 808 9432673" style={{ color: '#ffffff', textDecoration: 'none' }}>+7 (999) 123-45-67</a></span>
        <span style={{ margin: '0 10px' }}>|</span>
        <span>Email: <a href="mailto: allbags@shop.com" style={{ color: '#ffffff', textDecoration: 'none' }}>info@shop.com</a></span>
      </div>

        <div style={dividerStyle}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Все права защищены.
        </p>
      </div>
    </footer>
  );
};


export default Footer;