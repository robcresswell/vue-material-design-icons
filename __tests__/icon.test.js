import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import AndroidIcon from '../dist/Android.vue';

describe('Icon', () => {
  it('accepts a "title" property', async () => {
    const icon = mount(AndroidIcon);

    expect(icon.attributes('aria-label')).toBeUndefined();
    expect(icon.attributes('aria-hidden')).toEqual('true');
    expect(icon.find('title').exists()).toBe(false);

    await icon.setProps({ title: 'foo' });

    expect(icon.attributes('aria-label')).toEqual('foo');
    expect(icon.attributes('aria-hidden')).toBeUndefined();
    expect(icon.find('svg > title').text()).toEqual('foo');
  });

  it('accepts a "fillColor" property', async () => {
    const icon = mount(AndroidIcon);
    const svg = icon.find('.material-design-icon__svg');

    expect(svg.attributes('fill')).toEqual('currentColor');

    await icon.setProps({ fillColor: '#FF0000' });

    expect(svg.attributes('fill')).toEqual('#FF0000');
  });

  it('accepts a "size" property', async () => {
    const icon = mount(AndroidIcon);
    const svg = icon.find('.material-design-icon__svg');

    expect(svg.attributes('width')).toEqual('24');

    await icon.setProps({ size: 48 });

    expect(svg.attributes('width')).toEqual('48');
    expect(svg.attributes('height')).toEqual('48');
  });

  it('passes through attributes', () => {
    const icon = mount(AndroidIcon, {
      attrs: { class: 'icon-2x', 'data-test': 'bar' },
    });

    expect(icon.classes()).toContain('icon-2x');
    expect(icon.classes()).toContain('android-icon');
    expect(icon.attributes('data-test')).toEqual('bar');
  });

  it('renders an icon', () => {
    expect(mount(AndroidIcon).html()).toMatchSnapshot();
  });

  it('emits a single click event', async () => {
    const onClick = vi.fn();
    const icon = mount(AndroidIcon, { attrs: { onClick } });

    await icon.trigger('click');

    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick.mock.calls[0][0]).toBeInstanceOf(MouseEvent);
  });
});
