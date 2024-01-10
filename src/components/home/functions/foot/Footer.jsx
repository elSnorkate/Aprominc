import React from 'react';

export const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={copyrightStyle}>
          <br />
          &copy; APROMINC S.R.LTDA, 2024 <br />
          Jr. Junin Nro. 240 Huayllay - Pasco - Perú <br />
          20323791415
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#334443',
  borderRadius: '1rem',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  marginTop: '30px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const copyrightStyle = {
  flex: 1,
};


export default Footer;
