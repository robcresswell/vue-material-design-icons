<template>
  <div class="material-design-icon" id="beer-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,2L 19,2L 17,22L 6,22L 4,2 Z M 6.2,4L 7.8,20L 8.8,20L 7.43393,6.33926C 8.47577,6.01178 9.89149,5.89149 11,7C 12.5573,8.5573 15.3272,7.68942 16.4771,7.22891L 16.8,4L 6.2,4 Z "></path>
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
