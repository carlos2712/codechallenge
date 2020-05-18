# codechallenge

To run the project:

 * This project assumes that you have NPM installed and dotnet core 3.1 installed if not please install those before doing the steps

- Clone the project
- Open the terminal on the cloned project
- Go to ClientApp folder
- run npm i
- cd ..
- run : dotnet run

# Test

- Unit test can be run using:
- ngtest on the clientapp folder
- xunit on the .dotnet side
- Protractor ( make sure you have the latest version of proctractor on your machine)
  - Leave the project running from the first steps
  - Open 2 new terminals the first one will run the server for protractor and the other one will run the test
  - First terminal : webdriver-manager start
  - Second terminal: On the project go to e2e folder and run : protractor conf.js

By Carlos Orjuela
