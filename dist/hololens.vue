<template>
  <div class="material-design-icon" id="hololens-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,8C 12,8 22,8 22,11C 22,11 22.0854,14.3618 21.75,14.25C 21,11 12,11 12,11C 12,11 3,11 2.25001,14.25C 1.91459,14.3618 2,11 1.99999,11C 1.99999,8 12,8 12,8 Z M 12,12C 20,12 20.75,14.25 20.75,14.25C 19.75,17.25 19,18 15,18C 12,18 13,16.5 12,16.5C 11,16.5 12,18 8.99999,18C 5,18 4.24999,17.25 3.25,14.25C 3.25,14.25 4,12 12,12 Z "> 
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
