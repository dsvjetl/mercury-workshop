<template>
    <div class="co-home">
        <ListUsers/>
        <CreateUser/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ListUsers from '@/components/ListUsers.vue';
    import CreateUser from '@/components/CreateUser.vue';

    @Component({
        components: {
            CreateUser,
            ListUsers,
        },
    })
    export default class Home extends Vue {

    }
</script>

<style>
    .co-home {

    }
</style>
