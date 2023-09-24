# Reezume  |  Easy resume generator

Welcome to the Reez u me, a user-friendly platform for generating professional resumes in easy, straightforward steps. This project was proudly built as part of the "Reacción en Carrera" Hackathon, boosted by *Immune Institute* and *HP SCDS* organizations.

## Technologies Used

- TypeScript
- NextJS
- Prisma
- Vercel Postgres
- Radix UI
- TailwindCSS

## Features

1. Intuitive UI for easy resume creation
2. Final preview
3. Printable page
4. User support for saving and editing resumes

## Development

### Prerequisites

- Node 18.x (or higher)
- Vercel CLI
- A Vercel account
- A Vercel project with Vercel Postgres set up

### Getting Started

#### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <https://github.com/your-username/resume-builder-web-app.git>
```

#### Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

#### Pull Env variables

Get the environment variables from your Vercel project in order to be able to connect to your Postgres Database.

```bash
vercel env pull .env
```

#### Run Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and visit <http://localhost:3000> to view the app.

### Useful scripts

#### Push Prisma Schema to DB

Pushes Prisma Schema to Vercel Postgres

```bash
npm run prisma:push
```

#### Generate Prisma Client

Generates the Prisma client library based on the defined schema

```bash
npm run prisma:generate
```

#### Launch Prisma Studio

Allows you to visualize in real time the contents of the database

```bash
npm run prisma:studio
```

## How to use the App

1. Once at the landing page, click in any of the CTA buttons.
2. It will take you to first form, fill it with your personal data and how to reach you. When you are all set, click on next.
3. Now you are at the professional experience. You can add as many as you want by clicking "Add more" grey button. When you are ready, click next.
4. We are almost done. Now, you can add any education you find relevant. Just like before, you can add more by clicking at the button. Then click next.
5. To finish, share some of your hobbies and any other info you think it might be interesting to know from you. Then click "Done".

### Saving your resume

You can download your new resume as a PDF file by printing the page and saving the file as a PDF.

## Contributing

We wholeheartedly welcome contributions from everyone, whether you're a seasoned developer or a newcomer eager to learn and contribute. Collaboration not only benefits the project but also provides an enriching experience for all involved.
If you would like to collaborate in this project, please feel free to contact me.

## License

This project is licensed under the MIT License.
