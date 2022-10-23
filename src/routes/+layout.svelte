<script>
	import '../app.css';
	import Footer from '../lib/Footer.svelte';
	import ThemeSelect from '../lib/ThemeSelect.svelte';



  import { onMount } from 'svelte';

onMount(() => { 
  // const theme = document.querySelector('[data-theme]');
  // console.log(theme.dataset.theme);
  // console.log('mounted')
});

const routeChange = () => {
  // console.log('changed path')  
}

import { page } from '$app/stores';
import { navigating } from '$app/stores';

$: if($navigating) routeChange();




</script>



<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li class="nav-item">
            <a class="nav-link" rel="prefetch" class:underline={$page.url.pathname === '/'} aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" rel="prefetch" class:underline={$page.url.pathname === '/contact'} href="/contact">Kontakt</a>
          </li>
          
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <ThemeSelect/>
    <slot />
    <Footer/> 
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li class="nav-item">
        <a class="nav-link" rel="prefetch" class:underline={$page.url.pathname === '/'} aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" rel="prefetch" class:underline={$page.url.pathname === '/contact'} href="/contact">Kontakt</a>
      </li>
      
    </ul>
    
  </div>
</div>




