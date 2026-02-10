import React, { useState, useEffect } from 'react';
import { getCookieConsentValue } from 'react-cookie-consent';
import './CookieSettings.css';

/**
 * Cookie Settings component for managing user consent preferences.
 * 
 * Allows users to:
 * - View current cookie consent status (Accepted/Rejected/Not Set)
 * - Accept cookies to enable LocalStorage
 * - Reject cookies and clear all stored data
 * - View information about what data is stored
 * - Access Privacy Policy
 * 
 * Features:
 * - Visual status indicators with color coding
 * - Confirmation dialog before data deletion
 * - Automatic page reload after consent changes
 * - Links to Privacy Policy documentation
 * 
 * @component
 * @example
 * ```jsx
 * <Route path="/cookie-settings" element={<CookieSettings />} />
 * ```
 */
const CookieSettings = () => {
    const [consentStatus, setConsentStatus] = useState('unknown');
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    useEffect(() => {
        checkConsentStatus();
    }, []);

    const checkConsentStatus = () => {
        const consent = getCookieConsentValue('quizCookieConsent');
        if (consent === 'true') {
            setConsentStatus('accepted');
        } else if (consent === 'false') {
            setConsentStatus('rejected');
        } else {
            setConsentStatus('not-set');
        }
    };

    const handleAccept = () => {
        // Set cookie consent to true
        document.cookie = 'quizCookieConsent=true; max-age=' + (90 * 24 * 60 * 60) + '; path=/';
        setConsentStatus('accepted');
        window.location.reload(); // Reload to apply changes
    };

    const handleReject = () => {
        setShowConfirmDialog(true);
    };

    const confirmReject = () => {
        // Clear all localStorage
        localStorage.clear();
        // Set cookie consent to false
        document.cookie = 'quizCookieConsent=false; max-age=' + (90 * 24 * 60 * 60) + '; path=/';
        setConsentStatus('rejected');
        setShowConfirmDialog(false);
        window.location.reload(); // Reload to apply changes
    };

    const cancelReject = () => {
        setShowConfirmDialog(false);
    };

    return (
        <div className="cookie-settings">
            <div className="cookie-settings-container">
                <h2>Cookie Settings</h2>

                <div className="cookie-settings-status">
                    <h3>Current Status</h3>
                    <div className={`status-indicator status-${consentStatus}`}>
                        {consentStatus === 'accepted' && <span>Cookies Accepted</span>}
                        {consentStatus === 'rejected' && <span>Cookies Rejected</span>}
                        {consentStatus === 'not-set' && <span>Not Set</span>}
                    </div>
                </div>

                <div className="cookie-settings-info">
                    <h3>What We Store</h3>
                    <p>When you accept cookies, we store the following data locally on your device:</p>
                    <ul>
                        <li><strong>Quiz Settings:</strong> Your preferred number of questions and difficulty level</li>
                        <li><strong>Quiz Results:</strong> Your username, scores, and completion times</li>
                        <li><strong>Cookie Consent:</strong> Your preference (expires after 90 days)</li>
                    </ul>
                    <p className="info-note">
                        All data is stored in your browser's LocalStorage and never transmitted to external servers.
                    </p>
                </div>

                <div className="cookie-settings-actions">
                    <button
                        className="btn-accept"
                        onClick={handleAccept}
                        disabled={consentStatus === 'accepted'}
                    >
                        {consentStatus === 'accepted' ? 'Already Accepted' : 'Accept Cookies'}
                    </button>
                    <button
                        className="btn-reject"
                        onClick={handleReject}
                        disabled={consentStatus === 'rejected'}
                    >
                        {consentStatus === 'rejected' ? 'Already Rejected' : 'Reject & Clear Data'}
                    </button>
                </div>

                <div className="cookie-settings-links">
                    <a
                        href="https://github.com/lahoda-dmytro/trivia_quiz/blob/main/PRIVACY.md"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read Privacy Policy →
                    </a>
                </div>
            </div>

            {showConfirmDialog && (
                <div className="confirm-dialog-overlay" onClick={cancelReject}>
                    <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
                        <h3>Confirm Action</h3>
                        <p>
                            This will reject cookies and <strong>permanently delete all your quiz data</strong> including:
                        </p>
                        <ul>
                            <li>All quiz results and scores</li>
                            <li>Your saved settings</li>
                            <li>Your username</li>
                        </ul>
                        <p>Are you sure you want to continue?</p>
                        <div className="confirm-dialog-actions">
                            <button className="btn-cancel" onClick={cancelReject}>
                                Cancel
                            </button>
                            <button className="btn-confirm-reject" onClick={confirmReject}>
                                Yes, Delete Everything
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CookieSettings;
