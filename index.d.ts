import type { AppAbility, Permission } from './types/permissions/ability'

declare module 'nuxt/app' {
    interface PageMeta {
        permission?: Permission,
    }

    interface RouteMeta {
        permission?: Permission,
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $ability: AppAbility;
        $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean;
    }
}

export { }