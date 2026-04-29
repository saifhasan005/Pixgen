import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  fetchOptions: {},
  user: {
    additionalFields: {
      image: {
        type: "string",
      }
    }
  }
});