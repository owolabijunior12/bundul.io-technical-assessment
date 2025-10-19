 
# Bundul Assessment - Due Payments App

This is a **React Native** project built with **Expo** for a technical interview assessment.  
The app displays a list of upcoming payments, highlights payments due soon, and allows users to **Pay Now** or **Pay Later**.  

- 

## Features

- List of upcoming payments with due dates.
- Highlights payments due soon (within 3 days).
- Modal feedback for payment actions.
- Empty state when no payments are available.
- Animated UI with `Moti` and gradient backgrounds.
- Status bar matches the header color.
- Fully built with **TypeScript** and **Expo Router**.

 

## Prerequisites

- Node.js >= 18  
- npm >= 9 or yarn >= 1.22  
- Expo CLI (`npm install -g expo-cli`)  

Optional for simulators:  
- Android Studio or Xcode

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository_url>
cd bundul-assessment
````

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the Expo development server**

```bash
npm start
# or
yarn start
```

4. **Run the app**

* Android: Scan QR code with **Expo Go** or run on emulator.
* iOS: Scan QR code with **Expo Go** or run on simulator.
* Web: Press `w` in terminal to open in browser.

---

## Project Structure

```
bundul-assessment/
├─ app/                  # Expo Router pages
├─ components/           # Reusable components (Header, PaymentCard, EmptyState, PaymentModal)
├─ hooks/                # Custom hooks (usePayments)
├─ constants/            # Theme and color definitions
├─ utils/                # Utility functions (formatCurrency)
├─ tsconfig.json         # TypeScript configuration
└─ README.md             # This file
```

---

## How to Review

1. Start the app using Expo.
2. Check that the **header and status bar** display the correct blue color.
3. Verify the **payments list** sorts correctly by due date.
4. Test **Pay Now** and **Pay Later** modals.
5. Confirm the **empty state** displays when no payments are available.

---

## Dependencies

* `react-native`
* `expo`
* `expo-linear-gradient`
* `moti`
* `lottie-react-native`
* `react-native-safe-area-context`

---

## Notes

* Payments are currently loaded from a **mock dataset**. 
* Modals handle both "Pay Now" and "Pay Later" actions with appropriate feedback.

---

 