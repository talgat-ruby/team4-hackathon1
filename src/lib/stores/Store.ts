import { writable } from 'svelte/store';

export type Plan = 'arcade' | 'advanced' | 'pro';
export type billing = boolean;

export interface Subscription {
	plan: Plan;
	price: number;
	// isMonthly: boolean;
}

const initialSubscription: Subscription = {
	plan: 'arcade',
	price: 9
	// isMonthly: true
};

export interface Billing {
	billing: boolean;
}

const initialBilling: Billing = {
	billing: false
};

// константа и функция с помощью которой можно изменять данные
export const subscriptionStore = writable(initialSubscription);

export function updatePlan(newplan: Plan, price) {
	subscriptionStore.update((storedata) => ({ ...storedata, plan: newplan, price }));
}

// позаказать в консоли применяется ли изменение
subscriptionStore.subscribe((storedata) => {
	console.log('storedata', storedata);
});

export const billingstore = writable(initialBilling);

// позаказать в консоли применяется ли изменение
billingstore.subscribe((billingstore) => {
	console.log('billing Store', billingstore);
});

export function updateBilling() {
	billingstore.update((billingstore) => ({ ...billingstore, billing: !billingstore.billing }));
}

// export function toggleBilling() {
// 	billngStore.update((billngStore) => ({
// 		...billingstore,
// 		billing: !billngStore.billing
// 	}));
// }

// export function toggleSubscriptionType() {
// 	subscriptionStore.update((storedata) => ({
// 		...storedata,
// 		isMonthly: !storedata.isMonthly
// 	}));
// }
