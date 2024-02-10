<script>
    // export let currentStep;
    import BgSideBar from './img/bg-sidebar-desktop.svg';
	import BgSideBarMobile from './img/bg-sidebar-mobile.svg';
  </script>
  
  <nav class="form-steps">
    <picture>
      <source media="(min-width:768px)" srcset={BgSideBar}>
      <img src={BgSideBarMobile} alt="" srcset="">
    </picture>
    <ol>
      <li class="form-step"  ><span class="mobile-hidden"><span class="Steps">Step 1</span><br> Your info</span></li>
      <li class="form-step"  ><span class="mobile-hidden"><span class="Steps">Step 2</span><br> Select plan</span></li>
      <li class="form-step" ><span class="mobile-hidden"><span class="Steps">Step 3</span><br> Add-ons</span></li>
      <li class="form-step" ><span class="mobile-hidden"><span class="Steps">Step 4</span><br> Summary</span></li>
    </ol>
  </nav>
  
  <style>
    .form-steps {
      position: relative;
      margin: 16px;
    }
    .form-steps > ol {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
    .form-step {
      color: rgb(255, 255, 255);
      font-family: 'Ubuntu', sans-serif;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-align: left;
      text-transform: uppercase;
      cursor: pointer;
    }
    .Steps {
      color: rgb(171, 188, 255);
      font-family: 'Ubuntu', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0px;
      text-align: left;
    }
  </style>