# Use official Node.js image
FROM node:18-alpine  

# Set working directory
WORKDIR /app  

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install  

# Copy backend code to the container
COPY . .  

# Expose the backend port
EXPOSE 3000  

# Start the Express.js server
CMD ["node", "server.js"]