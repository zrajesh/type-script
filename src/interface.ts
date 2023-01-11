interface User {
    username: string;
    email: string;
    readonly userId: number;
    startTrial(): string;
}

// Re-opening of interface
interface User {
    googleId: string;
}
// Inheritance
interface Admin extends User {
    role: string;
}

const Rajesh: Admin = {
    username: "Rajesh",
    email: "rajesh@gmail.com",
    role: "admin",
    googleId: "google",
    userId: 4156497,
    startTrial: function() {
        return "Starting your trial"
    }
};

// Interface vs Type
// Refer official docs

export {}