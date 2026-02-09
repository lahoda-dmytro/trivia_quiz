import React from 'react';
import CookieConsent from 'react-cookie-consent';
import './CookieBanner.css';

/**
 * GDPR-compliant cookie consent banner
 * Displays information about LocalStorage usage for educational purposes
 */
const CookieBanner = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Reject All"
            cookieName="quizCookieConsent"
            style={{
                background: 'rgba(248, 249, 250, 0.98)',
                backdropFilter: 'blur(10px)',
                padding: '20px',
                alignItems: 'center',
                boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            }}
            buttonStyle={{
                background: '#2d3748',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '600',
                padding: '14px 32px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            declineButtonStyle={{
                background: '#ffffff',
                color: '#2d3748',
                fontSize: '15px',
                fontWeight: '600',
                padding: '14px 32px',
                borderRadius: '8px',
                border: '2px solid #cbd5e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            expires={365}
            enableDeclineButton
            onAccept={() => {
                console.log('Cookie consent accepted');
            }}
            onDecline={() => {
                console.log('Cookie consent declined');
                localStorage.clear();
            }}
        >
            <div className="cookie-banner-content">
                <h3 className="cookie-banner-title">We value your privacy</h3>
                <p className="cookie-banner-text">
                    We use LocalStorage to enhance your browsing experience and save your quiz settings locally.
                    No data is transmitted to external servers or third parties. By clicking "Accept All", you consent
                    to our use of LocalStorage.
                </p>
            </div>
        </CookieConsent>
    );
};

export default CookieBanner;
