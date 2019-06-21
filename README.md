# electronic-program-guide
An electronic program guide which lists channel programs and schedules.

## Installation

1. Clone this repository.

2. [Download and install](https://nodejs.org/en/download) Node.

3. Install the node modules. Run the following command in the project's root directory and inside the "client" directory.

```sh
npm install
```

4. Build the typescript. Run the following command in the project's root directory.

```sh
npm run build
```

5. Start the server and client. Run the following command in the project's root directory.

```sh
npm run dev
```

## Plan
* Create a reactjs/redux framework.
* Return supplied json via a nodejs api. Channels, schedules and user preferences will be returned by a single endpoint.
* Add a top menu to navigate between the channel list screen and schedule screen.
* Build the channel list component. Display each channel and its upcoming program. User preferences will affect a program's progress (e.g.: percentage complete).
* Build the schedule component. Each channel will be listed as a row and each program will be a row cell. The duration of a program will be reflected by the width of a row's cell (see the schedule screenshot below).

## Incomplete
* The schedule is not responsive. Styling is incomplete.
* A modal dialog with additional program information does not display when an item in the channel list is clicked.
* Jest tests have not been added to test the endpoint.
* Host the application on a server.

## Assumptions
The schedule data:
* is for a single day.
* is sorted by program start date.
* provides back-to-back program times i.e. there are no gaps between programs.

## Choice of Tooling & Frameworks
* ReactJs - It's the best choice to build fast and highly modular front-ends. The tech was especially useful when building the schedule component.
* Redux - The industry standard for sharing state between application components. Admittedly, this was not necessary for such a small project.
* NodeJs - A lightweight javascript server. Perfect for returning mock json via an api.
* Bootstrap - A great option for building responsive webpages.

## Screenshots

> Channel list

![](https://darrynpatterson.com/electronic-program-guide/channels.png)

> Schedule

![](https://darrynpatterson.com/electronic-program-guide/schedule.png)

## Links Libraries
* [React](https://github.com/facebook/react) - JavaScript library for building user interfaces
* [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript applications
* [NodeJs](https://github.com/nodejs/node) - Lightweight js server
* [ExpressJs](https://github.com/expressjs/express) - node.js web framework
* [Bootstrap](https://github.com/twbs/bootstrap) - Pretty responsive design
