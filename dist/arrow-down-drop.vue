<template>
  <div class="material-design-icon" id="arrow-down-drop-icon" role="img" aria-labelledby="arrow-down-drop-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="arrow-down-drop-title">Arrow down drop icon</title>
      <path d="M 7,10L 12,15L 17,10L 7,10 Z "></path>
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
