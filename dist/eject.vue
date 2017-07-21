<template>
  <div class="material-design-icon" id="eject-icon" role="img" aria-labelledby="eject-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="eject-title">Eject icon</title>
      <path d="M 12,5L 5.33,15L 18.67,15M 5,17L 19,17L 19,19L 5,19L 5,17 Z "></path>
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
