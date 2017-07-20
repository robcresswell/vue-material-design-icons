<template>
  <div class="material-design-icon" id="open-in-app-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,10L 8,14L 11,14L 11,20L 13,20L 13,14L 16,14M 19,4L 5,4C 3.89,4 3,4.9 3,6L 3,18C 3,19.1 3.89,20 5,20L 9,20L 9,18L 5,18L 5,8L 19,8L 19,18L 15,18L 15,20L 19,20C 20.1,20 21,19.1 21,18L 21,6C 21,4.9 20.11,4 19,4 Z "> 
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
