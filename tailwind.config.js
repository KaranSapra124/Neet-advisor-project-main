module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  safelist: ["scale-125", "z-50", "ring-4", "ring-yellow-500", "brightness-75"],
  theme: {
    fontFamily: { sans: "Poppins" },
    extend: {
      animation: {
        scaleUp: "scaleUp 2s linear infinite",
        rotateIt: "flipInY 3s linear normal ",
        rubberBand: "rubberBand 2.5s linear normal",
        fadeUp: "fadeIn 4s linear infinite",
        slideRight: "slideInRight 0.5s ease-in-out normal",
        slideLeft: "slideInLeft 0.5s ease-in-out normal",
        slideUp: "slideInUp 0.5s linear normal",
        slideOutLeft: "slideOutLeft 3s forwards normal",
        slideDown: "slideOutDown 3s forwards normal",
        slideOutRight: "slideOutRight 3s forwards normal",
        slideOutUp: "slideOutUp 3s forwards normal",
        backIn: "backInLeft 2.5s ease-in normal",
        fadeIn: "fadeIn 2s linear normal",
        zoomIn: "zoomIn 1s linear normal",
        fadeInTopRight: "fadeInTopRight 3s ease-in-out",
        fadeInDown: "fadeInDown 1s ease-in-out",
        // slideIn:'fadeIn 4s linear infinite'
      },
      boxShadow: {
        "custom-inset": "inset 0 0 0 10em rgb(40, 144, 241)",
        "box-shadow":
          "inset 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(0, 0, 0, 0.2); /* Soft inner and outer shadows",
      },

      colors: {
        "primary-color": "#201169",
        "hero-gradient": "linear-gradient(180deg, transparent, #fff 86%)",
      },
      backgroundImage: {
        "webinar-hero": "url('grid-pattern.jpg')",
        "seminar-hero": "url('./Seminar/bg-seminar.jpg')",
        "mbbs-hero": "url('./Mbbs/bg-mbbs.jpg')",
        "news-bg":
          "url('https://img.freepik.com/free-photo/copy-space-medical-desk-with-coffee-cup_23-2148519791.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid')",

        "hero-bg": "url('HeroImg.jpg')",
      },
      utilities: {
        ".break-inside-avoid": {
          "break-inside": "avoid",
        },
      },
      screens: {
        xs: "500px",
      },
    },
    animationDelay: {
      "3s": "3s",
    },
    keyframes: {
      fadeInTopRight: {
        "0%": { opacity: "0", transform: "translate(0px, 0px)" },
        "33%": { opacity: "1", transform: "translate(100px, 100px)" },
        "100%": { opacity: "0", transform: "translate(0px, 0px)" },
      },
      fadeInDown: {
        "0%": { opacity: "0", transform: "translateY(-50px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },

  plugins: [],
};
