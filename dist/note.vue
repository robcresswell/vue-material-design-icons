<template>
  <div class="material-design-icon" id="note-icon" role="img" aria-labelledby="note-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="note-title">Note icon</title>
      <path d="M 13.9991,9.99831L 13.9991,4.49831L 19.4991,9.99831M 4.99915,2.99831C 3.89413,2.99831 3.00916,3.89431 3.00916,4.99831L 2.99915,18.9983C 2.99915,20.1023 3.88513,20.9983 4.98914,20.9983L 18.9991,20.9983C 20.1031,20.9983 20.9991,20.1023 20.9991,18.9983L 20.9991,8.99831L 14.9991,2.99831L 4.99915,2.99831 Z "></path>
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
