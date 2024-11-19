import type { AppAbility, Permission } from './types/permissions/ability'

// Known issue: https://github.com/nuxt/nuxt/discussions/19949
declare module '#app' {
    interface PageMeta {
        permission?: Permission,
    }
}

declare module 'vue-router' {
    interface RouteMeta {
        permission?: Permission
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $ability: AppAbility;
        $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean;
    }
}

export { }