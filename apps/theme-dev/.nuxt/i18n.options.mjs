export const localeCodes = ["en"]

export const localeMessages = {
  "en": [{ key: "../../../packages/theme/lang/en.json", load: () => import("../../../packages/theme/lang/en.json" /* webpackChunkName: "lang__________packages_theme_lang_en_json" */) }],
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.bundle = Object({"compositionOnly":true})
  nuxtI18nOptions.compilation = Object({"jit":true,"strictMessage":true,"escapeHtml":false})
 const vueI18nConfigLoader = async (loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config()
                : {}
          }
  const vueI18n = await vueI18nConfigLoader((() => import("../i18n.config.ts?hash=82d7d624&config=1" /* webpackChunkName: "i18n_config_82d7d624" */)))
  nuxtI18nOptions.vueI18n = vueI18n
  nuxtI18nOptions.vueI18n.messages ??= {}
  const deepCopy = (src, des, predicate) => {
            for (const key in src) {
              if (typeof src[key] === 'object') {
                if (!typeof des[key] === 'object') des[key] = {}
                deepCopy(src[key], des[key], predicate)
              } else {
                if (predicate) {
                  if (predicate(src[key], des[key])) {
                    des[key] = src[key]
                  }
                } else {
                  des[key] = src[key]
                }
              }
            }
          }
          const mergeMessages = async (messages, loader) => {
            const layerConfig = await vueI18nConfigLoader(loader)
            const vueI18n = layerConfig || {}
            const layerMessages = vueI18n.messages || {}
            for (const [locale, message] of Object.entries(layerMessages)) {
              messages[locale] ??= {}
              deepCopy(message, messages[locale])
            }
          }
  await mergeMessages(nuxtI18nOptions.vueI18n.messages, (() => import("../../../packages/theme/i18n.config.ts?hash=b28569d3&config=1" /* webpackChunkName: "i18n_config_b28569d3" */)))
  await mergeMessages(nuxtI18nOptions.vueI18n.messages, (() => import("../../../packages/data/i18n.config.ts?hash=e1d78e1b&config=1" /* webpackChunkName: "i18n_config_e1d78e1b" */)))
  nuxtI18nOptions.locales = [Object({"code":"en","files":["../../packages/theme/lang/en.json"],"hashes":["1cb329b9"],"types":["static"]})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "lang"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  nuxtI18nOptions.parallelPlugin = false
  nuxtI18nOptions.i18nModules = []
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),bundle: Object({"compositionOnly":true}),compilation: Object({"jit":true,"strictMessage":true,"escapeHtml":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false,parallelPlugin: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","files":["../../packages/theme/lang/en.json"],"hashes":["1cb329b9"],"types":["static"]})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const parallelPlugin = false
