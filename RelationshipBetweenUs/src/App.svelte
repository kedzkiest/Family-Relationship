<script>
	let depth = [
		{id: 0, text: "0"},
		{id: 1, text: "1"},
		{id: 2, text: "2"},
		{id: 3, text: "3"}
	];

	let selected = {id: 0, text: null};

	//$: console.log(selected);

	let text = "あなた";
</script>

<main>
	<h1>あなたと誰かの関係性</h1>

	<h2>
		関係の深さ

		<select bind:value={selected}>
			{#each depth as depth}
				<option value={depth}>
					{depth.text}
				</option>
			{/each}
		</select>
	</h2>

	<h3>
		{#if selected.id === 0}
			{text}は
		{:else}
			{text}の
		{/if}
	</h3>
</main>

<style>
	h1{
		font-weight: normal;
		text-align: center;
	}

	h2{
		font-weight: normal;
		text-align: center;
	}

	h3{
		font-weight: normal;
		text-align: center;
	}
</style>