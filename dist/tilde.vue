<template>
  <div class="material-design-icon" id="tilde-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 2,15C 2,15 2,9 8,9C 12,9 12.5,12.5 15.5,12.5C 19.5,12.5 19.5,9 19.5,9L 22,9C 22,9 22,15 16,15C 12,15 10.5,11.5 8.49998,11.5C 4.49999,11.5001 4.5,15 4.5,15L 2,15"></path>
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
