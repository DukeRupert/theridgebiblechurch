import { toastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';

export default function triggerToast(event: ToastSettings): void {
	const t: ToastSettings = {
		message: event?.message ?? '👋 Hello and welcome to Skeleton.',
		// Optional: The auto-hide settings
		autohide: event?.autohide ?? true,
		timeout: event?.timeout ?? 3000,
		classes: event?.classes ?? 'bg-warning-500 text-on-warning-token'
		// Optional: Adds a custom action button
		// action: {
		// 	label: 'Greeting',
		// 	response: () => alert('Hello, Skeleton')
		// }
	};
	toastStore.trigger(t);
}

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
