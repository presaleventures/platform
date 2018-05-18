<template>
  <div class="countdown">
    <span v-if="days > 0">
      <span class="digit">{{ days }}</span>
      <span class="text">{{ days > 1 ? ' days ' : ' day ' }}</span>
    </span>
    <span class="digit">{{ hours | twoDigits }}</span> :
    <span class="digit">{{ minutes | twoDigits }}</span> :
    <span class="digit">{{ seconds | twoDigits }}</span>
  </div>
</template>

<script>
  export default {
    name: 'countdown',
    props: {
      end: {
        type: [String, Date]
      },
      stop: {
        type: Boolean
      }
    },
    data() {
      return {
        interval: null,
        now: Math.trunc((new Date()).getTime() / 1000),
        date: null,
        diff: 0
      }
    },
    created() {
      this.setDate()
    },
    computed: {
      seconds() {
        return Math.trunc(this.diff) % 60
      },
      minutes() {
        return Math.trunc(this.diff / 60) % 60
      },
      hours() {
        return Math.trunc(this.diff / 60 / 60) % 24
      },
      days() {
        return Math.trunc(this.diff / 60 / 60 / 24)
      },
    },
    watch: {
      now(value) {
        this.diff = this.date - this.now;
        if(this.diff <= 0 || this.stop){
          this.diff = 0;
          // Remove interval
          clearInterval(this.interval);
        }
      },
      end(){
        this.setDate()
      }
    },
    filters: {
      twoDigits(value) {
        if ( value.toString().length <= 1 ) {
          return '0'+value.toString()
        }
        return value.toString()
      }
    },
    destroyed() {
      clearInterval(this.interval);
    },
    methods: {
      setDate(){

        if (!this.end) {
          this.date = Math.trunc((new Date()).getTime() / 1000)
        } else {
          let endTime = this.end;
          this.date = Math.trunc(Date.parse(endTime) / 1000)
        }
        if (!this.date) {
          this.date = Math.trunc((new Date()).getTime() / 1000)
        }
        if(this.interval){
          clearInterval(this.interval)
          this.interval = null
        }
        this.interval = setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
      }
    }
  }
</script>
