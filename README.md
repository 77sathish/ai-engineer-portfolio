# Sathish Kanthi — AI Engineer Portfolio

<p align="center">
  <strong>A personal portfolio website showcasing my AI/ML engineering profile, skills, projects, education, and experience.</strong><br />
  <a href="https://ai-engineer-portfolio-three-pi.vercel.app/">Live Portfolio</a> ·
  <a href="https://github.com/77sathish/ai-engineer-portfolio">Source Code</a>
</p>

---

## 1. About the project

This repository contains my personal AI Engineer portfolio. It gives recruiters, hiring managers, mentors, collaborators, and other developers one place to explore my background and work.

The website is a React single-page application. Its content is divided into separate components so each major section can be understood and maintained independently. It also includes a contact form. That form needs a server-side endpoint so the email-service API key is never exposed in browser code.

### What a visitor can do

- Read my introduction and profile.
- Explore my technical skills and areas of interest.
- Review my education and experience.
- Browse selected projects and follow their repository links.
- View certifications and a career timeline.
- Download my resume.
- Switch between dark and light appearance.
- Send feedback, request help, or report a problem through the contact form.

**Live website:** https://ai-engineer-portfolio-three-pi.vercel.app/

## 2. Technology stack — what each tool does

| Technology / tool | How it is used |
|---|---|
| **React 19** | Builds the interface from reusable components such as Navbar, Hero, Skills, Projects, and Contact. |
| **JavaScript (ES modules)** | Implements component behaviour, navigation interactions, form submission, and API requests. |
| **Node.js** | Provides the JavaScript runtime used by the development toolchain and the server-side Vercel function. This repository does not run a separate Express server. |
| **npm** | Installs the libraries listed in package.json and runs project scripts. |
| **Vite 8** | Provides the local development server and bundles the React application for production. |
| **CSS** | Styles the layout, responsive sections, themes, and component appearance. |
| **Tailwind CSS packages** | Tailwind and its Vite integration package are listed as dependencies. However, the current Vite configuration does not register the Tailwind plugin and the inspected CSS entry files do not import Tailwind. The current appearance is implemented with regular CSS; see [Styling implementation](#styling-implementation). |
| **React Icons** | Supplies icons used in the interface, including social and contact icons. |
| **Vercel Functions** | Runs the server-side contact endpoint at /api/contact. |
| **Resend API** | Delivers messages submitted through the contact form to the configured inbox. |
| **Vercel Analytics** | Adds the Vercel Analytics component to the React application. |
| **Vercel** | Hosts the production website and deploys the frontend and serverless API. |
| **Git and Git Bash** | Git tracks source-code changes; Git Bash is the terminal used to run Git and npm commands. |
| **Visual Studio Code** | Used to open, edit, and organise the project files. |

### Important distinction: Node.js backend vs. Vercel Function

Node.js is the JavaScript runtime, not the name of a backend framework. This project does not currently contain an Express application or a continuously running Node server.

Instead, the backend endpoint is the file **api/contact.js**. Vercel recognises this file as a serverless function and executes it when the frontend sends a request to **/api/contact**. The function uses server-side JavaScript and environment variables.

## 3. Project structure

The project uses a component-based structure. The main React entry point mounts the application, App.jsx arranges the page sections, and each section lives in its own component file.

~~~text
ai-engineer-portfolio/
│
├── api/
│   └── contact.js
│
├── public/
│   ├── favicon.ico
│   └── resume.pdf
│
├── src/
│   ├── assets/                 # Images and imported visual assets
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Profile.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Timeline.jsx
│   │   └── Contact.jsx
│   ├── styles/                 # Global and component CSS files
│   ├── App.jsx                 # Main page composition
│   ├── main.jsx                # React entry point
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .oxlintrc.json
├── .gitignore
└── README.md
~~~

### Important files explained

| File | Responsibility |
|---|---|
| **index.html** | HTML document loaded by the browser. Contains the root element, favicon, metadata, and React entry script. |
| **src/main.jsx** | Creates the React root, imports global styles, renders App, and mounts Vercel Analytics. |
| **src/App.jsx** | Main page composition. Imports and renders the portfolio sections. It also updates the page title and description when the URL hash changes. |
| **src/components/** | Independent React components for the portfolio sections. |
| **src/styles/** | CSS used to style individual components and shared layout. |
| **src/index.css** | Additional global appearance and light-theme rules. |
| **public/** | Static files served directly, including the favicon and resume PDF. |
| **api/contact.js** | Server-side contact endpoint. Validates submitted data and calls the Resend email API. |
| **package.json** | Lists dependencies and npm scripts. |
| **package-lock.json** | Records resolved dependency versions for more repeatable installs. |
| **vite.config.js** | Configures Vite and enables the React plugin. |
| **.oxlintrc.json** | Configures Oxlint rules and plugins. |

## 4. Complete project architecture

This project has three main runtime parts:

1. **Frontend (React + Vite):** the website visitors see and interact with.
2. **Backend endpoint (Vercel Function):** receives contact-form submissions, validates them, and makes the private email-service request.
3. **External services (Resend and Vercel Analytics):** Resend delivers email; Vercel Analytics collects supported website usage measurements.

There is no separate Express server and no project database in the current implementation. Vercel hosts the built frontend and runs the API function.

### 4.1 High-level system architecture

~~~text
                           DEVELOPER WORKFLOW
                    VS Code + Git Bash + Node.js/npm
                                  |
                           git push to GitHub
                                  |
                                  v
                         GitHub repository
                                  |
                     Vercel Git integration
                                  |
                                  v
                         Vercel build system
                         /                 \
                        v                   v
                 Vite production       Serverless API
                    build              api/contact.js
                        |                   |
                        v                   |
                 Static assets              |
                   (dist/)                  |
                        |                   |
                        +---------+---------+
                                  |
                                  v
                          VERCEL HOSTING
                                  |
                    +-------------+-------------+
                    |                           |
                    v                           v
              Visitor browser              /api/contact
                    |                           |
                    v                           v
             React application           Vercel Function
                    |                           |
                    | Analytics events           | HTTPS request
                    v                           v
             Vercel Analytics                 Resend API
                                                |
                                                v
                                         Configured inbox
~~~

### 4.2 Frontend component architecture

The browser starts at `index.html`. The module in `src/main.jsx` creates the React root, imports the global styles, renders `App.jsx`, and includes the Vercel Analytics component.

`App.jsx` is the page-level composition layer. It imports the portfolio sections and places them in the page. Individual components are responsible for their own content and interface behaviour.

~~~text
index.html
   |
   v
src/main.jsx
   |-- imports global CSS
   |-- creates React root
   |-- renders App.jsx
   |-- mounts Vercel Analytics
   |
   v
src/App.jsx
   |
   +-- Navbar
   +-- Hero
   +-- About / Profile
   +-- Skills
   +-- Experience
   +-- Education
   +-- Projects
   +-- Certificates
   +-- Timeline
   +-- Contact
          |
          +-- form state and validation in browser
          +-- POST request to /api/contact
~~~

This component-based approach keeps the page easier to read than putting every section into one large component. For example, a change to the contact form can be made in its component without rewriting the Projects or Education section.

### 4.3 Backend and email architecture

The backend is a serverless function, not a server that runs continuously. When a browser sends a request to `/api/contact`, Vercel invokes `api/contact.js`. The function checks the request, validates the fields, reads its private environment variables, and calls Resend.

~~~text
Contact.jsx (browser)
       |
       | POST /api/contact
       | JSON: name, email, type, message
       v
Vercel Function: api/contact.js
       |
       +-- Check HTTP method
       +-- Validate required fields and lengths
       +-- Validate email and allowed message type
       +-- Escape user-provided HTML content
       +-- Read RESEND_API_KEY from server environment
       |
       | HTTPS POST https://api.resend.com/emails
       | Authorization: Bearer <server-side API key>
       v
Resend email service
       |
       v
Configured destination inbox

Function response (success or error)
       |
       v
Contact.jsx displays status to visitor
~~~

The Resend API key must remain in Vercel's server-side environment variables. It must never be placed in React code or a variable prefixed for public frontend exposure.

### 4.4 Deployment and runtime responsibilities

| Part | Runs where? | Responsibility |
|---|---|---|
| React components and CSS | Visitor's browser, delivered by Vercel | Displays the portfolio and handles interface interactions. |
| Vite build output | Generated during deployment | Bundles frontend source into production assets in `dist/`. |
| `api/contact.js` | Vercel serverless runtime | Handles contact requests and calls Resend securely. |
| Resend | Resend's hosted service | Processes email delivery. |
| Vercel Analytics | Vercel platform and browser integration | Collects supported site analytics. |
| GitHub | GitHub repository hosting | Stores source code and provides the connected repository for deployments. |

### 4.5 Why this architecture?

For a personal portfolio, a separate always-running backend server and database would add operational complexity without providing much benefit. The static React frontend is suitable for the content-heavy sections, while a small serverless function is enough for the contact form. Resend handles the specialised task of email delivery.

This keeps the application relatively simple to deploy and maintain. If the project later needs accounts, saved messages, an admin dashboard, or editable content, a database and a more substantial backend can be introduced.

## 5. Contact form and email API — step by step

The contact form connects the React frontend to a backend endpoint and an external email service.

### Tools involved

- **React:** Collects the visitor's name, email, message type, and message.
- **Fetch API:** Sends the form data from the browser to the backend.
- **Vercel Function:** Receives the request, validates data, and keeps the email API key on the server.
- **Resend:** Provides the email delivery API.
- **Vercel environment variables:** Store private configuration such as the Resend API key.

### Step 1 — Visitor fills in the form

The form is in **src/components/Contact.jsx**.

It collects four values:

| Field | Purpose |
|---|---|
| name | Name of the person contacting me |
| email | Their email address, used as the reply-to address |
| type | Feedback, Need Help, or Report a Problem |
| message | The content of their message |

The form uses required fields and input length limits. When submitted, the handleSubmit function prevents the browser's default page reload, reads the form values, and prepares the request.

### Step 2 — React sends a request to the backend

The frontend sends a JSON POST request to the relative endpoint **/api/contact**.

Simplified example:

~~~javascript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Example Visitor",
    email: "visitor@example.com",
    type: "Feedback",
    message: "I enjoyed viewing your portfolio."
  })
});
~~~

