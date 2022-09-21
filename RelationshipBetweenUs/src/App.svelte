<script>
	let depth = [
		{id: 0, text: "0"},
		{id: 1, text: "1"},
		{id: 2, text: "2"},
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
	];

	// #region judgeRelation
	let ansRelationship = "";
	$: switch(selectedRelationship[0].id){
		// 父
		case 0:
			switch(selectedRelationship[1].id){
				// 父の父
				case 0:
					ansRelationship = "の祖父";
					break;
				// 父の母
				case 1:
					ansRelationship = "の祖母";
					break;
				// 父の兄
				case 2:
					ansRelationship = "の伯父";
					break;
				// 父の姉
				case 3:
					ansRelationship = "の伯母";
					break;
				// 父の弟
				case 4:
					ansRelationship = "の叔父";
					break;
				// 父の妹
				case 5:
					ansRelationship = "の叔母";
					break;
				// 父の息子
				case 6:
					ansRelationship = "かもしれない";
					break;
				// 父の娘
				case 7:
					ansRelationship = "かもしれない";
					break;
				// 父の配偶者
				case 8:
					ansRelationship = "の母";
					break;
			}
			break;
		// 母
		case 1:
			switch(selectedRelationship[1].id){
				// 母の父
				case 0:
					ansRelationship = "の祖父";
					break;
				// 母の母
				case 1:
					ansRelationship = "の祖母";
					break;
				// 母の兄
				case 2:
					ansRelationship = "の伯父";
					break;
				// 母の姉
				case 3:
					ansRelationship = "の伯母";
					break;
				// 母の弟
				case 4:
					ansRelationship = "の叔父";
					break;
				// 母の妹
				case 5:
					ansRelationship = "の叔母";
					break;
				// 母の息子
				case 6:
					ansRelationship = "かもしれない";
					break;
				// 母の娘
				case 7:
					ansRelationship = "かもしれない";
					break;
				// 母の配偶者
				case 8:
					ansRelationship = "の父";
					break;
			}
			break;
		// 兄
		case 2:
			switch(selectedRelationship[1].id){
				// 兄の父
				case 0:
					ansRelationship = "の父";
					break;
				// 兄の母
				case 1:
					ansRelationship = "の母";
					break;
				// 兄の兄
				case 2:
					ansRelationship = "の兄";
					break;
				// 兄の姉
				case 3:
					ansRelationship = "の姉";
					break;
				// 兄の弟
				case 4:
					ansRelationship = "かもしれない";
					break;
				// 兄の妹
				case 5:
					ansRelationship = "かもしれない";
					break;
				// 兄の息子
				case 6:
					ansRelationship = "の甥";
					break;
				// 兄の娘
				case 7:
					ansRelationship = "の姪";
					break;
				// 兄の配偶者
				case 8:
					ansRelationship = "の嫂";
					break;
			}
			break;
		// 姉
		case 3:
			switch(selectedRelationship[1].id){
				// 姉の父
				case 0:
					ansRelationship = "の父";
					break;
				// 姉の母
				case 1:
					ansRelationship = "の母";
					break;
				// 姉の兄
				case 2:
					ansRelationship = "の兄";
					break;
				// 姉の姉
				case 3:
					ansRelationship = "の姉";
					break;
				// 姉の弟
				case 4:
					ansRelationship = "かもしれない";
					break;
				// 姉の妹
				case 5:
					ansRelationship = "かもしれない";
					break;
				// 姉の息子
				case 6:
					ansRelationship = "の甥";
					break;
				// 姉の娘
				case 7:
					ansRelationship = "の姪";
					break;
				// 姉の配偶者
				case 8:
					ansRelationship = "の姉婿";
			}
			break;
		// 弟
		case 4:
			switch(selectedRelationship[1].id){
				// 弟の父
				case 0:
					ansRelationship = "の父";
					break;
				// 弟の母
				case 1:
					ansRelationship = "の母";
					break;
				// 弟の兄
				case 2:
					ansRelationship = "かもしれない";
					break;
				// 弟の姉
				case 3:
					ansRelationship = "かもしれない";
					break;
				// 弟の弟
				case 4:
					ansRelationship = "の弟";
					break;
				// 弟の妹
				case 5:
					ansRelationship = "の妹";
					break;
				// 弟の息子
				case 6:
					ansRelationship = "の甥";
					break;
				// 弟の娘
				case 7:
					ansRelationship = "の姪";
					break;
				// 弟の配偶者
				case 8:
					ansRelationship = "の義妹";
			}
			break;
		// 妹
		case 5:
			switch(selectedRelationship[1].id){
				// 妹の父
				case 0:
					ansRelationship = "の父";
					break;
				// 妹の母
				case 1:
					ansRelationship = "の母";
					break;
				// 妹の兄
				case 2:
					ansRelationship = "かもしれない";
					break;
				// 妹の姉
				case 3:
					ansRelationship = "かもしれない";
					break;
				// 妹の弟
				case 4:
					ansRelationship = "の弟";
					break;
				// 妹の妹
				case 5:
					ansRelationship = "の妹";
					break;
				// 妹の息子
				case 6:
					ansRelationship = "の甥";
					break;
				// 妹の娘
				case 7:
					ansRelationship = "の姪";
					break;
				// 妹の配偶者
				case 8:
					ansRelationship = "の義弟";
			}
			break;
		// 息子
		case 6:
			switch(selectedRelationship[1].id){
				// 息子の父
				case 0:
					ansRelationship = "かもしれない";
					break;
				// 息子の母
				case 1:
					ansRelationship = "かもしれない";
					break;
				// 息子の兄
				case 2:
					ansRelationship = "の別の息子";
					break;
				// 息子の姉
				case 3:
					ansRelationship = "の別の娘";
					break;
				// 息子の弟
				case 4:
					ansRelationship = "の別の息子";
					break;
				// 息子の妹
				case 5:
					ansRelationship = "の別の娘";
					break;
				// 息子の息子
				case 6:
					ansRelationship = "の孫";
					break;
				// 息子の娘
				case 7:
					ansRelationship = "の孫";
					break;
				// 息子の配偶者
				case 8:
					ansRelationship = "の嫁";
			}
			break;
		// 娘
		case 7:
			switch(selectedRelationship[1].id){
				// 娘の父
				case 0:
					ansRelationship = "かもしれない";
					break;
				// 娘の母
				case 1:
					ansRelationship = "かもしれない";
					break;
				// 娘の兄
				case 2:
					ansRelationship = "の別の息子";
					break;
				// 娘の姉
				case 3:
					ansRelationship = "の別の娘";
					break;
				// 娘の弟
				case 4:
					ansRelationship = "の別の息子";
					break;
				// 娘の妹
				case 5:
					ansRelationship = "の別の娘";
					break;
				// 娘の息子
				case 6:
					ansRelationship = "の孫";
					break;
				// 娘の娘
				case 7:
					ansRelationship = "の孫";
					break;
				// 娘の配偶者
				case 8:
					ansRelationship = "の婿";
			}
			break;
		// 配偶者
		case 8:
			switch(selectedRelationship[1].id){
				// 配偶者の父
				case 0:
					ansRelationship = "の義父";
					break;
				// 配偶者の母
				case 1:
					ansRelationship = "の義母";
					break;
				// 配偶者の兄
				case 2:
					ansRelationship = "の義兄";
					break;
				// 配偶者の姉
				case 3:
					ansRelationship = "の義姉";
					break;
				// 配偶者の弟
				case 4:
					ansRelationship = "の義弟";
					break;
				// 配偶者の妹
				case 5:
					ansRelationship = "の義妹";
					break;
				// 配偶者の息子
				case 6:
					ansRelationship = "の息子";
					break;
				// 配偶者の娘
				case 7:
					ansRelationship = "の娘";
					break;
				// 配偶者の配偶者
				case 8:
					ansRelationship = "";
			}
			break;
	}
	//#endregion

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

	let text = "の";

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
				<h2>あなた{ansRelationship}です。</h2>
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