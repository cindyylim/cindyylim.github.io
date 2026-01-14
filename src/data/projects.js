export const projects = [
    {
        id: 'language-learning-app',
        title: 'AI Powered Language Learning App',
        description: 'A language learning app that generates personalized quizzes of selected difficulty level and vocabulary in the target language using Google Gemini API. Supports multiple languages and provides analytics to track progress.',
        detailedDescription: 'This application leverages the power of Large Language Models (LLMs) to provide a tailored language learning experience. Users can practice vocabulary, use AI to generate vocabulary lists in multiple languages, take AI-generated quizzes, and track their progress over time. The backend is built with Node.js and Express, while the frontend utilizes React and TypeScript for a robust user experience. Check out the live project below or click on the github link to view the demo gifs.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Google Gemini API', 'MongoDB'],
        image: '/images/vocabulary.png',
        images: [
            '/images/login.png',
            '/images/dashboard.png',
            '/images/gen-vocab.png',
            '/images/vocabulary.png',
            '/images/vocab-list.png',
            '/images/edit-vocab.png',
            '/images/del-vocab.png',
            '/images/gen-quiz.png',
            '/images/quiz.png',
            '/images/analytics.png',
        ],
        link: 'https://languagelearningapp-z0ca.onrender.com/login',
        github: 'https://github.com/cindyylim/LanguageLearningApp/tree/main'
    },
    {
        id: 'ticket-system',
        title: 'TicketHub - Ticketmaster Clone',
        description: 'A full stack ticket booking system with distributed locking, Redis caching, Server-Sent Events (SSE) for real-time updates, and a virtual waiting queue to handle high traffic.',
        detailedDescription: 'TicketHub is a full stack event ticket booking platform built to handle high-traffic booking scenarios. It uses Redis distributed locking to prevent double-booking, Redis caching for fast data access, Server-Sent Events (SSE) for real-time seat availability updates, and a virtual FIFO queue to protect backend services under load. The frontend features a modern, responsive UI with interactive seat maps and live updates, while the backend exposes a RESTful API for bookings and user auth. The tech stack includes Node.js, Express, TypeScript, MongoDB, Redis, BullMQ, React, TypeScript, Vite, and JWT auth.',
        tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'SSE', 'Vite', 'JWT'],
        image: '/images/tickethub.png',
        images: [
            '/images/tickethub-login.png',
            '/images/tickethub-dashboard.png',
            '/images/tickethub-event.png',
            '/images/tickethub-seats.png',
            '/images/tickethub-waiting-queue.png',
            '/images/tickethub-purchase-ticket.png',
            '/images/tickethub-my-ticket.png',
        ],
        github: 'https://github.com/cindyylim/ticket-system'
    },
    {
        id: 'goodreads-clone',
        title: 'Goodreads Clone',
        description: "GoodreadsClone is a scalable social book platform inspired by Goodreads, built with a Node.js/Express backend and a React/Next.js frontend. It enables users to discover books, track their reading (e.g., Want to Read, Currently Reading, Read), rate and review titles, connect with friends, and join book clubs or discussions—all with user authentication and community features.",
        detailedDescription: 'GoodreadsClone is a full stack web application that recreates core Goodreads functionality, allowing users to discover books, track their reading progress, and engage with a community of readers. Built with a React/Next.js frontend and a Node.js/Express backend, the app supports user authentication, book search, reading lists, ratings, and reviews. This project highlights modern full stack development, RESTful API design, and scalable application architecture.',
        tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Next.js'],
        image: '/images/book-catalog.png',
        images: [
            '/images/login-page.png',
            '/images/discover-next-book.png',
            '/images/book-catalog.png',
            '/images/my-bookshelf.png',
            '/images/profile.png',
            '/images/book-clubs.png',
            '/images/group-discussion.png',
            '/images/new-discussion.png',
        ],
        link: 'https://goodreads-frontend-rp56.onrender.com/login',
        github: 'https://github.com/cindyylim/GoodreadsClone'
    },
    {
        id: 'file-sync-app',
        title: 'File sync app',
        description: 'A file sync app that allows users to sync their files to the cloud and access them from any device.',
        detailedDescription: 'A full stack file synchronization application with AWS S3 storage and MongoDB Change Data Capture (CDC) for real-time cross-device sync.',
        tags: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'AWS S3'],
        image: '/images/file-sync-app-dashboard.png',
        images: [
            '/images/file-sync-app-login.png',
            '/images/file-sync-app-dashboard.png',
        ],
        github: 'https://github.com/cindyylim/FileShareApp'
    },
    {
        id: 'booking-app',
        title: 'Salon appointments app',
        description: 'A salon appointments app that allows users to book appointments with a salon.',
        detailedDescription: 'Developed a full stack booking application enabling users to schedule appointments with time slot management, email reminders, and robust user workflows. The system supports both guest and authenticated user bookings and includes an administrative interface for managing available time slots.',
        tags: ['React', 'Java', 'Node.js', 'Express', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'JWT', 'JavaMail'],
        image: '/images/booking-page.png',
        images: [
            '/images/booking-page.png',
            '/images/admin-dashboard.png',
            '/images/test-dashboard.png',
            '/images/confirm-booking.png',
            '/images/confirmation.png',
            '/images/upcoming-booking.png',
        ],
        github: 'https://github.com/cindyylim/BookingSystem'
    },
    {
        id: 'ecommerce-app',
        title: 'E-Commerce app',
        description: 'An application that lets users browse, search, and purchase products directly from their device. Manage orders, payments, and delivery without visiting a physical store.',
        detailedDescription: 'Built a modern, responsive full-stack e-commerce platform with React, Node.js/Express, and MongoDB. Features include product browsing and search, shopping cart and secure checkout, inventory management with admin dashboard, item reservation to prevent overselling, and Stripe payment integration',
        tags: ['React', 'Java', 'Node.js', 'Express', 'JWT', 'MongoDB', 'Redis'],
        image: '/images/front-page.png',
        images: [
            '/images/front-page.png',
            '/images/jackets.png',
            '/images/jacket-loved.png',
            '/images/wishlist.png',
            '/images/checkout-page.png',
            '/images/card-details.png',
            '/images/payment-success.png'
        ],
        github: 'https://github.com/cindyylim/EcommerceStore'
    }
];
