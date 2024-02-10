
import { writable } from 'svelte/store';

function createStepStore(){

	const { subscribe, update} = writable(1);

	const updateStep = (action: '+' | '-' ) =>
		update((step) => {
			if(action === '+' && step<5 ){
       return step+=1;    
       }else if(action === '-' && step>1){
       return step-=1
     }else{ 
        return 1
    }
        
	 	});

	
return {
		subscribe,
		 updateStep,
	
	};
};

export const step = createStepStore();
