// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        scaleDown: 'scaleDown 2s forwards',
      },
    },
  },
}
