<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden sm:rounded-lg space-y-8 grid place-content-center">
                    <Link class="text-blue-500 underline" :href="route('tasks.create')">Add new Task</Link>
                    <Link class="text-blue-500 underline" :href="route('tasks.index')">View Tasks</Link>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
