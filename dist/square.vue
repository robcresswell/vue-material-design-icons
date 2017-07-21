<template>
  <div class="material-design-icon" id="square-icon" role="img" aria-labelledby="square-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="square-title">Square icon</title>
      <path d="M 3,3L 3,21L 21,21L 21,3"></path>
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
