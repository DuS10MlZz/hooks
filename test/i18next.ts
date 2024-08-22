import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import i18nextMiddleware from 'i18next-http-middleware'

// Instance used for testing
// Similar to the one used in the app
i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      // eslint-disable-next-line no-path-concat
      loadPath: '../../locales/{{lng}}.json',
    },
    debug: true,
    fallbackLng: 'en',
    preload: ['en'],
  })
  .catch((error) => {
    throw new Error(`Failed to initialize i18next: ${error}`)
  })

export const t = i18next.t.bind(i18next)
