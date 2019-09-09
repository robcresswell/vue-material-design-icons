import { shallowMount, mount } from '@vue/test-utils';
import AndroidIcon from '../dist/Android';

describe('Icon', () => {
  let icon;

  beforeEach(() => {
    icon = shallowMount(AndroidIcon);
  });

  it('accepts a "title" property', () => {
    expect(icon.vm.title).toEqual('Android icon');
    expect(icon.attributes()['aria-label']).toEqual('Android icon');

    icon.setProps({ title: 'foo' });

    expect(icon.vm.title).toEqual('foo');
    expect(icon.attributes()['aria-label']).toEqual('foo');
  });

  it('accepts a "decorative" property', () => {
    expect(icon.vm.decorative).toBe(false);
    expect(icon.attributes()['aria-hidden']).toBeFalsy();

    icon.setProps({ decorative: true });

    expect(icon.vm.decorative).toBe(true);
    expect(icon.attributes()['aria-hidden']).toBeTruthy();
  });

  it('accepts a "fillColor" property', () => {
    const svg = icon.find('.material-design-icon__svg');

    expect(icon.vm.fillColor).toBe('currentColor');
    expect(svg.attributes()['fill']).toEqual('currentColor');

    icon.setProps({ fillColor: '#FF0000' });

    expect(icon.vm.fillColor).toBe('#FF0000');
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
    expect(clickListener).toBeCalled()
  });
});
