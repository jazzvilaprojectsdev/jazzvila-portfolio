const twconfigFilters = {
  theme: {
    filter: {
      // defaults to {}
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(4px)",
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
};

const twconfigBackgroundImg = {
  theme: {
    backgroundImage: (theme) => ({
      jazzvila: "url('/img/jazzvila.jpg')",
    }),
  },
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.tsx"],
  theme: {
    extend: {
      ...twconfigFilters.theme,
      ...twconfigBackgroundImg.theme,
    },
  },
  variants: {},
  plugins: [require("tailwindcss-filters")],
};
