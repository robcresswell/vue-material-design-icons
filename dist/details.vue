<template>
  <div class="material-design-icon" id="details-icon" role="img" aria-labelledby="details-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="details-title">Details icon</title>
      <path d="M 6.38,6L 17.63,6L 12,16L 6.38,6 Z M 3,4L 12,20L 21,4L 3,4 Z "></path>
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
