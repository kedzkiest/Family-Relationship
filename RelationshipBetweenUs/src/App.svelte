<script>
	let depth = [
		{id: 0, text: "0"},
		{id: 1, text: "1"},
		{id: 2, text: "2"},
		{id: 3, text: "3"}
	];

	let selectedDepth = {id: null, text: null};
	//$: console.log(selectedDepth.id);

	let relationship = [
		{id: 0, text: "父"},
		{id: 1, text: "母"},
		{id: 2, text: "兄"},
		{id: 3, text: "姉"},
		{id: 4, text: "弟"},
		{id: 5, text: "妹"},
		{id: 6, text: "息子"},
		{id: 7, text: "娘"},
		{id: 8, text: "配偶者"}
	]

	let selectedRelationship = [
		{id: null, text: null},
		{id: null, text: null},
		{id: null, text: null}
	];

	//$: console.log(selectedRelationship);
	let allSelected = false;

	$: if(selectedDepth.id === 0) allSelected = true;

	$: for(let i = 0; i < selectedDepth.id; i++){
		allSelected = true;

		if(selectedRelationship[i].id === null){
			allSelected = false;
			break;
		}
	}
	//$: console.log(allSelected);

	let showResult = false;
	const seeResult = () => showResult = true;

	let text = "";

	function handleReload(){

	}
</script>

<main>
	
	<div class="upperPart">
		<h1>あなたと誰かの関係性</h1>

		{#if !showResult}
			<h2>
				関係の深さ

				<select bind:value={selectedDepth}>
					{#each depth as depth}
						<option value={depth}>
							{depth.text}
						</option>
					{/each}
				</select>
			</h2>
		{/if}

		<h3>
			{#if selectedDepth.id === null}
				<div></div>
			{:else if selectedDepth.id === 0}
				あなたは
			{:else if selectedDepth.id === 1}
				あなたの

				<select bind:value={selectedRelationship[0]}>
					{#each relationship as r}
						<option value={r}>
							{r.text}
						</option>
					{/each}
				</select>

				は
			{:else if selectedDepth.id === 2}
				あなたの

				<select bind:value={selectedRelationship[0]}>
					{#each relationship as r}
						<option value={r}>
							{r.text}
						</option>
					{/each}
				</select>

				の

				<select bind:value={selectedRelationship[1]}>
					{#each relationship as r}
						<option value={r}>
							{r.text}
						</option>
					{/each}
				</select>

				は
			{:else if selectedDepth.id === 3}
				あなたの

				<select bind:value={selectedRelationship[0]}>
					{#each relationship as r}
						<option value={r}>
							{r.text}
						</option>
					{/each}
				</select>

				の

				<select bind:value={selectedRelationship[1]}>
					{#each relationship as r}
						<option value={r}>
							{r.text}
						</option>
					{/each}
				</select>

				の

				<select bind:value={selectedRelationship[2]}>
					{#each relationship as r}
						<option value={r}>
							{r.text}
						</option>
					{/each}
				</select>

				は
			{/if}
		</h3>
	</div>

	{#if !showResult && allSelected}
		<div class="middlePart">
			<button on:click={seeResult}>結果を見る</button>
		</div>
	{/if}


	{#if showResult}
		<div class="lowerPart">
			{#if selectedDepth.id === 0}
				<h2>あなたです。</h2>
			{:else if selectedDepth.id === 1}
				<h2>あなたの{selectedRelationship[0].text}です。</h2>
			{:else if selectedDepth.id === 2}
				<h2>あなたの{selectedRelationship[0].text}の{selectedRelationship[1].text}です。</h2>
			{:else if selectedDepth.id === 3}
				<h2>あなたの{selectedRelationship[0].text}の{selectedRelationship[1].text}の{selectedRelationship[2].text}です。</h2>
			{/if}
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