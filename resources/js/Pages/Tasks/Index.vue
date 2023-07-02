<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { useAlert } from '@/tools/sweetalert';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Checkbox from '@/Components/Checkbox.vue';

const props = defineProps({
    tasks: Object
})

const completeTask = (task: number, is_completed: boolean) => {

    router.put(route('tasks.completed', task), { 
        'is_completed': is_completed
    })

    useAlert().Alert('success', is_completed ? 'Task mark as completed' : 'Task mark as not complete')
}
</script>

<template>
    <Head title="Tasks" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">View all tasks</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white shadow-sm overflow-hidden">
                    <table class="w-full">
                        <thead>
                            <tr class="">
                                <th class="px-2 py-4 text-left border">Task Name</th>
                                <th class="px-2 py-4 text-left border">Due Date</th>
                                <th class="px-2 py-4 text-left border">Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="tasks?.data.length <= 0">
                                <td class="py-2 text-center text-gray-400 border" colspan="3">No data...</td>
                            </tr>
                            <tr 
                                v-for="task in tasks?.data"
                                :key="task.id"
                            >
                                <td class="p-2 border">
                                    <Link class="text-blue-500 underline" :href="route('tasks.edit', task)">{{ task.name }}</Link>
                                </td>
                                <td class="p-2 border">{{ task.due_date }}</td>
                                <td class="p-2 border">
                                    <Checkbox 
                                        :checked="task.is_completed"
                                        @change="(e: any) => completeTask(task, e.target.checked)"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
