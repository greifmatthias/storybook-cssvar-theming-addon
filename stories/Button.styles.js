import { css } from "lit";

export const style = [
  css`
    button,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border: none;
    }

    .root {
      border-radius: var(--shapes-button);
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .variant-primary {
      background-color: var(--colors-primary-base);
    }

    .variant-primary:hover {
      background-color: var(--colors-primary-shade20);
    }

    .variant-primary .text {
      color: var(--colors-neutral-neutral00);
    }

    .variant-secondary {
      background-color: var(--colors-secondary-base);
    }

    .variant-secondary:hover {
      background-color: var(--colors-secondary-shade20);
    }

    .variant-secondary .text {
      color: var(--colors-neutral-neutral00);
    }

    .variant-tertiary {
      background-color: var(--colors-tertiary-base);
    }

    .variant-tertiary:hover {
      background-color: var(--colors-tertiary-shade20);
    }

    .variant-outlined {
      background-color: transparent;
      border: 2px solid var(--colors-secondary-base);
      box-sizing: border-box;
    }

    .variant-outlined:hover {
      background-color: var(--colors-neutral-neutral05);
    }

    .variant-outlined .text {
      color: var(--colors-secondary-base);
    }

    .root.size-xs {
      min-width: 95px;
      min-height: 18px;
    }

    .text.size-xs {
      padding: 1px var(--spacings-xs);
    }

    .root.size-sm {
      min-width: 109px;
      min-height: 34px;
    }

    .text.size-sm {
      padding: var(--spacings-xs);
    }

    .root.size-md {
      min-width: 140px;
      min-height: 40px;
    }

    .text.size-md {
      padding: var(--spacings-xs) var(--spacings-sm);
    }

    .root.size-lg {
      min-width: 164px;
      min-height: 48px;
    }

    .text.size-lg {
      padding: var(--spacings-sm) var(--spacings-lg);
    }

    .loading,
    .loading:hover {
      background-color: var(--colors-neutral-neutral05);
    }
  `,
];
