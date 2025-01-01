# Project Name: SmartScribe 


## Project Summary:
SmartScribe is an AI-powered PDF note-taking application that revolutionizes the way users interact with PDF documents. With its smart summarization and intelligent note extraction features, SmartScribe helps users quickly understand and extract key insights from lengthy PDF files. Whether you're studying for exams, preparing a report, or researching a topic, SmartScribe enables efficient and effective note-taking by leveraging AI to highlight important sections, provide summaries, and allow users to easily organize and annotate their documents.

### Key Features of **SmartScribe**

1. **Clerk Authentication**: Secure and seamless user authentication using Clerk for a robust login experience.
2. **Rich Text Editor**: Create and format content effortlessly with the intuitive TipTap editor.
3. **Security & Privacy**: Your data is protected with state-of-the-art security and privacy features.
4. **Context-Aware Prompts**: Send precise context with prompts using LangChain for smarter responses.
5. **Modern UI/UX Design**: Enjoy a sleek, responsive, and user-friendly interface designed for all devices.
6. **Comprehensive Dashboard**: Manage everything from a single intuitive dashboard.
7. **AI-Powered Search**: Find what you need quickly with intelligent, context-aware search capabilities.
8. **Multi-language Support**: Support for multiple languages, allowing users to interact in their preferred language.



## Project Duration:
I've dedicated over a month to develop and refine this project.



## Installation:
1. Clone the repository: `git clone https://github.com/mananatal/SmartScribe.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. Start Convex Server: `npx convex dev`


## Environment Variables:

To run this project, you will need to set up the following environment variables in a `.env.local` file at the root of your project:

- `CONVEX_DEPLOYMENT`: The deployment ID for your Convex backend service.
- `NEXT_PUBLIC_CONVEX_URL`: The URL for your Convex application, used in the frontend.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key for authentication integration on the client side.
- `CLERK_SECRET_KEY`: Your Clerk secret key for backend authentication requests.
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: URL for the sign-in page, accessible on the client side.
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: URL for the sign-up page, accessible on the client side.
- `NEXT_PUBLIC_GOOGLE_API_KEY`: Your Google API key for utilizing Google services.
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: Your PayPal client ID for integrating PayPal payment services.
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`: URL to redirect users after successful sign-in if no redirect is specified.
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`: URL to redirect users after successful sign-up if no redirect is specified.

Example `.env.local` file:

```plaintext
CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
```

## Usage:
1. Start the server using the provided start script.


## Contributing:
Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## Feedback and Contact:
I welcome any feedback or suggestions for improving this project. If you have questions, ideas, or just want to connect, feel free to reach out to me via email at [mananatal25@gmail.com](mailto:mananatal25@gmail.com) or through my [GitHub profile](https://github.com/mananatal).

Thank you for your interest in SmartScribe!

