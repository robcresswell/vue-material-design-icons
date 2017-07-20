<template>
  <div class="material-design-icon" id="pentagon-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,2.5L 2,9.8L 5.8,21.5L 18.2,21.5L 22,9.8L 12,2.5 Z "></path>
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
