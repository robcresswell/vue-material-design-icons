<template>
  <div class="material-design-icon" id="delete-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 19,4L 15.5,4L 14.5,3L 9.5,3L 8.5,4L 5,4L 5,6L 19,6M 6,19C 6,20.1 6.9,21 8,21L 16,21C 17.1,21 18,20.1 18,19L 18,7L 6,7L 6,19 Z "></path>
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
