<script>
    export let session
</script>

<nav>
    <div class="spacer"></div>
    <a href='/about' class="menu">Menu</a>
    <a href='/'><span style:color="#f65d9b">cekdata</span>.ai</a>
    <!-- {#if session}
    <a  href='/account'>sign out</a>
    {/if} -->
    <a  href='/account' class="menu" class:disabled={!session}>Profile</a>
    <div class="spacer"></div>
</nav>

<style>
    nav {
        margin-bottom:1rem;
        font-family: 'Montserrat', sans-serif;
        border-bottom: 1px solid #303030;
        height:50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        width:100vw;
        z-index:999;
        background-color: #fffbf6;
    }
    nav > a {
        text-decoration: none;
        color: #161616;
        margin:auto;
        font-size:1.2rem;
        font-weight:800;
    }
    .spacer {
        width:50px;
    }
    .menu {
        font-weight:400
    }
    .disabled {
        color:transparent;
    }
</style>