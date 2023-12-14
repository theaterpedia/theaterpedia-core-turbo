import DefaultTheme from 'vitepress/theme'
import MyButton from '@crearis/ui/components/Button.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
  },
}
