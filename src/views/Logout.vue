<template>
    <div>
        <div class="logout">
            <button @click="logout">Выйти</button>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { AuthService } from '../services/auth';

export default {
    methods: {
        async logout() {
            try {
                await AuthService.logout();
                localStorage.removeItem('token');
                router.push('/login');
            } catch (error) {
                console.error('Ошибка выхода:', error.response ? error.response.data : error);
            }
        }
    }
};
</script>