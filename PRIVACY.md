# Privacy Policy and User Agreement

**Last Updated:** February 10, 2026

## Disclaimer

This software is provided "as is" for educational purposes only. The author makes no warranties, express or implied, regarding the suitability, accuracy, reliability, or fitness for any particular purpose. Use at your own risk.

## Scope and Limitations

This project is intended solely for educational and learning purposes. It is not designed for production use or commercial deployment. Users are responsible for ensuring compliance with applicable laws and regulations in their jurisdiction.

## Data We Store Locally

When you accept cookies, we store the following information in your browser's LocalStorage:

### Quiz Settings (Storage Key: `quiz-settings`)
- **Number of questions**: Your preferred quiz length (5, 10, or 15 questions)
- **Difficulty level**: Your preferred difficulty (easy, medium, or hard)
- **Storage format**: JSON

### Quiz Results (Storage Key: `quiz-results-by-user`)
- **Username**: The name you enter before taking a quiz
- **Quiz scores**: Number of correct answers for each quiz attempt
- **Completion times**: How long each quiz took to complete
- **Timestamps**: Date and time of each quiz attempt
- **Storage format**: JSON

### Cookie Consent (Storage Key: `quizCookieConsent`)
- **Consent status**: Whether you accepted or rejected cookies
- **Expiration**: 90 days from your decision

All data is stored in JSON format and **never leaves your device**. No information is transmitted to external servers, third parties, or used for analytics.

## Data Processing

This software does not perform server-side processing or collection of personal data. All information is stored exclusively on the user's local device.

LocalStorage is used only to store user preferences and quiz results. No data is transmitted to third parties, stored on external servers, or used for analytics or profiling purposes.

## GDPR Compliance

Users retain full control over their local data. Under GDPR principles, you have the right to:

- **Access**: View all locally stored data through browser DevTools
- **Deletion**: Delete all data at any time (see instructions below)
- **Portability**: Export data from LocalStorage as desired
- **Control**: Disable LocalStorage functionality through browser settings
- **Revoke consent**: Change your cookie preference at any time

Since this software does not transmit data beyond the user's local device, it does not fall under GDPR provisions regarding cross-border data transfer or processing by data controllers or processors.

## How to Delete Your Data

### Option 1: Through the Application

1. Navigate to **Cookie Settings** (link in the header)
2. Click **"Reject All"** button
3. Confirm the action
4. All data will be automatically cleared from LocalStorage

### Option 2: Through Browser Settings

#### Chrome / Edge / Brave
1. Press **F12** to open DevTools
2. Go to **Application** tab → **Storage** → **LocalStorage**
3. Select your site from the list
4. Delete entries with keys:
   - `quiz-settings`
   - `quiz-results-by-user`
   - `quizCookieConsent`

#### Firefox
1. Press **F12** to open DevTools
2. Go to **Storage** tab → **Local Storage**
3. Select your site from the list
4. Right-click and delete entries with keys:
   - `quiz-settings`
   - `quiz-results-by-user`
   - `quizCookieConsent`

#### Safari
1. Open **Develop** menu → **Show Web Inspector**
2. Go to **Storage** tab → **Local Storage**
3. Select your site and delete the relevant entries

### Option 3: Clear All Browser Data

You can also clear all LocalStorage by clearing your browser's cache and cookies through browser settings.

## User Responsibilities

Users must:

- Ensure appropriate use of the software in accordance with local laws
- Not use the software for unlawful purposes
- Not redistribute modified versions without proper attribution
- Understand that no technical support is guaranteed

## Contact

For questions about this privacy policy or your data:

- **GitHub**: [lahoda-dmytro](https://github.com/lahoda-dmytro)
- **Repository**: [trivia_quiz](https://github.com/lahoda-dmytro/trivia_quiz)

## Modifications

The author reserves the right to modify this policy. Users are advised to review this document periodically for updates. The "Last Updated" date at the top of this document indicates when the policy was last revised.

