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

<div class="flex flex-col md:flex-row px-4 py-10">
  <div class="grid flex-grow place-items-center">
    <div class="avatar">
      <div class="rounded w-full h-full">
        <img src="https://placeimg.com/400/400/people" />
      </div>
    </div>
    <h3 class="py-3 text-2xl font-bold">Heading title!</h3>
    <p class="text-center w-2/4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Odio illum commodi, iste deleniti reiciendis sequi.
    </p>
    
  </div>
  
  <div class="grid p-2 flex-grow card place-items-center">
    <div class="avatar">
      <div class="rounded w-full h-full">
        <img src="https://placeimg.com/400/400/people" />
      </div>
    </div>
    <h3 class="py-3 text-2xl font-bold">Heading title!</h3>
    <p class="text-center w-2/4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Odio illum commodi, iste deleniti reiciendis sequi.
    </p>
  </div>
</div>

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