<script setup lang="ts">
import { ActionsList } from '~/types/permissions/actions';
import { SubjectsList } from '~/types/permissions/subjects';

const subjects = SubjectsList;
const actions = ActionsList;
</script>
<template>

    <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th v-for="action in actions" :key="action">{{ action }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="subject in subjects">
                <td>{{ subject }}</td>
                <td v-for="action in actions" :key="action">
                    <input type="checkbox" :id="subject + action" :checked="$can(action, subject)" :name="subject + action">
                </td>
            </tr>
        </tbody>

    </table>
</template>