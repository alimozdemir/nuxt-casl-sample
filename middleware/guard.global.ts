import type { Actions } from "~~/types/permissions/actions";
import type { Subjects } from "~~/types/permissions/subjects";

export default defineNuxtRouteMiddleware((to, from) => {
    const ability = useAppAbility();
    const checkPermission = computed(() => {
        if (!to.meta.permission || !Array.isArray(to.meta.permission) || 
            !to.meta.permission[0] || !to.meta.permission[1]) return true;
    
        const action = to.meta.permission[0] as Actions;
        const subject = to.meta.permission[1] as Subjects;
        
        return ability.can(action, subject);
    });

    if ((to.path != from.path || import.meta.server) && to.meta.permission) {
        
        if (checkPermission.value) return;
        return abortNavigation({
            statusCode: 403,
            fatal: true,
            message: 'You are not allowed to access this page'
        });
    }
});