A relative URL is used because the frontend and API are deployed under the same Vercel project domain.

### Step 3 — Vercel runs the serverless function

The request reaches **api/contact.js**.

Vercel treats the file in the root-level api directory as a serverless function. The function exports a handler that receives request and response objects.

The handler first checks that the HTTP method is POST. Other methods receive a **405 Method Not Allowed** response.

### Step 4 — The backend validates the input

Before sending an email, the function checks:

- All four fields are present.
- The name is a string and does not exceed 100 characters.
- The email has a basic valid email format and does not exceed 254 characters.
- The message type is one of the allowed options.
- The message is a string and does not exceed 3,000 characters.
- RESEND_API_KEY is configured.

Invalid submissions receive an appropriate error response. The function also escapes HTML special characters before inserting visitor-provided values into the HTML email body. This helps prevent submitted text from being interpreted as HTML markup.

### Step 5 — The backend calls Resend

If validation succeeds, the function sends a server-side HTTP request to:

**https://api.resend.com/emails**

It authenticates with the Resend API using a bearer token:

~~~javascript
headers: {
  Authorization: "Bearer " + process.env.RESEND_API_KEY,
  "Content-Type": "application/json"
}
~~~

The email payload contains:

- **from:** Configured sender address.
- **to:** Configured destination inbox.
- **reply_to:** Visitor's email address.
- **subject:** Contact message type.
- **html:** Formatted message, including visitor details.

