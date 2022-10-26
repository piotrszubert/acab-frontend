<script>
	import '../app.css';
	import { page } from '$app/stores';
  import Footer from '../lib/Footer.svelte';
  import ThemeSelect from '../lib/ThemeSelect.svelte';

// const routeChange = () => {
//   // console.log('changed path')  
// }
// import { navigating } from '$app/stores';
// $: if($navigating) routeChange();

// close menu on link click
const handleClick = () => {
  document.querySelector('.drawer-overlay').click();
}

</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300 sticky top-0 z-10">
      <div class="flex-none md:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2 text-lg stroke-secondary font-title ">
        <span class="lowercase text-primary font-extrabold">ac</span>
        <span class="text-base-content font-extrabold">ab.</span>
      </div>
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li class="nav-item">
            <a class="nav-link" rel="prefetch" class:underline={$page.url.pathname === '/'} aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" rel="prefetch" class:underline={$page.url.pathname === '/contact'} href="/contact">Kontakt</a>
          </li>
          <li>
            <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.5 24h-7c-1.4 0-2.5-1.14-2.5-2.5v-11.64c-.662-.473-1-1.201-1-1.941 0-.376.089-.75.289-1.129 1.065-1.898 2.153-3.783 3.265-5.654.462-.737 1.211-1.136 2.045-1.136.635 0 .972.204 1.445.479.662.386 9 5.352 12.512 7.441.087.052 3.366 1.988 3.449 2.045.663.49.995 1.197.995 1.934 0 .375-.092.745-.295 1.13-1.064 1.899-2.153 3.784-3.265 5.655-.577.92-1.615 1.29-2.496 1.088-.392.234-5.826 3.75-6.252 3.968-.413.212-.762.26-1.192.26m-7.5-10.763v8.263c0 .274.221.5.5.5h4.588c-1.72-2.906-3.417-5.827-5.088-8.763m1.606-1.238c.053.092 5.681 9.797 5.726 9.859.108.139.299.181.455.098.164-.092 5.081-3.251 5.081-3.251-.639-.377-8.144-4.851-11.262-6.706m.659-9.829c-.913 1.456-3.199 5.525-3.235 5.61-.07.171-.008.366.149.464.201.12 16.023 9.547 16.177 9.571.151.022.297-.045.377-.174.942-1.584 3.206-5.55 3.232-5.601.069-.172.007-.367-.15-.465-.201-.12-15.983-9.499-16.09-9.546-.18-.074-.365-.002-.46.141m1.557 2.695c1.104 0 2 .897 2 2 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.103.896-2 2-2"/></svg>
          </li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <!-- theme select & count -->
    <!-- <ThemeSelect/> -->
    <!-- theme select & count end -->
    <slot />
    <Footer/> 
    
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li class="nav-item">
        <a class="nav-link" on:click={() => handleClick()} rel="prefetch" class:underline={$page.url.pathname === '/'} aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" on:click={() => handleClick()} rel="prefetch" class:underline={$page.url.pathname === '/contact'} href="/contact">Kontakt</a>
      </li>
      
    </ul>
    
  </div>
</div>




