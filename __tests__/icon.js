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

  it('accepts a "title" property', () => {
    expect(icon.attributes()['aria-label']).toEqual('Android icon');

    icon.setProps({ title: 'foo' });

    expect(icon.attributes()['aria-label']).toEqual('foo');
  });

  it('accepts a "decorative" property', () => {
    expect(icon.attributes()['aria-hidden']).toBeFalsy();

    icon.setProps({ decorative: true });

    expect(icon.attributes()['aria-hidden']).toBeTruthy();
  });

  it('accepts a "fillColor" property', () => {
    const svg = icon.find('.material-design-icon__svg');

    expect(svg.attributes()['fill']).toEqual('currentColor');

    icon.setProps({ fillColor: '#FF0000' });

    expect(svg.attributes()['fill']).toEqual('#FF0000');
  });

  it('renders an icon', () => {
    expect(icon).toMatchSnapshot();
  });

  it('listens to a click event', () => {
    const clickListener = jest.fn()
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
    })

    iconWithEvent.trigger('click')
    expect(clickListener).not.toBeCalled()
  });
});
