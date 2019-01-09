# electron-react-typescript-template

Minimal template for app build on Electron, React and TypeScript.

# TODO

- TestCafe doesn't play nicely with Mocha. I've had to remove the TypeScript types for Mocha.
- It might be a good idea to replace Mocha with Jest and see if it plays better with TestCafe.

# Features

    - Mocha integration for testing.
    - Live reload for dev and testing.
    - Code coverage.
    - Dependency injection for react components.

# Install deps

    npm install

# Compile TypeScript

    npx tsc

# Run tests

    npm run test
    npm run test:watch

# Run full build testing with TestCafe

    npm run testcafe

# Run for development

    npm start

# Build the installer

    npm run build
