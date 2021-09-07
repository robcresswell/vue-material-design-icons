import { mount } from '@vue/test-utils';
import AndroidIcon from '../dist/Android';

const WrappedIcon = {
  components: {
    AndroidIcon,
  },
  render(h) {
    return h(AndroidIcon, {
      attrs: this.$attrs,
      listeners: this.$listeners,
    });
  },
};

describe('Icon', () => {
  let icon;

  beforeEach(() => {
    icon = mount(WrappedIcon);
  });

  it('accepts a "title" property', async () => {
    expect(icon.attributes()['aria-label']).toEqual('Android icon');

    await icon.setProps({ title: 'foo' });

    expect(icon.attributes()['aria-label']).toEqual('foo');
  });

  it('accepts a "decorative" property', async () => {
    expect(icon.attributes()['aria-hidden']).toBeFalsy();

    await icon.setProps({ decorative: true });

    expect(icon.attributes()['aria-hidden']).toBeTruthy();
  });

  it('accepts a "fillColor" property', async () => {
    const svg = icon.find('.material-design-icon__svg');

    expect(svg.attributes()['fill']).toEqual('currentColor');

    await icon.setProps({ fillColor: '#FF0000' });

    expect(svg.attributes()['fill']).toEqual('#FF0000');
  });

  it('renders an icon', () => {
    expect(icon).toMatchSnapshot();
  });

  /* @FIXME
  it('listens to a click event', async () => {
    const clickListener = jest.fn();
    const iconWithEvent = mount({
      name: 'IconWithEvent',
      components: { AndroidIcon },
      template: `
        <AndroidIcon
          @click="clickListener"
        />
      `,
      methods: {
        clickListener,
      },
    });

    await iconWithEvent.trigger('click');
    expect(clickListener).toBeCalled();
  });
  */
});
