import React from 'react';
import './PrivacyPage.css';

const PrivacyPage = () => {
    return (
        <div className="privacy-page">
            <div className="privacy-container">
                <h1>Privacy Policy and User Agreement</h1>

                <section>
                    <h2>Disclaimer</h2>
                    <p>
                        This software is provided "as is" for educational purposes only. The author makes no warranties,
                        express or implied, regarding the suitability, accuracy, reliability, or fitness for any particular
                        purpose. Use at your own risk.
                    </p>
                </section>

                <section>
                    <h2>Scope and Limitations</h2>
                    <p>
                        This project is intended solely for educational and learning purposes. It is not designed for
                        production use or commercial deployment. Users are responsible for ensuring compliance with
                        applicable laws and regulations in their jurisdiction.
                    </p>
                </section>

                <section>
                    <h2>Data Processing</h2>
                    <p>
                        This software does not perform server-side processing or collection of personal data. All
                        information is stored exclusively on the user's local device.
                    </p>
                    <p>
                        LocalStorage is used only to store user preferences and interface settings. No data is transmitted
                        to third parties, stored on external servers, or used for analytics or profiling purposes.
                    </p>
                </section>

                <section>
                    <h2>GDPR Compliance</h2>
                    <p>Users retain full control over their local data. Users have the right to:</p>
                    <ul>
                        <li>View all locally stored data</li>
                        <li>Delete all data through browser settings</li>
                        <li>Export data from LocalStorage as desired</li>
                        <li>Disable LocalStorage functionality through browser settings</li>
                    </ul>
                    <p>
                        Since this software does not transmit data beyond the user's local device, it does not fall under
                        GDPR provisions regarding cross-border data transfer or processing by data controllers or processors.
                    </p>
                </section>

                <section>
                    <h2>User Responsibilities</h2>
                    <p>Users must:</p>
                    <ul>
                        <li>Ensure appropriate use of the software in accordance with local laws</li>
                        <li>Not use the software for unlawful purposes</li>
                        <li>Not redistribute modified versions without proper attribution</li>
                        <li>Understand that no technical support is guaranteed</li>
                    </ul>
                </section>

                <section>
                    <h2>Modifications</h2>
                    <p>
                        The author reserves the right to modify this policy. Users are advised to review this document
                        periodically for updates.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPage;
