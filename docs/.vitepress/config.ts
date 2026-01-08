import { defineConfig } from 'vitepress'
import lightbox from 'vitepress-plugin-lightbox'
import mathjax3 from 'markdown-it-mathjax3'

const customElements = [
  'mjx-container',
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kia Lok's Personal Site",
  description: "Sharing new technical knowledge and experience",
  appearance: true, // enable dark mode toggle
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about-me' },
      { text: 'Write-ups', link: '/blog' }
    ],
    outline: {
      level: [2, 3], // or 'deep' for all levels
      label: ''
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kia-Lok' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/max-tan-kia-lok-50aa05260/' }
    ]
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    emoji: { shortcuts: {}},
    lineNumbers: true,
    config: (md) => {
      // enable the lightbox plugin
      md.use(lightbox, {
        // optional: plugin options, can leave empty for defaults
      });
      md.use(mathjax3, {
        tex: { tags: 'ams' } // or 'all'
      });
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
})
