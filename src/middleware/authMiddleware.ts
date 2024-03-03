import basicAuth from 'express-basic-auth';

// Middleware: Basic Auth
const authMiddleware = basicAuth({
    users: { 'YOUR_ADMIN_USERNAME':'YOUR_ADMIN_PASSWORD' },
    unauthorizedResponse: {'error':'You are unauthorized'}
});

export default authMiddleware;