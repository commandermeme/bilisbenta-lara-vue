<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container">
                <a class="navbar-brand mr-auto" href=""><img src="/img/bilisbenta-logo.png" alt="" class=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ml-3" v-if="!loggedIn">
                        <router-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/login" class="nav-link text-dark">Login</router-link>
                        <!--<a data-toggle="collapse" data-target=".navbar-collapse.show" href="/login" class="nav-link text-dark">Login</a>-->
                        </li>
                        <li class="nav-item ml-3" v-if="loggedIn">
                        <router-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/logout" class="nav-link text-dark">Logout</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div style="padding-top: 20%">
            <h1>Dashboard</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    }
}
</script>
