<template>
    <div>

        <sub-a></sub-a>
        <br>
        <sub-b></sub-b>

    </div>
</template>

<script>
    import SubA from "./components/SubA";
    import SubB from "./components/SubB";

    export default {
        name: "Bus",
        components: {
            'sub-a': SubA, 'sub-b': SubB
        }
    }
</script>

<style scoped>

</style>