<script>
    import { onMount } from 'svelte';
    const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", 'mytheme']
    
    onMount(() => {
        const root = document.documentElement;
        let localStorageTheme = localStorage.getItem('theme');

        if(localStorageTheme) {
            root.dataset.theme = localStorageTheme;
            console.log(localStorageTheme);
        }

        const options = document.querySelector('.options');        

        for (const theme of themes) {
            const option = document.createElement('span');
            option.classList.add('option');
            option.textContent = theme;
            option.dataset.theme = theme;
            option.style.cursor = 'pointer';
            const cardClasses = ['bg-base-100', 'btn',
            'btn-primary', 'text-primary', 'border', 'border-2', 'border-primary',  'border-secondary',  'hover:text-secondary', ]

            //   'primary-content', 'hover:bg-secondary', 'hover:border-secondary', 'hover:text-white', 'text-secondary'

            option.classList.add(...cardClasses);
            
            option.addEventListener('click', function(theme) {
                const root = document.documentElement;
                root.dataset.theme = theme.currentTarget.dataset.theme;
                localStorage.setItem('theme', theme.currentTarget.dataset.theme);
                console.log(theme.currentTarget.dataset.theme)
            });
            options.appendChild(option);
        }


        const countThemes = () => {
            console.log(document.querySelectorAll('.option').length);
            let themeCounter = document.querySelector('.stat-value');
            themeCounter.textContent = document.querySelectorAll('.option').length
        }

        countThemes();
    });




</script>

<h2 class="text-3xl font-bold">
    Choose your theme!
</h2>
<!-- <div class="options grid grid-cols-3 gap-4 p-4 capitalize"></div> -->
<div class="options grid grid-cols-2 md:grid-cols-3 gap-4 py-4 capitalize"></div>
<div class="p-4 flex justify-center">
    <div class="stats bg-primary">
  
        <div class="stat text-center p-12">
          <div class="stat-title font-black">Total theme count</div>
          <div class="stat-value">20+</div>
          <div class="stat-desc font-bold">or create your own theme</div>
        </div>
        
      </div>
</div>