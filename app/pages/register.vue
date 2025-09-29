<script setup lang="ts">
const email = ref('')
const password = ref('')
const name = ref('')
const error = ref('')

const register = async () => {
    try {
        await $fetch('/api/auth/register', {
            method: 'POST',
            body: { email: email.value, password: password.value, name: name.value }
        })
        // After register → automatically sign in
        await signIn('credentials', { email: email.value, password: password.value, redirect: true })
    } catch (err: any) {
        error.value = err?.data?.statusMessage || 'Something went wrong'
    }
}
</script>

<template>
    <div class="bg-blue-400 w-1/3">
        <form class="flex flex-col" @submit.prevent="register">
            <input v-model="name" placeholder="Name" />
            <input v-model="email" placeholder="Email" type="email" />
            <input v-model="password" placeholder="Password" type="password" />
            <button type="submit">Register</button>
            <p v-if="error">{{ error }}</p>
        </form>
    </div>
</template>
