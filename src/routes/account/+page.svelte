<script>
	import { enhance } from '$app/forms';
	// import type { SubmitFunction } from '@sveltejs/kit';

	export let data
	export let form

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)

	let profileForm
	let loading = false
	let fullName = profile?.full_name ?? ''
	let username = profile?.username ?? ''
	let website = profile?.website ?? ''
	let avatarUrl = profile?.avatar_url ?? ''

	const handleSubmit = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<section>
	<div class="form-widget">
		<!-- <form
			class="form-widget"
			method="POST"
			action="?/update"
			use:enhance={handleSubmit}
			bind:this={profileForm}
		>
			<div>
				<label for="email">Email</label>
				<input id="email" type="text" value={session.user.email} disabled />
			</div>
	
			<div>
				<label for="fullName">Full Name</label>
				<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
			</div>
	
			<div>
				<label for="username">Username</label>
				<input id="username" name="username" type="text" value={form?.username ?? username} />
			</div>
	
			<div>
				<label for="website">Website</label>
				<input id="website" name="website" type="url" value={form?.website ?? website} />
			</div>
	
			<div>
				<input
					type="submit"
					class="button block primary"
					value={loading ? 'Loading...' : 'Update'}
					disabled={loading}
				/>
			</div>
		</form> -->
	
		<form method="POST" action="?/signout" use:enhance={handleSignOut}>
			<h1>Halo,</h1>
			<h3>{session.user.email}</h3>
			<div>
				<button class="button block signout" disabled={loading}>Sign Out</button>
			</div>
		</form>
	</div>
</section>

<style>
	section {
		height:calc(80vh - 50px);
        margin-top:50px;
	}
	.signout {
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
	.signout:hover {
		background-color: #fc7fb1;
		border:none;
	}
	.form-widget {
		width:100vw;
		/* padding:1rem; */
		font-family: 'Montserrat', sans-serif;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	form > h1, h3 {
		text-align: center;
	}
</style>