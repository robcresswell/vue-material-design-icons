<template>
  <div class="material-design-icon" id="signal-icon" role="img" aria-labelledby="signal-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="signal-title">Signal icon</title>
      <path d="M 3,21L 6,21L 6,18L 3,18M 8,21L 11,21L 11,14L 8,14M 13,21L 16,21L 16,9L 13,9M 18,21L 21,21L 21,3L 18,3L 18,21 Z "></path>
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
