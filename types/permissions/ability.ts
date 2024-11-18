import { type AbilityClass, PureAbility, type SubjectRawRule } from "@casl/ability";
import type { Actions } from "./actions";
import type { Subjects } from "./subjects";

export type AppAbility = PureAbility<[Actions, Subjects]>;
export const AppAbility = PureAbility as AbilityClass<AppAbility>;

export type Rule = SubjectRawRule<Actions, Subjects, unknown>;
export type Permission = [Actions, Subjects];