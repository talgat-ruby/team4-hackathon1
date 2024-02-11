
<script lang="ts">
   import { personInfo } from './stores/store-step';
import {step} from './stores/store-step'
import './Font'

 const upDate=()=>{step.updateStep("+");

 console.log($personInfo.name , $personInfo.email ,$personInfo.phone);
 
}
 let nameError = false;
</script>

<form on:submit|preventDefault={upDate} class="step-container">
    <h2 class="step-title">Personal info</h2>
    <p class="step-subtitle">Please provide your name, email address, and phone number.</p>
    <label for="namefield" class="input-lbl">Name </label>
   
    <input required bind:value={$personInfo.name}  type="text" class="input-field"  name="name" placeholder="e.g. Stephen King" >
    

    <label  for="emailfield" class="input-lbl">Email Address </label>
    <input required bind:value={$personInfo.email}  type="email" class="input-field" name="email" placeholder="e.g. Stephen King" >

    <label  for="phonefield" class="input-lbl">Phone Number </label>
    <input required bind:value={$personInfo.phone}  type="tel" class="input-field" name="phone" placeholder="e.g. +1 234 567 890" >
   <button type="submit" >Next Step</button>
</form>

<style>
 
.step-container{
    width: 450px;
    background-color: var(--White);
    border-radius: 20px;
    position: relative;
    margin-left: 100px;
    margin-right: 100px;
    padding: 50px 30px;
}
.step-title{
color: rgb(2, 41, 89);
font-family: 'Ubuntu';
font-size: 32px;
font-weight: 700;
line-height: 37px;
letter-spacing: 0px;
text-align: left;
}
.step-subtitle{
color: rgb(150, 153, 170);
font-family: 'Ubuntu';
font-size: 16px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0px;
text-align: left;
}
.input-lbl{
display: flex;
justify-content: space-between;
margin: 25px 0 5px;
color: rgb(2, 41, 89);
font-family: 'Ubuntu';
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0px;
text-align: left;
}
.input-field{
    width: 450px;
    height: 48px;
    border-radius: 5px;
    border-style: solid;
    padding: 0px 20px;
    outline: none;
color: rgb(150, 153, 170);
font-family: 'Ubuntu';
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
}
button{
  color: rgb(255, 255, 255);
font-family: 'Ubuntu';
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
margin-top: 64px;
margin-left: 370px;   
width: 123px;
height: 48px;
border-radius: 8px;
background: rgb(2, 41, 89);
cursor: pointer;

}

</style>
