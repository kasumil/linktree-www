module.exports = {
  apps: [
    {
      name: "linktree-www",
      interpreter: "node",
      script: "./node_modules/next/dist/bin/next",
      args: "start", // next start 혹은 node server.js
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
