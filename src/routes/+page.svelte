<script>
  import Stats from "../lib/Stats.svelte";
</script>


<div class="hero bg-base-200">
  <div class="hero-content p-4 flex-col lg:flex-row-reverse">
    <img src="/hero-image.jpg" class="max-w-lg rounded-lg shadow-2xl" alt="Make it happen"/>
    <div class="p-5 w-9/12">
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary mt-3">Get Started</button>
    </div>
  </div>
</div>

<section class="flex flex-wrap gap-6 justify-center py-10">
  <Stats/>
  <Stats/>
</section>

<section>
  <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/news-1.jpg" alt="blog">

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-secondary lg:mb-0 hover:text-primary" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/news-1.jpg" alt="blog">

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-secondary lg:mb-0 hover:text-primary" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/news-1.jpg" alt="blog">


                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-secondary lg:mb-0 hover:text-primary" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
    </div>
</section>

</section>

<div class="p-4">
  <!-- <ThemeSelect/> -->
</div>

<div class="hero py-20 min-h-max bg-base-200">
  <div class="hero-content flex-col gap-10 lg:flex-row-reverse">
    <div class="text-center px-6 lg:text-left">
      <h1 class="text-5xl font-bold">Contact now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span class="label-text"> Message </span>
          </label>
            <textarea class="textarea textarea-bordered resize-none" placeholder="Bio"></textarea>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>