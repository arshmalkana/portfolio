# Use official node image
FROM node:20-alpine AS base

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

# Copy rest of source
COPY . .

# Build the Next.js app
RUN pnpm build

# Prod image
FROM node:20-alpine AS prod

WORKDIR /app

ENV NODE_ENV=production

# Copy built files and deps
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./next.config.mjs
COPY --from=base /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Start server
CMD ["pnpm", "start"]
