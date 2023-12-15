import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "account" | "auth" | "checkout" | "default" | "order" | "types"
declare module "../../../../node_modules/.pnpm/nuxt@3.8.2_2siveq6k3m5fx6oz2vknqsz3xy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}