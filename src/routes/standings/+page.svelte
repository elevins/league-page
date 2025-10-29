<script>
	import { Standings } from '$lib/components'
	import { leagueName } from '$lib/utils/helper';
	import { pageTitle } from '$lib/stores';

	$pageTitle = `Standings | ${leagueName}`;

	export let data;
	const {standingsData, leagueTeamManagersData} = data;
</script>

<style>
	.holder {
		position: relative;
		z-index: 1;
		text-align: center;
	}
</style>

<div class="holder">
	<Standings {standingsData} {leagueTeamManagersData} />
</div>
