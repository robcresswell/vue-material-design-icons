<template>
  <div class="material-design-icon" id="menu-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3,6L 21,6L 21,8L 3,8L 3,6 Z M 3,11L 21,11L 21,13L 3,13L 3,11 Z M 3,16L 21,16L 21,18L 3,18L 3,16 Z "></path>
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
