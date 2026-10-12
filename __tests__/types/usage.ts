import AndroidIcon from 'vue-material-design-icons/Android.vue';

type Props = InstanceType<typeof AndroidIcon>['$props'];

export const noProps: Props = {};

export const allProps: Props = {
  title: 'Android',
  fillColor: '#FF0000',
  size: 48,
  onClick: (event: MouseEvent) => event.preventDefault(),
};

// @ts-expect-error `size` must be a number
export const badSize: Props = { size: 'big' };

// @ts-expect-error `title` must be a string
export const badTitle: Props = { title: 1 };
