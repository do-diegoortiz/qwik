import { component$, Host, useScopedStyles$ } from '@builder.io/qwik';
import { useContentMenu, useLocation } from '~qwik-city-runtime';
import styles from './menu.css?inline';

export const Menu = component$(
  () => {
    useScopedStyles$(styles);

    const menu = useContentMenu();
    const loc = useLocation();

    return (
      <Host class="menu">
        {menu
          ? menu.items?.map((item) => (
              <>
                <h5>{item.text}</h5>
                <ul>
                  {item.items?.map((item) => (
                    <li>
                      <a
                        data-test-menu-link={item.href}
                        href={item.href}
                        class={{
                          'is-active': loc.pathname === item.href,
                        }}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ))
          : null}
      </Host>
    );
  },
  { tagName: 'aside' }
);
