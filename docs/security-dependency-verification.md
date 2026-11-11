# Security dependency follow-up (2026-11-11)

The security follow-up branch upgrades to stable Next 16.4.6, React/React DOM 19.3.1 and PM2 7.1.2, refreshes compatible lockfile dependencies, and pins patched picomatch 2.3.2 / source-map-js 1.2.2 via narrow affected-range overrides. The production audit is now zero, versus 30 findings before this update. The full development audit still reports eight moderate findings in the ESLint/TypeScript minimatch chain; no force downgrade or unsupported major override was applied.

Docker and CI use Node 22.23.4. Runtime PM2 now comes from the audited lockfile instead of an unpinned global install. The unchanged Next configuration is renamed to JavaScript ESM, eliminating the extra unpinned TypeScript runtime install. Port 3100 and PM2's process configuration remain unchanged.

Clean npm ci, lint (one existing hook-dependency warning), all 21 media tests, production build and TypeScript passed locally. Production build also passed on Node 20.20.2 before the Node 22 alignment. PM2-runtime with only production dependencies passed loopback synthetic-data checks on /api/projects/company, /company-project and /project. Test servers were stopped. This does not verify the Alpine container, image supply chain, live NAS target, ingress, or application security beyond these checks. The remote image-domain policy was not expanded.

Review this as a follow-up to PR7. PR8's manual publisher fix is independent. No production API/data, merge, image publish, or deployment was performed. The live deployment target and its exact image digest still need to be established before release.
