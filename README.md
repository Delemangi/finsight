# Finsight

Finsight is a informational mobile application made in React Native using Expo v50 and the React Native Elements UI framework. It also uses Zustand for internal state management, React Query for fetching data from remote sources, Expo Router for page routing, and Firebase for user authentication.

The application is intended to fetch data from the web application available at [finki-scraper](https://github.com/Delemangi/finki-scraper).

## Features

- Custom UI elements
- State management
- Folder based routing
- Login & Register functionalities using Firebase
- Look up several types of posts (announcements) from several sources from the University through the web service
- Preview and search frequently asked questions
- Camera

## Design Patterns

The application uses several design patterns:

- Component-Based Architecture: all the elements within the UI are separated into their own reusable components
- Singleton: for the objects that provide internal state management within the application and for user authentication with Firebase
- Flux: the library Zustand for state management provides a unidirectional data flow and a centralized store, easing access to and setting the state
- Navigation: multiple pages in the application are implemented using tab and stack based navigation

## Installation

To install the application, make sure that you have Node.js (preferably >= 20) installed.

After that, run `npm i` to install all the dependencies.

## Running

Run `npm run start` and follow the instructions.
