<script lang="ts">
	import { Alert } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import type { Church } from '$lib/types/sanitySchema';
	import type { ActionData } from '../../routes/$types';
	import { fly } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let data: Church;
	export let form: ActionData;
	$: console.log(form);

	let visible = true;

	function createTel(str: string): string {
		let tel = str.replace(/\D+/g, '');
		let href = 'tel:1-' + tel.slice(0, 3) + '-' + tel.slice(3, 6) + '-' + tel.slice(6);
		return href;
	}
</script>

<div class="relative w-full">
	<div class="absolute inset-0">
		<div class="absolute inset-y-0 left-0 w-1/2 " />
	</div>
	<div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
		<div class="py-16  lg:col-span-2  lg:py-24 ">
			<div class="mx-auto max-w-lg">
				<h2>Come join us!</h2>
				<p>We meet weekly and you are always welcome.</p>
				<dl class="mt-8 text-base ">
					<div class="mt-6">
						<dt class="sr-only">Postal address</dt>
						<dd class="flex">
							<svg
								class="flex-shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/></svg
							><a href="https://goo.gl/maps/atKvzA6CZgkVAtTP8">
								<span class="ml-3">10609 234th St E, Graham, WA 98838</span>
							</a>
						</dd>
					</div>
					<div class="mt-6">
						<dt class="sr-only">Phone number</dt>
						<dd class="flex">
							<!-- Heroicon name: outline/phone -->
							<svg
								class="h-6 w-6 flex-shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
							<a href={createTel(data.phone)} class="ml-3">{data.phone}</a>
						</dd>
					</div>
					{#if data.services}
						<div class="mt-6 text-base">
							<dt class="sr-only">Service Times</dt>
							<dd class="flex">
								<svg
									class="flex-shrink-0 h-6 w-6"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									><path stroke="none" d="M0 0h24v24H0z" /><line
										x1="3"
										y1="21"
										x2="21"
										y2="21"
									/><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><line
										x1="10"
										y1="5"
										x2="14"
										y2="5"
									/><line x1="12" y1="3" x2="12" y2="8" /><path
										d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7"
									/></svg
								>
								<div class="ml-3">
									{#each data.services as { day, time }}
										<p>{day} - {time}</p>
									{/each}
								</div>
							</dd>
						</div>
					{/if}
				</dl>
			</div>
		</div>
		<div id="contact-us" class="py-16 lg:col-span-3 lg:py-24 xl:pl-12">
			<div class="mx-auto max-w-lg lg:max-w-none">
				<form action="" method="POST" class="grid grid-cols-1 gap-y-6" use:enhance>
					<div>
						<label for="name" class="sr-only">Full name</label>
						<input
							type="text"
							name="name"
							id="name"
							autocomplete="name"
							class="block w-full rounded-md py-3 px-4"
							placeholder="Full name"
							required
						/>
					</div>
					<div>
						<label for="email" class="sr-only">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="block w-full rounded-md py-3 px-4"
							placeholder="Email"
							required
						/>
					</div>
					<div>
						<label for="phone" class="sr-only">Phone</label>
						<input
							type="text"
							name="phone"
							id="phone"
							autocomplete="tel"
							class="block w-full rounded-md py-3 px-4"
							placeholder="Phone"
						/>
					</div>
					<div>
						<label for="message" class="sr-only">Message</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							class="block w-full rounded-md py-3 px-4"
							placeholder="Message"
							required
						/>
					</div>
					<div>
						<button type="submit" class="btn btn-filled-primary">Submit</button>
					</div>
				</form>
				{#if form?.error}
					<ul class="mt-4 text-on-error-token">
						{#each form.errors as error, i}
							<div
								class="mt-4"
								in:fly={{ y: 100 * i, delay: 150 * i, duration: 500, easing: quadOut }}
							>
								<Alert {visible}><span>{error.message}</span></Alert>
							</div>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</div>
</div>
