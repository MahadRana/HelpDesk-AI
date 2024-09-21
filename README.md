# HelpDesk AI

HelpDesk AI is an AI-powered chatbot application designed to help users diagnose and resolve common PC issues. The application utilizes OpenAI's GPT models for natural language processing.

## Features

- **AI-Powered Chatbot**: Uses OpenAI’s GPT models to help diagnose and troubleshoot PC problems.
- **Real-time Interaction**: Provides users with immediate responses and solutions.
- **State Management**: Efficient management of chat states and user interactions to maintain a smooth conversation flow.
  
## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI API for natural language processing
- **Hosting**: AWS EC2

## Installation (for local development)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/helpdesk-ai.git
   cd helpdesk-ai
2. Set up your .env file with your OpenAI API key and any other environment variables.
3. Install all dependencies in the client and server:
   ```bash
   npm install
4. Ensure that ports are configured to localhost in your configuration files (e.g., .env) to run the application locally.
5. Run the server and client separately:
   ```bash
   npm start
## Accessing the Application
> Note: The AWS EC2 instance hosting HelpDesk AI is currently not running. To run the application locally, follow the installation instructions above.
## Usage
1. Interact with HelpDesk AI by entering your PC-related issue into the chat interface.
2. Receive AI-generated solutions and troubleshooting steps based on your input.

## AWS Deployment

1. SSH into your EC2 instance.
2. Pull the latest code from the repository.
3. Ensure environment variables are set up correctly (e.g., OpenAI API keys).
4. Run the backend server using PM2:
   ```bash
   pm2 start server.js
5. Run the client:
   ```bash
   npm start
6. Access the application via the EC2 public IP.

   