The API key is read from **process.env.RESEND_API_KEY** inside the server-side function. It is not included in the React frontend bundle.

### Step 6 — Visitor receives a status message

If Resend accepts the email request, the function returns a success response. The frontend displays a success message and resets the form.

If the request fails, the backend returns an error response and the frontend displays an error message. The submit button is disabled while the request is being processed to reduce accidental repeated submissions.

### Contact form sequence diagram

~~~text
Visitor       React Contact.jsx      Vercel API       Resend
  |                  |                   |               |
  | Fill in form     |                   |               |
  |----------------->|                   |               |
  |                  |                   |               |
  | Click Send       |                   |               |
  |----------------->|                   |               |
  |                  | POST /api/contact |               |
  |                  |------------------>|               |
  |                  |                   | Validate data |
  |                  |                   | Check API key |
  |                  |                   |               |
  |                  |                   | POST /emails  |
  |                  |                   |-------------->|
  |                  |                   |               |
  |                  |                   | API response  |
  |                  |                   |<--------------|
  |                  | JSON response     |               |
  |                  |<------------------|               |
  | Success / error  |                   |               |
  |<-----------------|                   |               |
~~~

### Configure the Resend API

To enable email delivery in your own deployment:

1. Create a Resend account at https://resend.com/.
2. Create an API key in the Resend dashboard.
3. Configure and verify a sender domain or sender address according to Resend's requirements.
4. Open the Vercel project settings.
5. Add the environment variables below.
6. Redeploy the project after changing the variables.

