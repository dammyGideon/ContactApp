# Use Node.js version 14 as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 for the Express.js application
EXPOSE 3000

# Set the environment variables for the MongoDB connection
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017
ENV MONGO_DATABASE=mydatabase

# Start the Express.js application with nodemon
CMD ["npx", "nodemon", "server.js"]
