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
};

const plans: Plan[] = [
	{ id: 'arcade', name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
	{ id: 'advanced', name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
	{ id: 'pro', name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 }
];

const Value: Subscription = {
	plan: plans[0],
	billing: 'monthly'
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
	return {
		subscribe,
		changePlan,
		changeBilling
	};
};

const subscription = createPlanStore();

export { plans, subscription };
