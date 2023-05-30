# endelave

## Description

This project addresses the specific needs for a commune, which sought to enhance their platform by incorporating an interactive ferry schedule overview between Endelave and Snaptun. The objective was to develop a highly functional and seamlessly integrated React component.

## Project overview

The primary task involved building a web-accessible React component that would seamlessly integrate within an existing vanilla JavaScript project. This component was specifically developed to address the unique requirements of Horsens Municipality, which sought to enhance their platform by incorporating an interactive ferry schedule overview between Endelave and Snaptun.

The objective was to create a highly functional React component that can be embedded within the larger vanilla JavaScript project, allowing for a seamless integration between the two technologies. The React component serves as a self-contained module responsible for displaying an interactive date picker and retrieving and presenting the ferry departure information for the Endelave-Snaptun and Snaptun-Endelave routes on the specified day.

To ensure consistency and alignment with the design system of the vanilla JavaScript project, the React component's styles were carefully developed using the css-in-js tool Twind. By referencing shared variable names and omitting the inclusion of a preflight (CSS normalize), the component's styles integrate seamlessly with the existing styles of the vanilla JavaScript project.

The React component was implemented using React Aria to ensure web accessibility and adherence to accessibility best practices, providing an inclusive user experience.



## Structure



```.
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── api
│   ├── app.tsx
│   ├── components
│   ├── hooks
│   ├── main.tsx
│   ├── modules
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

7 directories, 10 files
```

`api`: This directory contains the logic and services responsible for handling API-related operations. It includes modules for fetching ferry departures.

`components`: The components directory is dedicated to storing reusable UI components. It houses React aria components to asemble the date picker and table components.

`hooks`: The hooks directory houses custom React hooks that fetches ferry dpartures 

`modules`: The modules directory serves as a dedicated location for organizing code related to different modules or features within the project. It includes models that describe the structure and attributes of a ferry departure.


## Technologies used

The project utilizes the following technologies:

`Vite`: Vite is a fast and lightweight build tool that optimizes the development experience for modern web applications. It enables quick bundling and reloading of modules, resulting in shorter build times and faster development cycles.

`TypeScript`: TypeScript enhances code maintainability and reliability.

`Twind`: Twind is employed as the css-in-js solution, allowing for encapsulated styling and avoiding conflicts with existing styles upon integration.

`React Aria`: React Aria, a library for building accessible user interfaces in React, has been employed to ensure that the project adheres to web accessibility best practices. 
