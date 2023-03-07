<script lang="ts">
	import Button, { Label } from '@smui/button';
	import TopAppBar, { Row as TopAppBarRow, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import { PUBLIC_DEPLOYMENT, PUBLIC_NAMESPACE } from '$env/static/public';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<TopAppBarRow>
		<Section>
			<!-- <img src="/svc.png" class="logo" /> -->
			<Title>Deployment restarter</Title>
		</Section>
	</TopAppBarRow>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<main>
		<form method="post">
			<div>
				Deployment: {PUBLIC_DEPLOYMENT}
			</div>
			<div>
				Namespace: {PUBLIC_NAMESPACE}
			</div>
			<Button type="submit" variant="raised">
				<Label>Restart</Label>
			</Button>
		</form>
	</main>
</AutoAdjust>
<footer>Deployment restarter - Maxime Moreillon - JTEKT Corporation</footer>

<style>
	.logo {
		width: 2.5em;
		height: 2.5em;
	}
	footer {
		margin: 0;
		padding: 0;
		/* background-color: #cccccc; */
		text-align: center;
		padding: 0.75em;
		font-size: 80%;
	}

	form {
		min-height: 70vh;
		display: flex;
		gap: 1em;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
