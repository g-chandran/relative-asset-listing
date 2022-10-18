# Relative asset listing assignment
This project is a part of assigment by Relative.

Design to code interpretation of a Figma mockup.

## Tech Stack
Note: This project uses `vite` against popular `create-react-app` & `webpack` in favour of better performance, advanced code splitting and awesome DX.

- UI Library: React
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: pnpm
- Module Bundler: vite


## Installation and usage
1. Clone the project to local
2. `cd` into project folder
3. `pnpm i` to install the dependencies (`npm i -g pnpm` to install pnpm for the first time)
4. `pnpm dev` to start the dev server
5. Access the running application at `localhost:5173`


## Technical decisions
### Vite
Vite provides extra-ordinary Developer experience with HMR and superb performance with Native module bundling and code splitting.

### TypeScript
Since the application holds lot of moving parts, using TypeScript provides bug-free codebase.

### PNPM
pnpm uses `symlink` to reduce the weightage to `node_modules` folder by reusing the packages installed into `pnpm`  root.

Thus, installing new packages uses less bandwidth, less storage and very less time.