<script lang="ts">
import BgSideBar from './img/bg-sidebar-desktop.svg'
import BgSideBarMobile from './img/bg-sidebar-mobile.svg'
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
</script>
<body>
<main>
    <nav class="form-steps">
        <picture>
          <source media="(min-width:768px)" srcset={BgSideBar}>
          <img src={BgSideBarMobile} alt="" srcset="">
        </picture>
        <ol>
          <li class="form-step" data-number="1"><span class="mobile-hidden"><span class="Steps">Step 1</span><br> Your info</span></li>
          <li class="form-step" data-number="2"><span class="mobile-hidden"><span class="Steps">Step 2</span><br> Select plan</span></li>
          <li class="form-step" data-number="3"><span class="mobile-hidden"><span class="Steps">Step 3</span><br> Add-ons</span></li>
          <li class="form-step" data-number="4"><span class="mobile-hidden"><span class="Steps">Step 4</span><br> Summary</span></li>
        </ol>
      </nav>
<form action="" class="step-container">
    <h2 class="step-title">Personal info</h2>
    <p class="step-subtitle">Please provide your name, email address, and phone number.</p>
    <label for="namefield" class="input-lbl">Name </label>
    <input type="text" class="input-field" name="name" id="namefield" placeholder="e.g. Stephen King" >

    <label for="emailfield" class="input-lbl">Email Address </label>
    <input type="email" class="input-field" name="email" id="emailfield" placeholder="e.g. Stephen King" >

    <label for="phonefield" class="input-lbl">Phone Number </label>
    <input type="tel" class="input-field" name="phone" id="phonefield" placeholder="e.g. +1 234 567 890" >
   
</form>
</main>  
</body>
<style>
body{

background: rgb(242, 242, 242);
}
main{
display: flex;
justify-content: center;
width: 1050px;
height: 600px;
margin-left: 251px;
margin-top: 105px;
border-radius: 15px;

box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

background: rgb(255, 255, 255);
}
.form-steps{
    position: relative;
    margin: 16px;
}
.form-steps>ol{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
}
.form-step{
color: rgb(255, 255, 255);
font-family: 'Ubuntu', sans-serif;
font-size: 14px;
/* font-weight: 700; */
line-height: 16px;
letter-spacing: 0.5px;
text-align: left;
text-transform: uppercase;
}
.Steps{
color: rgb(171, 188, 255);
font-family: 'Ubuntu', sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0px;
text-align: left;
}
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
    /* color: var(--Cool-gray); */
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

</style>