# Next.js App with Docker and MongoDB Integration

This repository contains a Next.js web application that utilizes various features, including appdir, Docker for containerization, MongoDB for data storage, and custom ul components.

## Features

- **Next.js Appdir Feature:** The Next.js app in this repository is organized using the appdir feature, allowing for a clean and structured project layout.

- **Docker Support:** The application is containerized using Docker, which simplifies the setup process and ensures consistent deployment across different environments.

- **MongoDB Integration:** MongoDB is used as the database for this application, enabling efficient and scalable data storage for the web application.

- **Tailwindcss Components:** The repository includes Tailwindcss styles for components that can be easily reused throughout the application.

## Prerequisites

Before you begin, make sure you have the following dependencies installed on your system:

- Node.js and npm (Node Package Manager)
- Docker

## Getting Started

Follow the steps below to set up the Next.js app on your local machine:

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/ehsanghaffar/nextjs-appdir-docker
```

2. Navigate to the project directory:

```bash
cd nextjs-appdir-docker
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and provide the necessary environment variables:

```
MONGODB_URI=mongodb://your-mongodb-uri
```

5. Run the Next.js development server:

```bash
npm run dev
```

The application should now be running on `http://localhost:3000`.

## Docker Deployment

To deploy the application using Docker, follow these steps:

1. Ensure Docker is installed and running on your system.

2. Build and run the Docker image using the provided Docker compose:

```bash
docker compose up -d
```

The application should now be accessible at `http://localhost:3000`.

## MongoDB Configuration

Make sure you have a running MongoDB instance and obtain the connection URI. Replace the `MONGODB_URI` in the `.env` file with your MongoDB connection string.

## Custom UL Components

The repository includes custom `ul` (unordered list) components that can be found in the `components` directory. You can easily use these components in your pages to display lists.

```jsx
import React from 'react';
import { CustomUl } from '../components';

const YourPage = () => {
  return (
    <div>
      <h1>Your Page Title</h1>
      <CustomUl items={['Item 1', 'Item 2', 'Item 3']} />
    </div>
  );
};

export default YourPage;
```

Feel free to explore the code and make any modifications or enhancements you need for your project.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! If you have any questions or need further assistance, feel free to reach out.
