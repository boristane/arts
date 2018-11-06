<template>
    <div class="page">
        Oops ! Page not found...
        <div class="small">yes, it's a 404.</div>
    </div>
</template>

<script>
export default {
  name: 'Page404',
  beforeCreate () {
      document.title = 'Oops ! 404';
  }
}
</script>

<style scoped>
.page {
    font-size: 5em;
    color: lightgray;
    width: 800px;
    margin: 80px auto;
}

.small {
    font-size: 50px;
}
</style>