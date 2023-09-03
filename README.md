# loan-application

> Solution to the [code kata](https://github.com/DemystData/code-kata/blob/main/README.md) coding assignment.

## Description

This is a simple loan application system built with nextjs, expressjs, mongoDB and typescript.
Users can can register for loans and the pre assessment data is simulated based on the balance sheet which is randomly generated.

> Please note that as the backend is hosted under a free tier, the server may have some issues waking up or with cors. That doesn't mean the code is not working. Please clone the repository and try running it locally.

## Before You Begin

Before you can use this project, please ensure that you have the following software and tools installed on your system:

- Node.js - [Download and install Node.js](https://nodejs.org/en/download) and the node package manager (included with node.js).

## How to run the project

This project is deployed at https://loan-application.vercel.app. The backend can be found at https://lazy-pear-cougar-ring.cyclic.app/.

**1. Clone the repository**

Clone the github repository with the following git command.

```bash
 git clone https://github.com/HariKrishna-28/loan-application.git
```

**2.Install `node_modules`**

This project has two directories `client` and `server`. Open these directories in the terminal and run the following npm command. This will install all the required `node_modules` listed on the `package.json` file that is required to run the project

```bash
npm install
```

**3.Connect with mongoDB**

The `env` and `.env.local` files are intentionally included.
You could connect your own mongo shell/atlas by adding the connection string in the `env` file that is inside the `./backend`

If you don't have mongodb installed or don't wish to use your cluster, you can add the [backend url](https://lazy-pear-cougar-ring.cyclic.app/api) of my backend that is connected with my personal mongodb cluster on the `.env.local` file that is present in the `./frontend` directory.

**4.Starting the application**

The application can be started in two ways,

- Try running the following commands in separate terminals using the following commands with the terminal open in root directory. The commands are listed in the `scripts` part in the `package.json` in the root directory.

```bash
npm run client
```

```bash
npm run server
```

- You could change the directory to frontend or backend and run the following command

```bash
npm run dev
```

**5.Open in browser**

You will find the frontend runing on port 3000 and backend on port 5000.

### You can find the detailed description for the backend with examples in the [postman documentation](https://documenter.getpostman.com/view/17286009/2s9Y5crebx)

## Tech stack and major dependancies

| <div align ="center">Name </div>                         | <div align = "center">Description</div>                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **[NextJs](https://nextjs.org)**                         | Front End JavaScript Library                                                 |
| **[ExpressJs](https://expressjs.com/)**                  | Back End Web Application Framework                                           |
| **[Tailwind CSS](https://tailwindcss.com/)**             | A utility-first CSS framework                                                |
| **[DaisyUI](https://daisyui.com/)**                      | TailwindCSS component library                                                |
| **[Axios](https://axios-http.com/docs/intro)**           | Promise based HTTP client for the browser and NodeJs                         |
| **[HelmetJs](https://helmetjs.github.io/)**              | Helmet helps you secure your Express.js apps by setting various HTTP headers |
| **[MongoDb](https://firebase.google.com/docs/database)** | NoSQL cloud database                                                         |

## Application overview

### System Components

**1. Frontend**

The frontend of the loan application system is responsible for creating an intuitive and responsive user interface that allows users to submit their loan applications effortlessly. It collects essential user and business data, including:

**User Information:**

- User Name
- Email Address
  **Business Information:**
- Business name
- Year established
- Profi/Loss summary
- Accounting provider details
- Loan Amount

**2. Backend**

The backend serves as the core of the loan application system, managing data processing, storage, and interactions with external services. Key functionalities include:

**Data Storage:**

The system stores user and business loan application data in a MongoDB database. Each user can submit multiple applications, each associated with a unique business name.

**Balance Sheet Generation:**

After a user submits a loan application, the system initiates a request to simulate a balance sheet generation process. This process resembles an external third-party backend interaction and results in randomly generated balance sheet data for the business.

**Integration with External Providers:**

Decision Engine: Once the balance sheet is generated, the user can review it and click the "Apply" button. At this point, the application simulates the redirection to the decision engine, which evaluates the loan application based on various criteria and provides an outcome.

### Workflow

- **User Registration**: Users enter their name and email address to create an account in the loan application system.

- **Loan Application Submission**: Users can submit multiple loan applications, each associated with a unique business name. The application form collects essential loan-related information.

- **Data Storage**: Application data, including user details and loan information, is securely stored in the MongoDB database.

- **Balance Sheet Generation**: Upon submission, the system simulates a request to external accounting software providers to generate a balance sheet for the specified business. This step involves the generation of randomly generated financial data.

- **Review and Apply**: Users review the generated balance sheet and other application details. If satisfied, they click the "Apply" button.

- **Decision Making**: The loan application is redirected to the decision engine (simulated), which evaluates the application based on predefined criteria and generates an application outcome.

## Output walkthrough

https://github.com/HariKrishna-28/loan-application/assets/69629411/76c41d49-3af3-4d17-877c-adfff9e9a6e0



