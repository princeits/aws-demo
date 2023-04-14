const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

function countryData(names) {
  const countries = names.split(" ");
  let highestCount = 0;
  const output = [];
  countries.map((country) => {
    const length = country.length;
    output.push({
      name: country,
      length: length,
    });
    if (highestCount < length) {
      highestCount = length;
    }
  });
  return { output, highestCount };
}

let names = "india pakistan south_africa astralia";

app.get("/", (req, res) => {
  res.status(200).send(countryData(names));
});

app.listen(PORT, () => console.log("Server running on ", PORT));
