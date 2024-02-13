import { writable } from 'svelte/store';

type Plan = {
	id: 'arcade' | 'advanced' | 'pro';
	name: string;
	monthlyPrice: number;
	yearlyPrice: number;
};

type Subscription = {
	plan: Plan;
	billing: 'monthly' | 'yearly';
	addon: Addon;
};

const plans: Plan[] = [
	{ id: 'arcade', name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
	{ id: 'advanced', name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
	{ id: 'pro', name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 }
];

type Addon = {
	id: 'online' | 'storage' | 'customprofile';
	name: string;
	monthlyPrice: number;
	yearlyPrice: number;
};

const addons: Addon[] = [
	{ id: 'online', name: 'Online service', monthlyPrice: 1, yearlyPrice: 10 },
	{ id: 'storage', name: 'Larger storage', monthlyPrice: 2, yearlyPrice: 20 },
	{ id: 'customprofile', name: 'Custom profile', monthlyPrice: 2, yearlyPrice: 20 }
];

const Value: Subscription = {
	plan: plans[0],
	billing: 'monthly',
	addon: addons[0]
};

export const createPlanStore = () => {
	let initialPlan = Value;

	const { subscribe, update } = writable<Subscription>(initialPlan);

	const changePlan = (plan: Plan) =>
		update((val) => {
			const newSubscription = { plan, billing: val.billing };

			return newSubscription;
		});

	const changeBilling = (billing: 'monthly' | 'yearly') => {
		update((value) => {
			const newBilling = { plan: value.plan, billing };
			return newBilling;
		});
	};

	const changeAddon = (addon: Addon) => {
		update((val2) => {
			const newAddon = { addon };
			return newAddon;
		});
	};

	return {
		subscribe,
		changePlan,
		changeBilling,
		changeAddon
	};
};

const subscription = createPlanStore();

export { plans, subscription, addons };
