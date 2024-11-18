<script setup lang="ts">
</script>
<template>
    <div>
        <p>Public Page</p>

        <nuxt-link :to="{ name: 'auth' }">Go to Auth Page</nuxt-link>

        <PermissionTable></PermissionTable>
    </div>
</template>