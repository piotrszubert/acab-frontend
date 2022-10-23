<script>
    import { onMount } from 'svelte';
    const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    
    onMount(() => {
        const root = document.documentElement;
        const options = document.querySelector('.options');        

        for (const theme of themes) {
            const option = document.createElement('span');
            option.classList.add('option');
            option.textContent = theme;
            option.dataset.theme = theme;
            option.style.cursor = 'pointer';
            
            option.addEventListener('click', function(theme) {
                const root = document.documentElement;
                root.dataset.theme = theme.currentTarget.dataset.theme;
                console.log(theme.currentTarget.dataset.theme)
            });
            options.appendChild(option);
        }

    });



</script>

<div bind class="options grid grid-cols-3 gap-4">


</div>