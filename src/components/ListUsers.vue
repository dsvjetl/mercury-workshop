<template>
    <div class="co-list-users">
        <h3>List of users</h3>
        <ul
            v-if="users.length > 0"
        >
            <li
                v-for="user in users"
                :key="user.id"
            >
                <a
                    @click="openUser(user.id)"
                >
                    {{user.first_name}} {{user.last_name}}
                </a>
            </li>
        </ul>
        <button
            :class="{'is-active': currentPage === 1}"
            @click="userListPage(1)"
        >
            1
        </button>
        <button
            :class="{'is-active': currentPage === 2}"
            @click="userListPage(2)"
        >
            2
        </button>
        <button
            :class="{'is-active': currentPage === 3}"
            @click="userListPage(3)"
        >
            3
        </button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {User} from '@/types/User';

    @Component({
        name: 'ListUsers',
    })
    export default class ListUsers extends Vue {
        private currentPage: number = 1;

        private get users(): User[] {
            return this.$store.getters.users;
        }

        private created() {
            this.$store.dispatch('getUsers');
        }

        private openUser(userId: number) {
            this.$router.push(`/user/${userId}`);
        }

        private userListPage(page: number) {
            this.$store.dispatch('getUsers', page);
            this.currentPage = page;
        }
    }
</script>

<style lang="scss" scoped>
    .co-list-users {
        a {
            cursor: pointer;
            text-decoration: underline;
        }

        button {
            &.is-active {
                background-color: gray;
            }
        }
    }
</style>
