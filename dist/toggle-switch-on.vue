<template>
  <div class="material-design-icon" id="toggle-switch-on-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 17,7.00008C 19.7615,7.00008 22,9.23861 22,12.0001C 22,14.7615 19.7614,17.0001 17,17.0001C 14.2385,17.0001 12,14.7615 12,12.0001C 12,9.23861 14.2384,7.00008 17,7.00008 Z M 3.99992,14.0002C 2.89534,14.0002 1.99992,13.1047 1.99992,12.0002C 1.99992,10.8956 2.8953,10.0002 3.99988,10.0002L 9.99988,10.0002L 9.99988,14.0002L 3.99992,14.0002 Z "></path>
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
