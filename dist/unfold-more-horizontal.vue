<template>
  <div class="material-design-icon" id="unfold-more-horizontal-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,18.17L 8.83,15L 7.42,16.41L 12,21L 16.59,16.41L 15.17,15M 12,5.83L 15.17,9L 16.58,7.59L 12,3L 7.41,7.59L 8.83,9L 12,5.83 Z "></path>
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
