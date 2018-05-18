<template>
  <div class="token-shard">
    <div class="token-content">
    	<div class="token-shard-heading m-b-10">
	    	<img src="/leaf.png" class="m-r-5">
	    	<span class="heading-18">Bitfinex</span>
	    </div>	<!-- TOKEN SHARD HEADING -->

			<div class="row">
				<div class="col-6">
					<div>
						<div class="gray-subheading">
							Pair
						</div>
						<div class="heading-15">
							ENT/BTC
						</div>
					</div>
				</div>
				<div class="col-6">
					<div>
						<div class="gray-subheading">
							Price
						</div>
						<div class="heading-15">
							<i class="fa fa-btc m-r-5"></i>
							0.00011394
						</div>
					</div>
				</div>
			</div>	<!-- ROW -->

    </div>	<!-- TOKEN CONTENT -->
    <div class="token-chart">
    	<img src="/chart.png">
    </div>	<!-- TOKEN CHART -->
  </div>	<!-- TOKEN SHARD -->
</template>

<script>
  export default {
    name: 'token-shard',
  }
</script>