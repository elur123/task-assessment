<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { useAlert } from '@/tools/sweetalert';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    tasks: Object
})

const form = useForm({
    name: '',
    due_date: '',
});

const create = () => {
    form.post(route('tasks.store'))
    useAlert().Alert('success', 'Task successfully created')
}

</script>

<template>
    <Head title="Tasks - Create" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Add a new task</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white shadow-sm overflow-hidden">
                    <form @submit.prevent="create" class="p-8 space-y-6">
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
                            <PrimaryButton :disabled="form.processing">Add task</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
