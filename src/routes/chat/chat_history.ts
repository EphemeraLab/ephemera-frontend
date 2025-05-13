import type { Message } from '$lib/chat'

export const chatHistory: Message[] = [
    {
        id: 1,
        role: "user",
        content: "Hi there! How are you today?"
    },
    {
        id: 2,
        role: "ephemera",
        content: "Hello! I'm doing well, thank you for asking. How can I help you?"
    },
    {
        id: 3,
        role: "user",
        content: "I'm looking for book recommendations."
    },
    {
        id: 4,
        role: "ephemera",
        content: "That's great! What genre are you interested in? Fiction, non-fiction, mystery, or something else?"
    },
    {
        id: 5,
        role: "user",
        content: "I love science fiction. Any good ones?"
    },
    {
        id: 6,
        role: "ephemera",
        content: "Absolutely! Have you read 'Dune' by Frank Herbert? It's a classic."
    },
    {
        id: 7,
        role: "user",
        content: "Yes, I've read Dune. Looking for something newer."
    },
    {
        id: 8,
        role: "ephemera",
        content: "Then you might enjoy 'The Three-Body Problem' by Liu Cixin. It's a modern masterpiece."
    },
    {
        id: 9,
        role: "user",
        content: "That sounds interesting! What's it about?"
    },
    {
        id: 10,
        role: "ephemera",
        content: "It's a hard sci-fi novel about humanity's first contact with an alien civilization. Very thought-provoking!"
    },
    {
        id: 11,
        role: "user",
        content: "I'll check it out. Thanks!"
    },
    {
        id: 12,
        role: "ephemera",
        content: "You're welcome! Happy reading!"
    },
    {
        id: 13,
        role: "user",
        content: "Do you have any fantasy recommendations too?"
    },
    {
        id: 14,
        role: "ephemera",
        content: "Of course! 'The Name of the Wind' by Patrick Rothfuss is fantastic."
    }
];