# Stage 1: Build the application and install dependencies
FROM node:18 AS builder

WORKDIR /user-service

# Install OS updates
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Create a smaller final image
FROM node:18-slim

WORKDIR /user-service

# Install OS updates (optional in slim image, typically not needed)
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy only the necessary files from the build stage
COPY --from=builder /user-service/node_modules /user-service/node_modules
COPY --from=builder /user-service /user-service

EXPOSE 8080

CMD ["node", "server.js"]
