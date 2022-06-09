import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const loggedIn = await requireUserId(request);
  return loggedIn;
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Remixer</h1>
        <form action="/logout" method="post">
          <button type="submit">Sign Out</button>
        </form>
      </header>
      {children}
      <footer>footer</footer>
    </div>
  );
}
