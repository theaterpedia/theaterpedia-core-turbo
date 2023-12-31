// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+devtools@1.0.6_nuxt@3.8.2+vite@5.0.9/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+devtools@1.0.6_nuxt@3.8.2+vite@5.0.9/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../templates.pwa.client.212dc586").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+i18n@8.0.0-rc.3_vue-router@4.2.5+vue@3.3.9/node_modules/@nuxtjs/i18n/dist/runtime/plugins/composition").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+i18n@8.0.0-rc.3_vue-router@4.2.5+vue@3.3.9/node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
