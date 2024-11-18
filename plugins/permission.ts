import { PureAbility } from "@casl/ability";
import { abilitiesPlugin } from "@casl/vue";
import type { Rule } from "~/types/permissions/ability";

export default defineNuxtPlugin(async nuxtApp => {
    const ability = new PureAbility();

    // Define the rules here
    // You can watch your user token (JWT) and update the rules accordingly
    const rules: Rule[] = [];

    rules.push({ action: 'Read', subject: 'Account' })
    rules.push({ action: 'Write', subject: 'Account' })
    rules.push({ action: 'Read', subject: 'Post' })
    rules.push({ action: 'Write', subject: 'Post' })
    
    ability.update(rules)

    nuxtApp.vueApp.use(abilitiesPlugin, ability, {
        useGlobalProperties: true
    });
});