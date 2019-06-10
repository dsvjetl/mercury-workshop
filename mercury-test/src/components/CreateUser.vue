<template>
    <div class="co-create-user">
        <h3>Create user</h3>
        <input
            type="text"
            placeholder="username"
            v-model="username"
        >
        <input
            type="text"
            placeholder="job"
            v-model="job"
        >
        <button
            @click="createUser()"
        >
            Create
        </button>

        <br>

        <transition name="fade" mode="out-in">
            <div
                v-if="Object.keys(createdUser).length > 0"
                key="userCreated"
            >
                <p>Name: {{createdUser.name}}</p>
                <p>Job: {{createdUser.job}}</p>

                <p v-if="createdUser.id">ID: {{createdUser.id}}</p>
                <p v-else>ID: not accessible</p>

                <p v-if="createdUser.createdAt">Created: {{createdUser.createdAt | dateFilter}}</p>
                <p v-else-if="createdUser.updatedAt">Updated: {{createdUser.updatedAt | dateFilter}}</p>

                <h3>Update user</h3>
                <input
                    placeholder="update username"
                    v-model="updatedUsername"
                >
                <input
                    placeholder="update job"
                    v-model="updatedJob"
                >
                <button
                    @click="updateUser()"
                >
                    Update
                </button>
            </div>

            <div
                v-else
                key="userNotCreated"
            >
                <small>User not created yet</small>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {dateFilter} from '@/filters/dateFormatFilter';

    @Component({
        name: 'CreateUser',
        filters: {
            dateFilter,
        },
    })
    export default class CreateUser extends Vue {
        private username: string = '';
        private job: string = '';
        private updatedUsername: string = '';
        private updatedJob: string = '';

        private get createdUser() {
            return this.$store.getters.createdUser;
        }

        private createUser() {
            if (this.username.length <= 0 || this.job.length <= 0) {
                alert('Please fill both inputs!');
                return;
            }

            const request = {
                name: this.username,
                job: this.job,
            };

            this.$store.dispatch('createUser', request);

            this.username = '';
            this.job = '';
        }

        private updateUser() {
            if (this.updatedUsername.length <= 0 || this.updatedJob.length <= 0) {
                alert('Please fill both inputs!');
                return;
            }

            const requestData = {
                request: {
                    name: this.updatedUsername,
                    job: this.updatedJob,
                },
                userId: this.createdUser.id,
            };

            this.$store.dispatch('updateUser', requestData);
        }
    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .co-create-user {

    }
</style>
