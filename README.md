# Farmers Connect – Auth UI (React + TypeScript + Tailwind)

This project provides responsive, mobile-first Login, Signup, and Phone Verification (OTP) pages with a clean, subtle UI for Farmers Connect.

## Tech stack
- React 18 + TypeScript
- Vite
- Tailwind CSS (+ forms plugin)
- React Router v6

## Getting started

### 1) Install dependencies
```bash
npm install
```

### 2) Run the dev server
```bash
npm run dev
```
It will open at http://localhost:5173

### 3) Build for production
```bash
npm run build && npm run preview
```

## Project structure
```text
src/
  assets/
  index.css
  main.tsx
  modules/auth/
    AuthLayout.tsx
    LoginPage.tsx
    SignupPage.tsx
    VerifyPage.tsx
    auth-context.tsx
    components/
      Button.tsx
      TextInput.tsx
      PhoneInput.tsx
      OTPInput.tsx
```

## Notes
- Phone verification is mocked in `auth-context.tsx`. Replace `requestCode` and `verifyCode` with real API calls (e.g., Firebase Auth, Twilio Verify) later.
- `PhoneInput` includes a few common country codes; extend as needed.
- Uses dark mode (class-based). Add `class="dark"` to `<html>` or toggle via JS to test.

## Customization tips
- Colors are extended under `brand` in `tailwind.config.js`.
- UI atoms (`Button`, `TextInput`, `PhoneInput`, `OTPInput`) are reusable and accessible.

Enjoy building Farmers Connect!




