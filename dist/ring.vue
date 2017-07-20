<template>
  <div class="material-design-icon" id="ring-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,10L 8,4.4L 9.6,2L 14.4,2L 16,4.4L 12,10 Z M 15.5,6.8L 14.3,8.5C 16.5,9.4 18,11.5 18,14C 18,17.3 15.3,20 12,20C 8.7,20 6,17.3 6,14C 6,11.5 7.5,9.4 9.7,8.5L 8.5,6.8C 5.8,8.1 4,10.8 4,14C 4,18.4 7.6,22 12,22C 16.4,22 20,18.4 20,14C 20,10.8 18.2,8.1 15.5,6.8 Z "> 
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
