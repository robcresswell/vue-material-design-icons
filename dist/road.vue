<template>
  <div class="material-design-icon" id="road-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 11,16L 13,16L 13,20L 11,20M 11,10L 13,10L 13,14L 11,14M 11,4L 13,4L 13,8L 11,8M 4,22L 20,22L 20,2L 4,2L 4,22 Z "></path>
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
