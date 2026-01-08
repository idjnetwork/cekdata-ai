<script>
	import { enhance } from '$app/forms'

	let loading = false

	const handleSubmit = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
</script>

<section>
	<!-- <a class='link-article' href='/signup'>Sign Up</a> -->
	<h1><span style:color="#f65d9b">cekdata</span>.ai</h1>
	<a class='signin' href='/signin'>Sign In</a>
</section>

<style>
	h1 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 800;
		font-size: 4rem;
		margin-top:0;
	}
	section {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.signin {
		background-color: #f65d9b;
		padding:1rem;
		border-radius: 0.3rem;
		color:white;
		text-decoration: none;
		width:320px;
		text-align: center;
		transition:background-color 200ms ease-in-out;
	}
	.signin:hover {
		background-color: #fc7fb1;
	}
</style>