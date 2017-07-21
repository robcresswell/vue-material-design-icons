<template>
  <div class="material-design-icon" id="rhombus-icon" role="img" aria-labelledby="rhombus-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="rhombus-title">Rhombus icon</title>
      <path d="M 21.5,10.8L 13.2,2.5C 12.5,1.8 11.5,1.8 10.8,2.5L 2.5,10.8C 1.8,11.5 1.8,12.5 2.5,13.2L 10.8,21.5C 11.5,22.2 12.5,22.2 13.2,21.5L 21.5,13.2C 22.1,12.5 22.1,11.5 21.5,10.8 Z "></path>
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
