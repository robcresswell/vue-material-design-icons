<template>
  <div class="material-design-icon" id="bell-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 12,2.00001C 12.5523,2.00001 13,2.44772 13,3L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,16L 21,19L 3,19L 6,16L 6.00001,9.99998C 6.00001,7.02698 8.1623,4.55902 11,4.08294L 11,3C 11,2.44772 11.4477,2.00001 12,2.00001 Z "></path>
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
