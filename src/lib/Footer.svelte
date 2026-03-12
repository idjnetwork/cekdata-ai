<script>
    import internewsLogo from '$lib/assets/img/internews-logo.png';
    import euLogo from '$lib/assets/img/EN_FundedbytheEU_RGB_NEG.png'
    import idjnLogo from '$lib/assets/img/idjn-logo.png'
</script>

<footer class="desktop">
    <p>
        Developed by <span><img src={idjnLogo} alt="Indonesian Data Journalism Network"></span><span class="spacer"></span> | <span class="spacer"></span>Supported by <span><img src={internewsLogo} alt="internews"></span>  &  <span><img src={euLogo} alt="European Union"> </span>
    </p>
</footer>

<footer class="mobile"> 
    <p>
        Developed by <span><img src={idjnLogo} alt="Indonesian Data Journalism Network"></span>
    </p>
    <p style:margin-bottom="20px">
        Supported by <span><img src={internewsLogo} alt="internews"></span>  &  <span><img src={euLogo} alt="European Union"> </span>
    </p>
</footer>

<style>
    footer {
        background-color: #f65d9b;
        color:white;
    }
    p {
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size:0.8rem;
        margin-bottom:0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        margin-left:0.5rem;
        margin-right:0.5rem;
        margin-top:0;
        margin-bottom:0;
        height:28px;
    }
    .spacer {
        width:0.5rem;
    }
    .mobile {
        display: none;
    }
    @media (max-width: 450px) {
        .desktop {
            display: none;
        }
        .mobile {
            display:flex;
            flex-direction:column;
            align-items: flex-start;
        }
        p {
            font-size:0.7rem;
            margin-left:6%;
        }
        img {
            height:28px;
        }
    }
</style>

