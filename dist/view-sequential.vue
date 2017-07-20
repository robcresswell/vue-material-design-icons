<template>
  <div class="material-design-icon" id="view-sequential-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3,4L 21,4L 21,8L 3,8L 3,4 Z M 3,10L 21,10L 21,14L 3,14L 3,10 Z M 3,16L 21,16L 21,20L 3,20L 3,16 Z "> 
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
