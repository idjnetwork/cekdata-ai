<script>
    export let session
</script>
<nav>
    <a class='link-article' href='/'>Home</a>
    {#if session}
    <a class='link-article' href='/account'>Profile</a>
    {/if}
</nav>

<style>
    nav {
        margin-bottom:1rem;
    }
</style>