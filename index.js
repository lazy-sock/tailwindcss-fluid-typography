const plugin = require("tailwindcss/plugin");
const tailFluid = plugin(function ({ matchUtilities }) {
  matchUtilities({
    fluid: (value) => ({
      fontSize: `clamp(${value.split(" ")[0]}rem,${(
        (-value.split(" ")[2] / 16) *
          ((value.split(" ")[1] - value.split(" ")[0]) /
            (value.split(" ")[3] / 16 - value.split(" ")[2] / 16)) +
        Number(value.split(" ")[0])
      ).toFixed(4)}rem + ${(
        ((value.split(" ")[1] - value.split(" ")[0]) /
          (value.split(" ")[3] / 16 - value.split(" ")[2] / 16)) *
        100
      ).toFixed(4)}vw, ${value.split(" ")[1]}rem)`,
    }),
  });
});
module.exports = tailFluid;
