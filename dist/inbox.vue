<template>
  <div class="material-design-icon" id="inbox-icon" role="img" aria-labelledby="inbox-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="inbox-title">Inbox icon</title>
      <path d="M 19,15L 15,15C 15,16.66 13.66,18 12,18C 10.34,18 9,16.66 9,15L 4.99,15L 4.99,5L 19,5M 19,3L 4.99,3C 3.89,3 3.01,3.9 3.01,5L 3,19C 3,20.1 3.89,21 4.99,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z "></path>
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
