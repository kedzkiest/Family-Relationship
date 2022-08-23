<script>
	let depth = [
		{id: 0, text: "0"},
		{id: 1, text: "1"},
		{id: 2, text: "2"},
		{id: 3, text: "3"}
	];

	let selected = {id: null, text: null};

	//$: console.log(selected);

	let text = "あなた";

	let showResult = false;
	const seeResult = () => showResult = true;

	function handleReload(){

	}
</script>

<main>
	
	<div class="upperPart">
		<h1>あなたと誰かの関係性</h1>

		{#if !showResult}
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
		{/if}

		<h3>
			{#if selected.id === null}
				<div></div>
			{:else if selected.id === 0}
				{text}は
			{:else}
				{text}の
			{/if}
		</h3>
	</div>

	{#if !showResult}
		{#if selected.id === 0}
			<div class="middlePart">
				<button on:click={seeResult}>結果を見る</button>
			</div>
		{/if}
	{/if}


	{#if showResult}
		<div class="lowerPart">
			<h2>{text}です。</h2>
		</div>

		<div class="bottomPart">
			<form on:reload={handleReload}>
				<button type="reload">もう一度診断する</button>
			</form>
		</div>
	{/if}
</main>

<style>
	.upperPart{
		background-color: #ffdddd;
	}

	.middlePart{
		text-align: center;
	}

	.lowerPart{
		background-color: #ddffdd;
	}

	.bottomPart{
		text-align: center;
	}

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