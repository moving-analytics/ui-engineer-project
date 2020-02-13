<template>
  <div class="flex justify-center items-center rounded-lg overflow-hidden">
    <div class="px-6 py-4">
      <h1 class="text-2xl font-semibold text-gray-600 text-center uppercase">{{data.type}}</h1>
      <div class="flex justify-center items-center -mb-10">
        <transition name="bounce" appear>
          <svg class="gauge text-center" height="150" width="200" viewBox="62 0 75 150">
            <path
              fill="none"
              d="M10 100a90 90 0 1 1 180 0"
              stroke="#dde5f6"
              stroke-linecap="round"
            />
            <path
              fill="none"
              class="filled"
              d="M10 100a90 90 0 1 1 180 0"
              :stroke="color"
              stroke-dasharray="284"
              :stroke-dashoffset="dashOffset"
              stroke-linecap="round"
              :key="dashOffset"
            />
          </svg>
        </transition>
        <div
          font-size="10rem"
          class="absolute text-4xl font-bold text-gray-600 text-center"
        >{{data.value}}</div>
      </div>
      <div class="flex justify-between">
        <span class="pl-1 text-lg font-bold text-gray-600">{{data.min}}</span>
        <span class="mr-0 text-lg font-bold text-gray-600">{{data.max}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      dashOffset: 284,
      color: '#71f4b3'
    };
  },
  created() {
    var percentage = (this.data.value / this.data.max) * 100;

    if (percentage <= 30) {
      this.color = '#71f4b3';
    } else if (percentage >= 30 && percentage <= 70) {
      this.color = '#f2b031';
    } else if (percentage >= 71 && percentage <= 100) {
      this.color = '#e74e2e';
    }
    this.dashOffset = 284 - (this.data.value / this.data.max) * 284;
  }
};
</script>


<style>
svg path {
  stroke-width: 10px;
  stroke-miterlimit: round;
  animation: dash 5s linear forwards;
  transition: stroke-dashoffset 850ms ease-in-out;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>