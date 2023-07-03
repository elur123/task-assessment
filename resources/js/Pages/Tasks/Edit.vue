<script setup lang="ts">
import { Head, useForm, router } from '@inertiajs/vue3';
import { useAlert } from '@/tools/sweetalert'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';

const props = defineProps({
    task: Object
})

const form = useForm({
    name: props.task?.name,
    due_date: props.task?.due_date,
});

const update = () => {
    form.put(route('tasks.update', props.task), {
        onSuccess: () => {
            useAlert().Alert('success', 'Task successfully updated')
        }
    })
}

const showDeleteConfirm = () => {

    useAlert().Confirmation('Delete task', 'Yes, delete task').then((confirm) => {
        if (confirm) {
            router.delete(route('tasks.destroy', props.task))   
        }
    })
}

</script>

<template>
    <Head title="Tasks - Edit" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Edit a new task</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white shadow-sm overflow-hidden">
                    <form @submit.prevent="update" class="p-8 space-y-6">
                        <div>
                            <InputLabel for="name" value="Name" />

                            <TextInput
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.name"
                                required
                                autofocus
                                autocomplete="name"
                            />

                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div>
                            <InputLabel for="due_date" value="Due Date" />

                            <TextInput
                                id="due_date"
                                type="date"
                                class="mt-1 block w-full"
                                v-model="form.due_date"
                                required
                                autocomplete="username"
                            />

                            <InputError class="mt-2" :message="form.errors.due_date" />
                        </div>

                      

                        <div class="flex items-center gap-4">
                            <PrimaryButton :disabled="form.processing">Update task</PrimaryButton>

                            <DangerButton type="button" @click="showDeleteConfirm">Delete task</DangerButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
