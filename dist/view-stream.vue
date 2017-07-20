<template>
  <div class="material-design-icon" id="view-stream-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,5L 4,11L 21,11L 21,5M 4,18L 21,18L 21,12L 4,12L 4,18 Z "></path>
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
