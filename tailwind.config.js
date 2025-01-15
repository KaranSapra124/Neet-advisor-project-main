
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  safelist: [
    'scale-125',
    'z-50',
    'ring-4',
    'ring-yellow-500',
    'brightness-75'
  ],
  theme: {
    fontFamily:
      { sans: "Poppins" },
    extend: {
      animation: {
        scaleUp: 'scaleUp 2s linear infinite',
        rotateIt: 'flipInY 3s linear normal ',
        rubberBand: 'rubberBand 2.5s linear normal',
        fadeUp: 'fadeIn 4s linear infinite',
        slideRight:'slideInRight 0.5s linear normal',
        slideLeft:'slideInLeft 0.5s linear normal',
        // slideIn:'fadeIn 4s linear infinite'
      },
      boxShadow: {
        'custom-inset': 'inset 0 0 0 10em rgb(40, 144, 241)',
        'box-shadow': 'inset 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(0, 0, 0, 0.2); /* Soft inner and outer shadows'
      },
      colors: {
        'primary-color': '#201169',
        'hero-gradient': 'linear-gradient(180deg, transparent, #fff 86%)'
      },
 backgroundImage:{
  'webinar-hero':"url('grid-pattern.jpg')"
 }


    },
  },
  plugins: [],
}
