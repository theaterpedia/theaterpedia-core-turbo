import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "account" | "auth" | "checkout" | "default" | "order" | "types"
declare module "../../../../node_modules/.pnpm/nuxt@3.8.2_uc2domc3yk5t6ti6ohfo2wvqaa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}