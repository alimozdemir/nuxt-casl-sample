import { useAbility } from "@casl/vue";
import type { AppAbility } from "~~/types/permissions/ability";

export const useAppAbility = () => useAbility<AppAbility>();