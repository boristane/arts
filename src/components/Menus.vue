<template>
    <div class="header">
        <a href="">home</a>
        <a href="https://boristane.com" target="_blank">about</a>
    </div>
</template>

<script>
export default {
  name: 'Menus',
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 15px;
    left: 15px;
}

.header a {
    display: block;
}

@media screen and (max-width: 1023px){
    .header {
        position: inherit;
    }
}
</style>
