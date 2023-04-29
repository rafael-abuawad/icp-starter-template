# React.js Internet Computer Starter Template

This project provides a simple starter template for Dfinity Internet Computer using React.js framework as frontend, with [Vite](https://vitejs.dev/) for fast development.

**Backend**

- A simple greeting hello world canister written in Motoko

**Frontend**

- A simple React HTML form with name input, sending it to greet canister and showing the returned result
- A button to interact with react state

## Quick Start (Run locally)

Install:

- [NodeJS 18.\* or higher](https://nodejs.org/en/download/)
- [Internet Computer dfx CLI](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
- [Visual Studio Code (Recommended Code Editor)](https://code.visualstudio.com/Download)
- [VSCode extension - Motoko (Recommended)](https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko)

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

Clone this Git repository:

```bash
git clone https://github.com/rafael-abuawad/icp-starter-template
```

Open command terminal:
Enter the commands to start dfx local server in background:

```bash
cd icp-starter-template
dfx start --background
```

Note: If you run it in MacOS, you may be asked to allow connections from dfx local server.

Enter the commands to install dependencies, deploy canister and run Next.js dev server:

```bash
npm install
dfx deploy
npm run dev
```

http://localhost:3000/

Cleanup - stop dfx server running in background:

```bash
dfx stop
```

## Author

Rafael Abuawad
Twitter: @0xAbuawad

## Contributing

Please feel free to raise an issue or submit a pull request.

## License

MIT
