<template>
  <div class="material-design-icon" id="percent-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 7,4C 8.65685,4 10,5.34315 10,7C 10,8.65686 8.65685,10 7,10C 5.34315,10 4,8.65686 4,7C 4,5.34315 5.34315,4 7,4 Z M 17,14C 18.6569,14 20,15.3431 20,17C 20,18.6569 18.6569,20 17,20C 15.3431,20 14,18.6569 14,17C 14,15.3431 15.3431,14 17,14 Z M 20,5.41422L 5.41421,20L 4,18.5858L 18.5858,4L 20,5.41422 Z "></path>
    </svg>
  </div>
</template>

<style>
  .material-design-icon {
    display: inline-flex;
    align-self: center;
    position: relative;
    height: 1em;
    width: 1em;

    > svg {
      height: 1em;
      width: 1em;
      bottom: -0.125em;
      position: absolute;
      fill: currentColor;
    }
  }
</style>
