<template>
  <div class="material-design-icon" id="book-open-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12.9975,12.0025L 20,12.0025L 20,13.5012L 12.9975,13.5012M 12.9975,9.5025L 20,9.5025L 20,11.0012L 12.9975,11.0012M 12.9975,14.5025L 20,14.5025L 20,16.0012L 12.9975,16.0012M 21.0013,3.99875L 2.9975,3.99875C 1.9,3.99875 1.00125,4.9025 1.00125,6.00125L 1.00125,18.9988C 1.00125,20.0975 1.9,21.0012 2.9975,21.0012L 21.0013,21.0012C 22.1,21.0012 22.9975,20.0975 22.9975,18.9988L 22.9975,6.00125C 22.9975,4.9025 22.1,3.99875 21.0013,3.99875 Z M 21.0013,18.9988L 12.0025,18.9988L 12.0025,6.00125L 21.0013,6.00125"></path>
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
