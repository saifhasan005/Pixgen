import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL : "https://pixgen-psi.vercel.app",
  fetchOptions: {},
  user: {
    additionalFields: {
      image: {
        type: "string",
      }
    }
  }
});