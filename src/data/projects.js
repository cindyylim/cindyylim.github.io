export const projects = [
    {
        id: 'language-learning-app',
        title: 'AI Powered Language Learning App',
        tagline: 'Practice vocabulary and take AI-generated quizzes in 20 supported languages',
        description: 'A language learning app that generates personalized quizzes of selected difficulty level and vocabulary in the target language using OpenAI API. Supports multiple languages and provides analytics to track progress.',
        detailedDescription: 'This application leverages the power of Large Language Models (LLMs) to provide a tailored language learning experience. Users can practice vocabulary, use AI to generate vocabulary lists in multiple languages, take AI-generated quizzes, and track their progress over time. The backend is built with Node.js and Express, while the frontend utilizes React and TypeScript for a robust user experience. Check out the live project below or click on the github link to view the demo gifs.',
        overview: [
            'Generate vocabulary lists and quizzes tailored to your level and target language. Track progress with built-in analytics across multiple languages.',
            'Built with React and TypeScript on the frontend, Node.js and Express on the backend, with OpenAI API for content generation.',
        ],
        useCases: [
            'Generate a vocabulary list for beginner Spanish and quiz yourself',
            'Track quiz scores and progress over time',
            'Practice multiple languages from one account',
        ],
        categories: ['full stack', 'AI'],
        image: '/images/icons/language-learning-icon.png',
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
        id: 'file-sync-app',
        title: 'File sync app',
        tagline: 'Sync files to the cloud and access them from any device',
        description: 'A file sync app that allows users to sync their files to the cloud and access them from any device.',
        detailedDescription: 'A full stack file synchronization application with AWS S3 storage and MongoDB Change Data Capture (CDC) for real-time cross-device sync.',
        overview: [
            'Upload files to the cloud and access them from any device. Changes sync in real time using MongoDB Change Data Capture and Socket.io.',
            'Files are stored in AWS S3. JWT authentication secures access.',
        ],
        useCases: [
            'Upload a document on your laptop and open it on your phone',
            'Share files across devices without manual downloads',
            'Keep a synced folder backed up to the cloud',
        ],
        categories: ['full stack'],
        image: '/images/icons/file-sync-icon.png',
        images: [
            '/images/file-sync-app-login.png',
            '/images/file-sync-app-dashboard.png',
        ],
        github: 'https://github.com/cindyylim/FileShareApp'
    },
    {
        id: 'ticket-system',
        title: 'TicketHub',
        tagline: 'Book event tickets with live seat maps and a waiting queue',
        description: 'A full stack ticket booking system with distributed locking, Redis caching, Server-Sent Events (SSE) for real-time updates, and a virtual waiting queue to handle high traffic.',
        detailedDescription: 'TicketHub is a full stack event ticket booking platform built to handle high-traffic booking scenarios. It uses Redis distributed locking to prevent double-booking, Redis caching for fast data access, Server-Sent Events (SSE) for real-time seat availability updates, and a virtual FIFO queue to protect backend services under load. The frontend features a modern, responsive UI with interactive seat maps and live updates, while the backend exposes a RESTful API for bookings and user auth. The tech stack includes Node.js, Express, TypeScript, MongoDB, Redis, BullMQ, React, TypeScript, Vite, and JWT auth.',
        overview: [
            'Book event tickets with interactive seat maps and live availability updates. Redis distributed locking prevents double-booking under high traffic.',
            'A virtual waiting queue protects the backend during ticket drops. Server-Sent Events push seat changes to all connected clients.',
        ],
        useCases: [
            'Select seats on a live map during a high-demand onsale',
            'Wait in a virtual queue when traffic exceeds capacity',
            'View purchased tickets and booking history',
        ],
        categories: ['full stack'],
        image: '/images/icons/tickethub-icon.png',
        images: [
            '/images/tickethub/tickethub-login.png',
            '/images/tickethub/tickethub-dashboard.png',
            '/images/tickethub/tickethub-event.png',
            '/images/tickethub/tickethub-seats.png',
            '/images/tickethub/tickethub-waiting-queue.png',
            '/images/tickethub/tickethub-purchase-ticket.png',
            '/images/tickethub/tickethub-my-ticket.png',
        ],
        github: 'https://github.com/cindyylim/ticket-system'
    },
    {
        id: 'mcp-pr-workflow-server',
        title: 'MCP PR Workflow Server',
        tagline: 'Automate GitHub pull requests and CI/CD monitoring via MCP',
        description: 'An MCP server that streamlines GitHub PR workflows, monitors CI/CD, and notifies teams via Slack.',
        detailedDescription: 'The MCP PR Workflow Server is a TypeScript-based Model Context Protocol (MCP) server designed to enhance developer productivity by automating routine PR tasks. It provides tools for PR analysis, template suggestions, CI/CD monitoring with GitHub Actions, and integration with Slack for real-time notifications. It enables AI assistants like Claude to intelligently interact with GitHub repositories, helping teams maintain high-quality code and efficient communication.',
        overview: [
            'An MCP server that connects AI assistants to your GitHub workflow. Analyze pull requests, suggest templates, monitor CI/CD, and send Slack notifications.',
            'Built with TypeScript and Node.js. Works with Claude and other MCP-compatible clients.',
        ],
        useCases: [
            'Ask an AI assistant to summarize open PRs in a repo',
            'Get Slack alerts when CI fails on a pull request',
            'Automate PR review checklist suggestions',
        ],
        categories: ['AI'],
        image: '/images/icons/mcp-pr-icon.png',
        images: [
            '/images/mcp-pr-workflow-server.gif',
            '/images/mcp-pr-workflow-server-2.gif',
        ],
        github: 'https://github.com/cindyylim/MCP-PR-Workflow-Server'
    },
    {
        id: 'my-shelf',
        title: 'Social book platform',
        tagline: 'Discover books, track your reading, and join book clubs',
        description: "This is a scalable social book platform inspired by Goodreads, built with a Node.js/Express backend and a React/Next.js frontend. It enables users to discover books, track their reading (e.g., Want to Read, Currently Reading, Read), connect with friends, and join book clubs or discussions—all with user authentication and community features.",
        detailedDescription: 'This is a full stack web application that recreates core Goodreads functionality, allowing users to discover books, track their reading progress, and engage with a community of readers. Built with a React/Next.js frontend and a Node.js/Express backend, the app supports user authentication, book search, and reading lists. This project highlights modern full stack development, RESTful API design, and scalable application architecture.',
        overview: [
            'Discover books, track what you\'re reading, and connect with other readers. Supports reading lists, book clubs, and group discussions.',
            'Built with Next.js and React on the frontend, Node.js and Express on the backend.',
        ],
        useCases: [
            'Add books to Want to Read, Currently Reading, or Read shelves',
            'Join a book club and start a group discussion',
            'Search the catalog and browse friends\' shelves',
        ],
        categories: ['full stack'],
        image: '/images/icons/social-book-icon.png',
        images: [
            '/images/my-shelf/myshelf-home.png',
            '/images/my-shelf/myshelf-login.png',
            '/images/my-shelf/myshelf-catalog.png',
            '/images/my-shelf/myshelf-bookshelf.png',
            '/images/my-shelf/myshelf-profile.png',
            '/images/my-shelf/myshelf-community.png',
            '/images/my-shelf/myshelf-group.png',
            '/images/my-shelf/myshelf-discussion.png',
        ],
        link: 'https://myshelf-nr08.onrender.com/login',
        github: 'https://github.com/cindyylim/MyShelf'
    },
    {
        id: 'newsletter-triage',
        title: 'Newsletter Triage',
        tagline: 'Summarize RSS feeds with AI and send digests to Telegram',
        description: 'An automated AI-powered system that scrapes newsletters, generates intelligent summaries using Gemini, and delivers them via Telegram.',
        detailedDescription: 'Newsletter Triage is a lightweight Python-based automation tool designed to solve information overload. It monitor RSS and Atom feeds, uses Google Gemini API to distill long articles into high-signal summaries, and categorizes them into user-defined niches. The summaries are delivered directly to your Telegram, ensuring you stay informed without the clutter of a traditional inbox. Built with a focus on simplicity and portability, it uses zero external dependencies and runs seamlessly as a scheduled background task.',
        overview: [
            'Monitor RSS and Atom feeds, summarize articles with Google Gemini, and deliver digests to Telegram. Runs on a schedule with no manual checking.',
            'Categorizes summaries into user-defined niches to cut through information overload.',
        ],
        useCases: [
            'Get daily AI summaries of tech newsletters in Telegram',
            'Filter feeds by topic or niche',
            'Replace reading full articles with concise digests',
        ],
        categories: ['AI', 'Python'],
        image: '/images/icons/newsletter-triage-icon.png',
        images: [
            '/images/newsletter-triage.png',
            '/images/newsletter-alerts.png',
        ],
        github: 'https://github.com/cindyylim/NewsletterTriage'
    },
    {
        id: 'stock-monitor-bot',
        title: 'Stock Monitor Bot',
        tagline: 'Monitor your watchlist and get Telegram alerts on RSI signals',
        description: 'A Python-based automated stock monitoring tool that calculates RSI and sends alerts via Telegram.',
        detailedDescription: 'Stock Monitor Bot is a Python-based automation tool that monitors a customized list of stocks, calculates their Relative Strength Index (RSI) using yfinance data, and sends real-time alerts via Telegram when a stock becomes oversold or overbought. It features configurable watchlists, RSI thresholds, and check intervals, providing a seamless way to stay informed about market signals without manual tracking.',
        overview: [
            'Monitor a custom stock watchlist and calculate RSI using yfinance. Sends Telegram alerts when a stock hits oversold or overbought thresholds.',
            'Configure watchlists, RSI levels, and check intervals.',
        ],
        useCases: [
            'Get alerted when a stock drops into oversold territory',
            'Track a personal watchlist without checking charts daily',
            'Set custom RSI thresholds per use case',
        ],
        categories: ['Python'],
        image: '/images/icons/stock-monitor-icon.png',
        images: [
            '/images/stock-monitor-bot.png',
            '/images/stock-alerts.png',
        ],
        github: 'https://github.com/cindyylim/Stock-Monitor-Bot'
    },
    {
        id: 'booking-app',
        title: 'Salon appointments app',
        tagline: 'Book salon appointments with time slots and email reminders',
        description: 'A salon appointments app that allows users to book appointments with a salon.',
        detailedDescription: 'Developed a full stack booking application enabling users to schedule appointments with time slot management, email reminders, and robust user workflows. The system supports authenticated user bookings and includes an administrative interface for managing available time slots.',
        overview: [
            'Book salon appointments with real-time slot selection. Email reminders confirm bookings. Admins manage availability from a dedicated dashboard.',
            'Built with React on the frontend, Spring Boot and PostgreSQL on the backend.',
        ],
        useCases: [
            'Pick an open time slot and receive a confirmation email',
            'Manage bookings and availability as a salon admin',
            'View upcoming appointments from a user dashboard',
        ],
        categories: ['full stack'],
        image: '/images/icons/salon-booking-icon.png',
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
        tagline: 'Browse products, checkout with Stripe, and reserve inventory',
        description: 'An application that lets users browse, search, and purchase products directly from their device. Manage orders, payments, and delivery without visiting a physical store.',
        detailedDescription: 'Built a modern, responsive full-stack e-commerce platform with React, Node.js/Express, and MongoDB. Features include product browsing and search, shopping cart and secure checkout, inventory management with admin dashboard, item reservation to prevent overselling, and Stripe payment integration',
        overview: [
            'Browse and search products, add to cart, and checkout with Stripe. Redis-backed inventory reservations prevent overselling during checkout.',
            'Includes wishlists, an admin dashboard, and order management.',
        ],
        useCases: [
            'Search products and complete a secure Stripe checkout',
            'Save items to a wishlist for later',
            'Reserve inventory during checkout to avoid overselling',
        ],
        categories: ['full stack'],
        image: '/images/icons/ecommerce-icon.png',
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

export const filterCategories = ['full stack', 'AI', 'Python'];

export function getRelatedProjects(currentId, limit = 3) {
    const current = projects.find((p) => p.id === currentId);
    if (!current) return [];

    return projects
        .filter((p) => p.id !== currentId && p.categories.some((c) => current.categories.includes(c)))
        .slice(0, limit);
}

export function getNextProject(currentId) {
    const index = projects.findIndex((p) => p.id === currentId);
    if (index === -1) return projects[0];
    return projects[(index + 1) % projects.length];
}
