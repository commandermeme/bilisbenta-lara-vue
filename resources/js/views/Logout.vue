<template>

</template>

<script>
// import Home from '../views/Home'

export default {
    name: "Logout",
    created() {
        this.$store.dispatch('destroyToken')
            .then(response => {
                this.$router.push('/')
            })
    }
}
</script>

