# Weather Search app

## About

Weather Search allows users to search for the current weather in any city in the world.

This is an example web app created as teaching material for the Intro to Web Development course at [FrauenLoop](https://www.frauenloop.org/). It is a basic example of what can be done using [React](https://react.dev/). It uses [React Bootstrap](https://react-bootstrap.github.io/) for styling and it has an API call.
<img width="828" alt="Screenshot 2025-05-03 at 02 28 38" src="https://github.com/user-attachments/assets/5a272030-7b6c-4ed5-96e1-b4eedb1134db" />

## To Run

Prerequisite:

Make an account on [The Weather API](weatherapi.com). You will receive an API key that looks something like this: `xo7x97473289b545299gg573829473829`.

1. Download this repository (ie, all the files in this project). You will now have a folder in your computer called `loop101`.
2. Inside `loop101` create a file at the root level called `.env`. (Same place as the `.env.example` file)
3. Copy the contents of `.env.example` into `.env`.
4. Copy and paste your API key into the `.env` file.
5. Run `npm i` to install all dependencies.
6. Run `npm run dev` to start the server.
7. See the output at [http://localhost:5173/](http://localhost:5173/)

## Next Steps

If you want to keep working on this app, here are some things that could be improved:

Style:

- [ ] Improve the styling by adding a new [font](https://fonts.google.com/).
- [ ] Make this web app responsive. Right now the formatting doesn't look so good for mobile.
- [ ] Add a dark mode switch using Bootstrap style classes and React state. (INTERMEDIATE)

Functionality:

- [ ] Add more interesting weather information to the WeatherForecastTile component.
- [ ] Make the input field safer and smarter. You can add input sanitation or show an error message for bad inputs (example: "@32hro>" is definitely not a city name or a longitude). (INTERMEDIATE)
  <details>
  <summary>Hint</summary>
  <br>
  Lookup "regex pattern attributes". Here is [a tool](https://regex101.com/) that allows you to test your regular expressions.
  </details>

Extras:

- [ ] Add [internationalization](https://www.i18next.com/) to all the strings. This allows you to show different translations of the website text. (INTERMEDIATE)
