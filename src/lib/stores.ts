import { type Writable, writable } from 'svelte/store';

export const mobileMenu: Writable<boolean> = writable(false);
