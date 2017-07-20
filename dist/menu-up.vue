<template>
  <div class="material-design-icon" id="menu-up-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 7,15L 12,10L 17,15L 7,15 Z "></path>
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
