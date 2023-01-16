import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { store } from "./store";
import App from "./App";

Sentry.init({
  dsn: "https://ad26fdd8233847baa9b6e2da63c346b0@o822351.ingest.sentry.io/4504513103265792",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
