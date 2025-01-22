// sentry.config.js
module.exports = {
    dsn: "https://<PUBLIC_KEY>@sentry.io/<PROJECT_ID>", // Your Sentry DSN
    environment: process.env.NODE_ENV || 'development', // Set environment (dev, prod)
    release: "my-project@1.0.0", // Specify release version
    tracesSampleRate: 1.0, // Performance monitoring (sample rate)
    beforeSend(event) {
      // Modify or filter events before they are sent to Sentry
      if (event.message && event.message.includes("IgnoredError")) {
        return null; // Filter out specific errors
      }
      return event;
    },
    integrations: [
      // Example: Integrate with specific services
      new Sentry.Integrations.Breadcrumbs({ console: true }),
    ],
  };
  