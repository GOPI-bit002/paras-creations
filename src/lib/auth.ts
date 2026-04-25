// ------------------------------------------------------------------
// DEMO AUTHENTICATION ONLY
// ------------------------------------------------------------------
// This is a placeholder client-side admin gate for version 1.
// It stores a flag in localStorage after a username/password check.
//
// !! DO NOT USE THIS IN PRODUCTION !!
//
// Before going live you MUST replace this with real authentication:
//  - NextAuth.js / Auth.js
//  - JWT + httpOnly cookies
//  - Credentials stored as password hashes in a database
//  - Proper session expiry and CSRF protection
// ------------------------------------------------------------------

export const DEMO_ADMIN_USERNAME = "admin";
export const DEMO_ADMIN_PASSWORD = "admin123";

const STORAGE_KEY = "paras_admin_auth";

export function login(username: string, password: string): boolean {
  if (username === DEMO_ADMIN_USERNAME && password === DEMO_ADMIN_PASSWORD) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}
