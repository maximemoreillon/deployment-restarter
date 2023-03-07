<script lang="ts">
	import Button, { Label } from '@smui/button';
	import TopAppBar, { Row as TopAppBarRow, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import { env } from '$env/dynamic/public';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<TopAppBarRow>
		<Section>
			<img src="/deploy.png" class="logo" alt="logo" />
			<Title>Deployment restarter</Title>
		</Section>
	</TopAppBarRow>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<main>
		<form method="post">
			<div>
				Deployment: {env.PUBLIC_DEPLOYMENT || 'Undefined'}
			</div>
			<div>
				Namespace: {env.PUBLIC_NAMESPACE || 'Undefined'}
			</div>
			<Button type="submit" variant="raised">
				<Label>Restart</Label>
			</Button>
		</form>
	</main>
</AutoAdjust>

<!-- <footer>Deployment restarter - Maxime Moreillon - JTEKT Corporation</footer> -->
<style>
	.logo {
		width: 2.5em;
		height: 2.5em;
	}
	/* footer {
		margin: 0;
		padding: 0;
		text-align: center;
		padding: 0.75em;
		font-size: 80%;
	} */

	form {
		min-height: 70vh;
		display: flex;
		gap: 1em;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
