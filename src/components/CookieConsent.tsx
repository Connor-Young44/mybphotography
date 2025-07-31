import React, { useState, useEffect } from 'react';

const COOKIE_NAME = 'cookie_consent';

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, 'true', 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        We use cookies to improve your experience. By using this site, you agree to our cookie policy.
        <a href="/privacy" style={styles.link}> Learn more</a>.
      </p>
      <button onClick={handleAccept} style={styles.button}>Accept</button>
    </div>
  );
};

export default CookieConsent;

const styles: { [key: string]: React.CSSProperties } = {
  banner: {
    position: 'fixed',
    bottom: 0,
    width: '90%',
    background: '#222',
    color: '#fff',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
    maxWidth: '80%',
  },
  link: {
    color: '#FFD700',
    textDecoration: 'underline',
    marginLeft: '0.5rem',
  },
  button: {
    background: '#FFD700',
    color: '#222',
    border: 'none',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
