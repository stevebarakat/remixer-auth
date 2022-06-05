import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Kudos App</h1>
      </header>
      {children}
      <footer>@copy2022 kudos app</footer>
    </div>
  );
}
