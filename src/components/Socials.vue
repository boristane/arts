<template>
    <div class="footer">
        <p class="links">
            <a href="mailto:me@boristane.com" rel="noopener noreferrer" class="social pointer"><i class="far fa-envelope"></i></a>
            <a href="https://twitter.com/BorisTane" rel="noopener noreferrer" class="social pointer"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/boristane/" rel="noopener noreferrer" class="social pointer"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/boristane" rel="noopener noreferrer" class="social pointer"><i class="fab fa-github"></i></a>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Socials',
}
</script>

<style scoped>
.footer {
    text-align: center;
    margin: 50px auto 0px;
    font-weight: 400;
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
    background-color: white
}

@media screen and (max-width: 1023px){
    .footer {
        margin-top: 80px;
        position: inherit;
    }
}
</style>
