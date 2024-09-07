# Project Overview

This project implements a Node.js backend for authentication and a React frontend for e-commerce functionalities, using a range of modern technologies.

## Disclaimer
- The backend for authentication is built using Node.js and is deployed on Render (Free Tier).
- Due to the limitations of the free tier, the server response may sometimes be slow.
- A loading screen has been implemented to provide feedback during delays.

Please wait for a while and try refreshing the page if necessary. The website is functional, and the delay is caused by the hosting service. Apologies for any inconvenience.

---

## Features

### Backend
- **Authentication**: Implemented using a Node.js server.
- **JWT Authentication**: Utilized JWT (Access and Refresh Tokens) for secure authentication.
- **Persisted Login**: Login is persisted using an `httpOnly` refresh token (No usage of `localStorage` for tokens).
  
### Frontend
- **React Router**: Routing is handled using `react-router-dom`.
- **Protected Routes**: Implemented protected routes using the Context API.
- **Data Source**: Product data is fetched from the [Fake Store API](https://fakestoreapi.com/).
- **Axios**: Used for data fetching and authentication requests.
- **Cart Functionality**: Managed using Context API and a reducer.
- **Cart Persistence**: Cart state is persisted using `localStorage`.
  
### Libraries & Tools
- **React Icons**: Used for displaying icons.
- **Tailwind CSS**: Used for styling the application.
- **Vite**: Used for creating the project (fast build tool).

---

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites
- Git for version control

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sazzadtomal/ibos.git


2. Navigate to the project directory:
   ```bash
   cd ibos

3. Install dependencies:
   ```bash 
   npm install

### Running the Application

1. Enter command:
   ```bash
   npm run dev
 





