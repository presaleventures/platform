<template>
  <div class="full-rating">

  	<div class="m-b-15">
  		<div class="medium-heading">
  			Review title
  		</div>
  	</div>

  	<div class="m-b-15">
  		<div class="text-content">
  			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatem consectetur consequatur quod, aspernatur praesentium, asperiores suscipit debitis commodi, non omnis deserunt sint. Voluptatem magnam facere, officiis, ab nisi earum, similique rerum at suscipit pariatur architecto ea totam sint esse cupiditate aspernatur. Vitae laudantium non, vel soluta fugiat culpa velit consequuntur a dolorem sequi dolor obcaecati aperiam consectetur corrupti ut incidunt recusandae ullam voluptate enim quae voluptates nulla ipsam porro natus. Excepturi natus, laboriosam ipsa qui similique est tempore. Adipisci, delectus quaerat esse asperiores magnam sapiente sequi numquam, ea ex nam cum nesciunt, officia, sit ducimus atque dolor minima voluptate.
  		</div>
  	</div>

  	<div class="details-info m-b-15">
      <div>
        <span class="gray-subheading-small m-r-5">
          Team
        </span>
        <span class="text-orange">
          9.9
        </span>
      </div>

      <div>
        <span class="gray-subheading-small m-r-5">
          Vision
        </span>
        <span class="text-orange">
          5.2
        </span>
      </div>

      <div>
        <span class="gray-subheading-small m-r-5">
          Product
        </span>
        <span class="text-orange">
          4.5
        </span>
      </div>

      <div>
        <span class="gray-subheading-small m-r-5">
          Token Utility
        </span>
        <span class="text-orange">
          8.9
        </span>
      </div>

      <div class="total">
        <span>Total</span> <span class="text-orange">9.8/10</span>
      </div>  <!-- TOTAL -->
    </div>  <!-- DETAILS INFO -->

    <div class="likes m-b-30">
    	<div class="like">
    		<span>124</span>
    		<button class="transparent-btn">
    			<i class="fa fa-thumbs-up"></i>
    		</button>
    	</div>

    	<div class="dislike">
    		<span>36</span>
    		<button class="transparent-btn">
    			<i class="fa fa-thumbs-down"></i>
    		</button>
    	</div>
    </div>	<!-- LIKES -->

		<div class="comments-block">
			<div class="m-b-10">
				<div class="heading-18">
					Comments
				</div>
			</div>

			<div class="comment-form">
				<div>
					<input type="text" class="presale-input" placeholder="Your comment..">
				</div>

				<div>
					<button class="btn btn-black">
						Add comment
					</button>
				</div>
			</div>	<!-- COMMENT FORM -->

			<div class="submitted-comments">

				<div class="comment">
					<div class="avatar" style="background: url('/default_avatar.png');"></div>
					<div class="comment-content">
						<div class="name">
							Jack Sparrow
						</div>
						<div class="text-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</div>
					</div>	<!-- COMMENT CONTENT -->
				</div>	<!-- COMMENT -->


				<div class="comment">
					<div class="avatar" style="background: url('/default_avatar.png');"></div>
					<div class="comment-content">
						<div class="name">
							Jack Sparrow
						</div>
						<div class="text-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</div>
					</div>	<!-- COMMENT CONTENT -->
				</div>	<!-- COMMENT -->


				<div class="comment">
					<div class="avatar" style="background: url('/default_avatar.png');"></div>
					<div class="comment-content">
						<div class="name">
							Jack Sparrow
						</div>
						<div class="text-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</div>
					</div>	<!-- COMMENT CONTENT -->
				</div>	<!-- COMMENT -->


				<div class="comment">
					<div class="avatar" style="background: url('/default_avatar.png');"></div>
					<div class="comment-content">
						<div class="name">
							Jack Sparrow
						</div>
						<div class="text-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</div>
					</div>	<!-- COMMENT CONTENT -->
				</div>	<!-- COMMENT -->
				
			</div>	<!-- SUBMITTED COMMENTS -->
		</div>	<!-- COMMENTS BLOCK -->

  </div>
</template>

<script>
  export default {
    name: "details"
  }
</script>
