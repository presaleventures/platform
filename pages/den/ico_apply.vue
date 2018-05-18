<template>
  <div>
    <div class="left">
      <div class="left-content">

        <div class="normalize">
          
          <div class="ico-apply-padded">
            
            <div class="m-b-15">
              <div class="medium-heading">
                Your submited project
              </div>
            </div>

            <div class="m-b-15">
              <div class="text-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reprehenderit ea laborum laudantium minus nesciunt.
                <a href="#" class="link link-underline">
                  Rating Methodology
                </a>
              </div>
            </div>

            <div class="apply-list m-b-30">

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    Status
                  </div>
                </div>
                  
                <div class="item-status">
                  <span class="success">
                    Verified
                    <i class="fa fa-check"></i>
                  </span>
                </div>
              </div>  <!-- APPLY ITEM -->

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    KYC verification
                  </div>
                </div>
                  
                <div class="item-status">
                  <span class="warning">
                    Pending
                    <i class="fa fa-clock-o"></i>
                  </span>
                </div>
              </div>  <!-- APPLY ITEM -->

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    Team members
                  </div>
                </div>
                  
                <div class="item-status">
                  <span class="warning">
                    Not added
                    <i class="fa fa-clock-o"></i>
                  </span>
                </div>
              </div>  <!-- APPLY ITEM -->

              <div class="apply-item">
                <div class="item-name">
                  <div class="regular-text">
                    Road Map 
                  </div>
                </div>
                  
                <div class="item-status">
                  <a href="#" class=" link-underline danger">
                    Not verified
                    <i class="fa fa-close"></i>
                  </a>
                </div>
              </div>  <!-- APPLY ITEM -->

            </div>  <!-- APPLY LIST -->

            <div class="flex-row-end-center">
              <span class="danger" style="margin-right: 15px;">
                *approve all items before
              </span>
              <button class="btn btn-darkgray auto-width">
                Apply for an Expert
              </button> 
            </div>

          </div>  <!-- ICO APPLY PADDED -->

        </div>  <!-- NORMALIZE -->

      </div>  <!-- LEFT CONTENT BLOCK -->
    </div>  <!-- LEFT -->
    <div class="right" style="align-items: flex-start;">
      <div class="right-content">

        <div class="navigation-block">
          <div class="right-menu">
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Baked</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">Bookmark</a>
            </div>
            <div class="menu-link-block">
              <a href="#" class="orange-underline-link">My ICO's</a>
            </div>
          </div>
        </div>

        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>
        <campaign-shard/>

      </div>  <!-- RIGHT CONTENT BLOCK -->
    </div>  <!-- RIGHT -->
  </div>

</template>

<script>

  export default {
    head: {
      title:'Apply ICO'
    },
  }

</script>
