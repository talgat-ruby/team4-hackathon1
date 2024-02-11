
import { writable } from 'svelte/store';

type Info = {
	name: string;
	email: string;
	phone: string;
};

export const personInfo = writable<Info>({
	name: '',
	email: '',
	phone: ''
  });


