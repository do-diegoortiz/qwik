import { component$, Host, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '~qwik-city-runtime';
import { Breadcrumbs } from '../../../components/breadcrumbs/breadcrumbs';
import { Menu } from '../../../components/menu/menu';
import styles from './docs.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <Host class="docs" data-test-layout="docs">
      <Menu />
      <section class="docs-content">
        <Breadcrumbs />
        <Slot />
      </section>
    </Host>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `Docs: ${head.title}`,
  };
};
