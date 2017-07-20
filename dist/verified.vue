<template>
  <div class="material-design-icon" id="verified-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 10,17L 6,13L 7.41,11.59L 10,14.17L 16.59,7.58L 18,9M 12,1L 3,5L 3,11C 3,16.55 6.84,21.74 12,23C 17.16,21.74 21,16.55 21,11L 21,5L 12,1 Z "></path>
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
