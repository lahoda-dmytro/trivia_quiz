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
            expires={90}
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
                    We use LocalStorage to save your quiz settings and results locally on your device.
                    No data is transmitted to external servers or third parties.{' '}
                    <a
                        href="https://github.com/lahoda-dmytro/trivia_quiz/blob/main/PRIVACY.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#2d3748', textDecoration: 'underline', fontWeight: '600' }}
                    >
                        Learn more
                    </a>
                </p>
            </div>
        </CookieConsent>
    );
};

export default CookieBanner;
