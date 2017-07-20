<template>
  <div class="material-design-icon" id="view-carousel-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 18,6L 18,17L 22,17L 22,6M 2,17L 6,17L 6,6L 2,6M 7,19L 17,19L 17,4L 7,4L 7,19 Z "></path>
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
