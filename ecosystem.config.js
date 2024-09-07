const ignore_files = [
  ".git",
  "**/node_modules/**",
  "assets",
  "confirmation_files",
  "**/newrelic_agent.log",
  "**/venv/**",
  "**/__pycache__/**",
];

module.exports = {
  apps: [
    // {
    //   name: "Cron",
    //   script: "./Cron-Service/server.js",
    //   watch: true,
    //   autorestart: true,
    //   ignore_watch: ignore_files,
    //   env: {
    //     PORT: 8080,
    //   },
    //   node_args: "--trace-warnings",
    // },
    // {
    //   name: "Admin Service",
    //   script: "./Admin-Service/server.js",
    //   watch: true,
    //   autorestart: true,
    //   ignore_watch: ignore_files,
    //   env: {
    //     PORT: 3000,
    //   },
    //   node_args: "--trace-warnings",
    // },
    {
      name: "User-Service",
      script: "./User-Service/server.js",
      watch: true,
      autorestart: true,
      ignore_watch: ignore_files,
      env: {
        PORT: 4000,
      },
      node_args: "--trace-warnings",
    },
    {
      name: "User-Service",
      script: "./User-Service/server.js",
      watch: true,
      autorestart: true,
      ignore_watch: ignore_files,
      env: {
        PORT: 3000,
      },
      node_args: "--trace-warnings",
    },

    {
      name: "User-Service",
      script: "./User-Service/server.js",
      watch: true,
      autorestart: true,
      ignore_watch: ignore_files,
      env: {
        PORT: 5000,
      },
      node_args: "--trace-warnings",
    },
    // {
    //   name: "Dasboard-Service",
    //   script: "./Dashboard-Service/server.js",
    //   watch: true,
    //   autorestart: true,
    //   ignore_watch: ignore_files,
    //   env: {
    //     PORT: 3015,
    //   },
    //   node_args: "--trace-warnings",
    // },
  ],
};
