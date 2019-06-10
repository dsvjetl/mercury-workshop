<template>
    <div class="co-user">
        <img
            :src="user.avatar"
            alt="user photo"
        >
        <p>
            Email: <span>{{user.email}}</span>
        </p>
        <p>
            Full name: <span>{{user.first_name}} {{user.last_name}}</span>
        </p>
        <p>
            User id: <span>{{user.id}}</span>
        </p>

        <button
            @click="goHome()"
        >
            go home
        </button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: 'User',
    })
    export default class User extends Vue {
        private userId: string | null = null;

        private get user() {
            return this.$store.getters.user;
        }

        private created() {
            this.userId = this.$route.params.id ? this.$route.params.id : null;
            this.$store.dispatch('getUser', this.userId);
        }

        private goHome() {
            this.$router.push('/');
        }
    }
</script>

<style lang="scss" scoped>
    .co-user {
        img {
            border-radius: 50%;
        }

        span {
            color: gray;
        }
    }
</style>
