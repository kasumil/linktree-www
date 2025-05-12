module.exports = {
  apps: [
    {
      name: "linktree-www",
      script: "npm",
      args: "start", // next start 혹은 node server.js
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
