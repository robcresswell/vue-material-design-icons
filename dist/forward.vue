<template>
  <div class="material-design-icon" id="forward-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,8L 12,4L 20,12L 12,20L 12,16L 4,16L 4,8L 12,8 Z "></path>
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