| Environment variable | Required? | Description |
|---|---|---|
| RESEND_API_KEY | Yes | Secret API key generated by Resend. |
| CONTACT_FROM_EMAIL | Optional in code | Sender identity used for outgoing emails. It must be accepted by Resend. |
| CONTACT_TO_EMAIL | Optional in code | Inbox that receives contact-form messages. The current code has a fallback destination. |

The current code uses **Portfolio Contact <onboarding@resend.dev>** as a fallback sender and a fallback destination address. For a real deployment, configure a sender identity that Resend permits for your account.

**Security note:** Never commit the Resend API key to GitHub, put it in a frontend variable, or write it directly in a React component. Keep it in Vercel's server-side environment variables. If a key is accidentally exposed, revoke it and generate a replacement.

### Testing the contact API locally

The contact endpoint is deployed with Vercel. A normal Vite development server does not automatically run files in the root-level api directory.

For local testing of both the frontend and Vercel Function, install the Vercel CLI and use Vercel's local development command:

~~~bash
npm install --global vercel
vercel dev
~~~

Follow the CLI prompts to link the local folder to the Vercel project. Make sure the required environment variables are available to the local Vercel development environment. Then open the local URL printed by the CLI and submit the contact form.

You can also test the deployed contact form on the live website. Never expose a real API key in browser code.

## 6. Styling implementation

The current project includes regular CSS files for the overall layout, theme, navigation, and individual sections. For example:

