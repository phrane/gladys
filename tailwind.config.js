module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/css/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
          'sans': ['"Sky Text"','-apple-system','Helvetica', 'Arial', 'sans-serif'],
      }, 
      colors: {
        yellowgh: '#FCD116',
        redgh: '#CE1126',
        greengh: '#006B3f',
        blue_linkedin: '#2867B2',
        whiteblog: '#fffbea',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
