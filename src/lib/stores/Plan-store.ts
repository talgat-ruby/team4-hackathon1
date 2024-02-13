// import { writable } from 'svelte/store';

// type Plan = {
// 	id: 'arcade' | 'advanced' | 'pro';
// 	name: string;
// 	monthlyPrice: number;
// 	yearlyPrice: number;
// };

// type Subscription = {
// 	plan: Plan;
	
// 	billing: 'monthly' | 'yearly';
// };

// const plans: Plan[] = [
// 	{ id: 'arcade', name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
// 	{ id: 'advanced', name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
// 	{ id: 'pro', name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 }
// ];

// const Value: Subscription = {
// 	plan: plans[0],
// 	billing: 'monthly'
// };

// export const createPlanStore = () => {
// 	let initialPlan = Value;

// 	const { subscribe, update } = writable<Subscription>(initialPlan);

// 	const changePlan = (plan: Plan) =>
// 		update((val) => {
// 			const newSubscription = { plan, billing: val.billing };

// 			return newSubscription;
// 		});

// 	const changeBilling = (billing: 'monthly' | 'yearly') => {
// 		update((value) => {
// 			const newBilling = { plan: value.plan, billing };
// 			return newBilling;
// 		});
// 	};
// 	return {
// 		subscribe,
// 		changePlan,
// 		changeBilling
// 	};
// };

// const subscription = createPlanStore();

// export { plans, subscription };
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
	Yedil:string;
	monthlyPrice: number;
	yearlyPrice: number;
};

const addons: Addon[] = [
	{ id: 'online', name: 'Online service',Yedil:'Access to multiplayer games', monthlyPrice: 1, yearlyPrice: 10 },
	{ id: 'storage', name: 'Larger storage',Yedil:'Extra 1TB of cloud save', monthlyPrice: 2, yearlyPrice: 20 },
	{ id: 'customprofile', name: 'Custom profile',Yedil:'Custom theme on your profile', monthlyPrice: 2, yearlyPrice: 20 }
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
				const newSubscription = { plan, billing: val.billing ,addon:val.addon};
	
				return newSubscription;
			});
	const changeBilling = (billing: 'monthly' | 'yearly') => {
		update((value) => {
			const newBilling = { plan: value.plan, billing , addon:value.addon };
			return newBilling;
		});
	};

	const changeAddon = (addon: Addon) => {
		update((val2) => {
			const newAddon = { addon , plan:val2.plan , billing:val2.billing };
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