- **src/styles/Global.css** contains shared resets and global layout rules.
- **src/index.css** contains base appearance and light-theme rules.
- Other files in **src/styles/** contain styles for individual components.

The package.json includes **tailwindcss** and **@tailwindcss/vite**. However, the current vite.config.js registers only the React plugin, and the inspected CSS entry files do not contain a Tailwind import. Therefore, Tailwind is installed as a dependency but is **not currently wired into the Vite styling pipeline**. The website's current appearance is produced by its CSS files.

If Tailwind utility classes are intended to be part of a future version, configure the Tailwind Vite plugin in vite.config.js and import Tailwind in the CSS entry file, then verify the production build. This README describes the code as it exists rather than claiming that Tailwind is already active.

## 7. Vite, npm, and project scripts

package.json defines the project's dependencies and scripts. The lockfile records the dependency versions resolved during installation.

### Main scripts

| Command | What it does |
|---|---|
| npm run dev | Starts the Vite frontend development server. |
| npm run build | Creates an optimised production build in the dist/ directory. |
| npm run preview | Serves the production build locally for preview. |
| npm run lint | Runs Oxlint using the project's configuration. |

### Main dependencies

| Package | Why it is installed |
|---|---|
| react | React component library. |
| react-dom | Renders React components into the browser DOM. |
| vite | Frontend development and build tool. |
| @vitejs/plugin-react | React integration for Vite. |
| tailwindcss | Tailwind CSS package; see the styling note above. |
| @tailwindcss/vite | Tailwind's Vite integration package; it is not currently registered in the Vite config. |
| react-icons | Icon components for the interface. |
| @vercel/analytics | Vercel Analytics integration. |
| oxlint | JavaScript and React linting. |

## 8. Run the project on your computer

These instructions are intended for someone who has not downloaded the repository before.

### Prerequisites

Install the following:

1. **Node.js and npm** — use a current Node.js release compatible with Vite 8. The linked Vercel project is configured with Node.js 24.x.
2. **Git** — to clone the repository.
3. **Visual Studio Code** (recommended) — to inspect and edit the project.
4. **Git Bash** (Windows users) or another terminal — to run commands.

Check that Node.js and npm are installed:

~~~bash
node --version
npm --version
git --version
~~~

### Step 1 — Clone the repository

~~~bash
git clone https://github.com/77sathish/ai-engineer-portfolio.git
~~~

### Step 2 — Enter the project directory

~~~bash
cd ai-engineer-portfolio
~~~

### Step 3 — Open the folder in VS Code

If the VS Code command-line launcher is installed:

~~~bash
code .
~~~

You can also open VS Code manually and choose **File → Open Folder**.

### Step 4 — Install project libraries

~~~bash
npm install
~~~

This reads package.json and package-lock.json and installs the required packages into node_modules/. You do not need to install React, Vite, or React Icons separately.

### Step 5 — Start the frontend

~~~bash
npm run dev
~~~

Vite prints a local address in the terminal, usually:

**http://localhost:5173/**

Open that address in your browser. The development server supports fast refresh while you edit React and CSS files.

**Note:** This command starts the Vite frontend only. It does not automatically run the Vercel contact function. Use **vercel dev** as described in the contact-form section if you need to test the backend locally.

### Step 6 — Build for production

~~~bash
npm run build
~~~

Vite compiles the frontend and writes the generated files to dist/. This checks whether the frontend can be bundled for deployment.

### Step 7 — Preview the production build

~~~bash
npm run preview
~~~

Open the preview URL printed by Vite.

### Step 8 — Run the linter

~~~bash
npm run lint
~~~

Oxlint checks the JavaScript and React code against the rules in .oxlintrc.json.

## 9. Deploying the project with Vercel — complete procedure

This section explains the deployment workflow from a local project folder to a public website. It also explains what happens after the first deployment.

**Project dashboard:** https://vercel.com/kanthisathish777-2007s-projects/ai-ml-portfolio  
**Live website:** https://ai-engineer-portfolio-three-pi.vercel.app/

### 9.1 Understand the deployment flow

Vercel is the hosting and deployment platform for this project. The source code is stored in GitHub. Vercel connects to that repository, installs dependencies, runs the Vite build, and publishes the generated frontend. It also detects and deploys the root-level API function.

~~~text
LOCAL COMPUTER
VS Code + Git Bash
      |
      | 1. Edit source files
      | 2. Test locally
      | 3. git add / git commit / git push
      v
GITHUB REPOSITORY
      |
      | Repository connected to Vercel
      v
VERCEL DEPLOYMENT
      |
      | 4. Install dependencies (npm install)
      | 5. Build command (npm run build)
      | 6. Vite creates dist/
      | 7. Vercel publishes frontend assets
      | 8. Vercel deploys api/contact.js as a Function
      v
PUBLIC WEBSITE
      |
      +---- Visitor loads React frontend
      |
      +---- Contact form calls /api/contact
      |             |
      |             v
      |          Resend API
      |
      +---- Analytics component reports supported usage
~~~

### 9.2 Prepare the project before deployment

Before importing the repository into Vercel:

1. Make sure the project runs locally with `npm install` and `npm run dev`.
2. Run `npm run build` and resolve any build errors.
3. Check that the root-level `api/contact.js` file is committed to GitHub.
4. Make sure static files such as the resume and images are in the correct public or source folders.
5. Confirm that secrets such as the Resend API key are not committed to the repository.
6. Push the latest code to GitHub.

### 9.3 Import the GitHub repository into Vercel

For a new deployment or your own copy:

1. Open https://vercel.com/ and sign in.
2. From the Vercel dashboard, choose **Add New → Project**.
3. Connect GitHub if Vercel asks for repository access.
4. Find and import `77sathish/ai-engineer-portfolio` (or your own fork).
5. Select the repository and open its project configuration screen.

If you are deploying your own fork, make sure Vercel imports the fork you intend to maintain, not another person's repository.

### 9.4 Configure the build settings

For this Vite project, the standard settings are:

| Setting | Value | Meaning |
|---|---|---|
| Framework preset | Vite | Tells Vercel this is a Vite frontend project. |
| Root directory | `./` | The project files and `package.json` are at the repository root. |
| Install command | `npm install` | Installs packages declared in package.json and package-lock.json. |
| Build command | `npm run build` | Runs Vite's production build. |
| Output directory | `dist` | Vite writes the production frontend files here. |

Review these settings before deploying. If the project configuration changes in the future, use the values appropriate to that version of the repository.

### 9.5 Add environment variables for the email feature

The contact form needs the Resend configuration on the server side.

1. Open the project in the Vercel dashboard.
2. Open **Settings → Environment Variables**.
3. Add `RESEND_API_KEY` and the optional sender/destination variables used by `api/contact.js`.
4. Select the environments where they should be available (for example, Production; add Preview or Development only when needed).
5. Save the variables.
6. Redeploy after changing environment variables so the new deployment receives the updated configuration.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Authenticates the serverless function with Resend. Keep it secret. |
| `CONTACT_FROM_EMAIL` | Optional sender address, subject to Resend's sender/domain verification rules. |
| `CONTACT_TO_EMAIL` | Optional inbox that receives portfolio messages. |

Do not copy real secret values into README examples, GitHub commits, screenshots, or frontend code. For local Vercel development, use Vercel's environment-variable workflow and keep local secret files out of Git.

### 9.6 Deploy the application

1. Review the repository and Vercel build settings.
2. Click **Deploy**.
3. Vercel installs the dependencies.
4. Vercel runs `npm run build`.
5. Vite generates the frontend production assets in `dist/`.
6. Vercel publishes the frontend and deploys the API function.
7. When deployment finishes, open the deployment URL shown by Vercel.

### 9.7 Connect a custom domain (optional)

If you own a domain:

1. Open the Vercel project.
2. Go to **Settings → Domains**.
3. Add the domain you own.
4. Follow the DNS instructions Vercel displays.
5. Wait for the domain and HTTPS configuration to be verified.

A custom domain is optional. The generated Vercel deployment URL works without purchasing a domain.

### 9.8 How future updates are deployed

Once the GitHub repository is connected, the usual update workflow is:

~~~bash
# Make and test your code changes first
npm run build

# Stage the changes
git add .

# Save a commit
git commit -m "Update portfolio content"

# Push the branch to GitHub
git push
~~~

A push to the configured production branch can trigger a new production deployment. A push to another branch or a pull request can create a Preview Deployment, depending on the Vercel Git settings. Review the deployment status in the Vercel dashboard before sharing the updated site.

### 9.9 Verify after deployment

Do not treat a successful build as proof that every feature works. After deployment:

- Open the live URL and check that the page loads.
- Test navigation and section links.
- Check the layout on mobile and desktop.
- Switch between light and dark themes.
- Open project and social links.
- Test the resume link.
- Submit a test contact message and confirm it arrives in the configured inbox.
- Check the Vercel deployment logs if the API returns an error.
- Open the Vercel Analytics dashboard and check whether analytics data is being collected.

### 9.10 Vercel Analytics

The project imports the Analytics component from `@vercel/analytics` in `src/main.jsx`. This integrates the site with Vercel Analytics. Analytics is separate from the contact form: it measures supported website usage, while Resend handles email delivery.

## 10. V2 evaluation and testing

This section is intentionally transparent. The repository configuration tells us which build and lint commands exist, but it does not by itself prove that every user flow has passed. Record results only after running the checks on the version you are submitting.

### Suggested evaluation checklist

| Area | How to test it | Result |
|---|---|---|
| Dependency installation | Run npm install from a clean clone. | Pending verification |
| Production build | Run npm run build. | Pending verification |
| Lint | Run npm run lint. | Pending verification |
| Navigation | Click each navigation item and confirm it reaches the correct section. | Pending verification |
| Mobile layout | Check the page at a narrow mobile viewport. | Pending verification |
| Desktop layout | Check the page at a desktop viewport. | Pending verification |
| Theme toggle | Switch between dark and light modes. | Pending verification |
| Project links | Open each project link and confirm the destination. | Pending verification |
| Resume | Click the resume link and confirm public/resume.pdf downloads or opens. | Pending verification |
| Contact validation | Submit empty, invalid, and valid form data. | Pending verification |
| Email delivery | Submit a valid message and confirm it reaches the configured inbox. | Pending verification |
| Error handling | Test missing Resend configuration or a failed API request in a safe environment. | Pending verification |

**V2 evaluation date:** [Enter the date you performed the tests]  
**Browser and device:** [Enter the browser, operating system, and device or viewport]  
**Deployment tested:** https://ai-engineer-portfolio-three-pi.vercel.app/

### Evaluation summary

[Replace this paragraph after testing. Summarise what passed, what failed, what you fixed, and what still needs improvement. Do not report invented scores or test results.]

## 11. Project limitations

A useful project README should explain not only what works, but also what the current version does not do. The following limitations describe the present implementation and its dependencies.

### 11.1 Functional and technical limitations

1. **No database or message history:** Contact submissions are sent through Resend. The application does not save them in a database or provide an admin inbox/dashboard inside the portfolio.
2. **Contact form depends on an external email provider:** Sending email requires a valid Resend API key and an approved sender identity. If the key is missing, invalid, or the provider rejects the request, email delivery will fail.
3. **No dedicated automated test suite:** The repository has build and lint scripts, but no configured test runner or end-to-end test suite. Important flows therefore need manual verification.
4. **Basic server-side validation only:** The contact function validates fields, lengths, email shape, and allowed message types. The current implementation does not include a dedicated rate limiter, CAPTCHA, or broader anti-spam service.
5. **No user authentication or role management:** The site is a public portfolio. Visitors cannot sign in, and there is no private admin area for updating content.
6. **Content updates require code changes:** Skills, projects, education, experience, certificates, and profile information are maintained in the source components rather than in a CMS or database.
7. **Vite's development server does not run the API function:** `npm run dev` serves the frontend only. To exercise the Vercel API locally, use `vercel dev` with the required environment variables.
8. **Tailwind CSS is not currently active in the Vite pipeline:** Tailwind packages are present in package.json, but the Vite configuration and CSS entry point inspected for this README do not enable the Tailwind plugin/import. The current styling is regular CSS.
9. **Analytics depends on the hosting integration:** Vercel Analytics is integrated in the frontend, but data visibility depends on deployment, platform configuration, and eligible visitor activity.
10. **External assets and services can change:** Email delivery, hosting, and analytics rely on third-party services and their availability, configuration, and terms.

### 11.2 What this project is not

- It is not an AI chatbot or an AI model serving application.
- It does not currently use a database.
- It does not provide a content-management dashboard.
- It does not run a continuously available Express/Node.js server.
- It does not guarantee email delivery merely because the contact form displays a success response; provider acceptance and final inbox delivery are separate stages.

These boundaries are intentional for the current scope: a portfolio website with a lightweight contact workflow.

## 12. Future upgrades and roadmap

The current version provides the core portfolio experience. The following roadmap describes realistic improvements that could make it more reliable, easier to maintain, and more useful as the project grows.

| Priority | Upgrade | Why it would help |
|---|---|---|
| High | Add automated tests for components and the contact API | Catch regressions before deployment and make changes safer. |
| High | Add rate limiting and spam protection to the contact endpoint | Reduce automated abuse and unwanted email submissions. |
| High | Add stronger contact-form monitoring and clear error logging | Make email failures easier to diagnose without exposing private information. |
| Medium | Configure Tailwind CSS correctly, or remove unused Tailwind packages | Keep the styling setup consistent and avoid confusing future contributors. |
| Medium | Move portfolio content into structured data files | Make projects, skills, education, and experience easier to update without editing component layout. |
| Medium | Add a database if message history becomes useful | Store contact submissions and support an admin view or follow-up workflow. |
| Medium | Add a CMS or private content editor | Allow portfolio updates without manually changing source code. |
| Medium | Improve accessibility and performance checks | Make the site easier to use with keyboards and assistive technologies and keep it fast. |
| Later | Add project detail pages and richer project demos | Give each featured project space for architecture, screenshots, results, and links. |
| Later | Add a dedicated admin/authentication layer if private editing is required | Protect editing features instead of exposing them publicly. |

### Suggested implementation order

1. **Stability first:** Add tests for the contact function, form states, and important navigation behaviours.
2. **Security next:** Add rate limiting and spam protection; review error messages and secret handling.
3. **Clean up the frontend toolchain:** Either wire Tailwind into Vite properly or remove the unused packages and document the CSS approach.
4. **Improve content maintenance:** Move repeated portfolio data into structured JavaScript/JSON modules.
5. **Add services only when needed:** Introduce a database or CMS when the portfolio has a real requirement for stored messages or browser-based content editing.

The roadmap is a plan, not a claim that these features already exist.

## 14. AI transparency and development workflow

AI tools played a major role in creating this project. I am documenting that contribution clearly as part of the development process.

| Tool | How I used it |
|---|---|
| **ChatGPT** | Used extensively to generate and develop the project code. |
| **Claude** | Used as an additional AI assistant during code development. |
| **Gemini** | Used to help create or generate images used in the portfolio. |
| **Visual Studio Code** | Used to organise the project files and work with the source code. |
| **Git Bash** | Used to run project commands and work with Git. |
| **Node.js and npm** | Used as the JavaScript runtime and package-management environment. |
| **Vite** | Used as the React development and build setup. |
| **Vercel** | Used to deploy and host the project and integrate website analytics. |

**Transparency note:** ChatGPT and Claude were used extensively for code generation, while Gemini was used for image generation. I used VS Code to organise and work with the files and Git Bash to run the project. The project was run and deployed through the development and hosting tools described above. AI assistance is acknowledged rather than presented as entirely hand-written code.

## 15. Useful links

- **Live portfolio:** https://ai-engineer-portfolio-three-pi.vercel.app/
- **GitHub repository:** https://github.com/77sathish/ai-engineer-portfolio
- **Vercel project dashboard:** https://vercel.com/kanthisathish777-2007s-projects/ai-ml-portfolio
- **Resend documentation:** https://resend.com/docs
- **Vite documentation:** https://vite.dev/guide/
- **React documentation:** https://react.dev/learn
- **Vercel Functions documentation:** https://vercel.com/docs/functions
- **Vercel Analytics documentation:** https://vercel.com/docs/analytics

## 15. Conclusion

This portfolio demonstrates a practical way to combine a component-based React frontend with a small serverless backend feature and managed deployment services.

The frontend is built and bundled with Vite. Vercel hosts the production website and runs the contact API function. The function validates visitor submissions and uses Resend to request email delivery without exposing the API key in the browser. Vercel Analytics is integrated separately to provide website usage insights.

The project is intentionally kept lightweight: it does not currently need a database or a continuously running backend server. The limitations and roadmap above make clear what is implemented today and what could be improved next.

I hope this repository helps beginners understand how a modern portfolio can be organised, developed locally, connected to an external API, and deployed to the web. You are welcome to explore the source, learn from the structure, and adapt the approach for your own projects.

## 16. Author

**Sathish Kanthi**

- GitHub: https://github.com/77sathish
- LinkedIn: https://www.linkedin.com/in/sathish-kanthi-60b9b7226/
- Portfolio: https://ai-engineer-portfolio-three-pi.vercel.app/

---

Thank you for exploring my AI Engineer Portfolio!
