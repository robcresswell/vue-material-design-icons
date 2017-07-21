<template>
  <div class="material-design-icon" id="window-minimize-icon" role="img" aria-labelledby="window-minimize-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="window-minimize-title">Window minimize icon</title>
      <path d="M 20,14L 4,14L 4,10L 20,10"></path>
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
