<script>
	import { enhance } from '$app/forms'

	export let form

	let loading = false

	let passChange

	const handleSubmit = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
	function showPassword(e) {
		if (e.target.checked) {
			passChange.type = "text"
		} else {
			passChange.type = "password"
		}
	}
</script>

<svelte:head>
	<title>Cekdata.ai - Sign In</title>
</svelte:head>

<!-- fire Actions on +page.server.js -->
<section>

	<form class="row flex flex-center" method="POST" use:enhance={handleSubmit}>
		<div>
			<h1 class="header">sign <span style:color="#f65d9b">in</span></h1>
				<div class="success {form?.success ? '' : 'fail'}">
					{#if form?.message !== undefined}
						{form?.message}
					{:else}
						<span> </span>
					{/if}
				</div>
			<div>
				<label for="email">email address:</label>
				<br>
				<input
					id="email"
					name="email"
					class="inputField"
					type="email"
					placeholder="Your email"
					value={form?.email ?? ''}
				/>
				<br>
				<label for="email">password:</label>
				<br>
				<input
					bind:this={passChange}
					id="password"
					name="password"
					class="inputField"
					type="password"
					placeholder="Your password"
					value={form?.password ?? ''}
				/>
				<div class="show-password">
					<input id="show-pass" type="checkbox" onchange={showPassword}/><label for="show-pass">show password</label>
				</div>
			</div>
			{#if form?.errors?.email}
			<span class="flex items-center text-sm error">
				{form?.errors?.email}
			</span>
			{/if}
			<div>
				<button class="signin">
					<!-- Fire handleSubmit function inside <script> tag -->
					{ loading ? 'Loading' : 'Sign In' }
				</button>
			</div>
		</div>
	</form>
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
	form > div {
		width:300px;
		padding:1rem;
		font-family: 'Montserrat', sans-serif;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	label {
		font-size:0.8rem;
	}
	input {
		width:300px;
		font-size:1.5rem;
		margin-bottom:0.5rem;
		margin-top:0.2rem;
	}
	.signin {
		background-color: #f65d9b;
		padding:1rem;
		border-radius: 0.3rem;
		color:white;
		text-decoration: none;
		width:300px;
		text-align: center;
		transition:background-color 200ms ease-in-out;
		border:none;
		margin-top:1rem;
	}
	.signin:hover {
		background-color: #fc7fb1;
		border:none;
	}
	.fail {
		background-color: #ffe3ee;
		padding:0.2rem;
		color:#f03b83;
		margin-bottom:1rem;
	}
	.show-password {
		display: flex;
		align-items: center;
	}
	input[type=checkbox] {
		width:1rem;
		height:1rem;
	}
</style>