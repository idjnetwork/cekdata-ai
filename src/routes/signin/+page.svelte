<script>
	import { enhance } from '$app/forms'

	export let form

	let loading = false

	const handleSubmit = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<!-- fire Actions on +page.server.js -->
<form class="row flex flex-center" method="POST" use:enhance={handleSubmit}>
	<div class="col-6 form-widget">
		<h1 class="header">Sign In</h1>
		{#if form?.message !== undefined}
		<div class="success {form?.success ? '' : 'fail'}">
			{form?.message}
		</div>
		{/if}
		<div>
			<label for="email">Email address:</label>
			<input
				id="email"
				name="email"
				class="inputField"
				type="email"
				placeholder="Your email"
				value={form?.email ?? ''}
			/>
            <br>
            <label for="email">Password:</label>
			<input
				id="password"
				name="password"
				class="inputField"
				type="password"
				placeholder="Your password"
				value={form?.password ?? ''}
			/>
		</div>
		{#if form?.errors?.email}
		<span class="flex items-center text-sm error">
			{form?.errors?.email}
		</span>
		{/if}
		<div>
			<button class="button primary block">
                <!-- Fire handleSubmit function inside <script> tag -->
				{ loading ? 'Loading' : 'Sign In' }
			</button>
		</div>
	</div>
</form>