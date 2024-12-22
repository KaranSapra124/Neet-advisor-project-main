
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
    extend: {
      animation: {
        scaleUp: 'scaleUp 2s linear infinite'
      },
      boxShadow: {
        'custom-inset': 'inset 0 0 0 10em rgb(40, 144, 241)',
      },
      colors: {
        'primary-color': '#201169'
      }
    },
  },
  plugins: [],
}
