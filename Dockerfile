# Use official node image
FROM node:20-alpine AS base

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy rest of source
COPY . .

# Build Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS prod

WORKDIR /app
ENV NODE_ENV=production

# Copy built files and only production deps
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

CMD ["npm", "start"]
