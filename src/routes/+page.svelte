<script>
  import Stats from "../lib/Stats.svelte";
  import ThemeSelect from "../lib/ThemeSelect.svelte";
</script>


<div class="hero bg-base-200">
  <div class="hero-content p-4 flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/460/400/tech" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<section class="p-4">
  <Stats class="flex-grow"/>
  <div class="flex flex-grow flex-col gap-3 border border-gray-500 py-5 px-4 mt-5">
    <h2 class="text-3xl font-bold">Box Office News!</h2>
    <p class="w-80">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis id porro pariatur accusamus recusandae placeat minima consectetur, ipsa ratione enim!
    </p>
    <img src="https://placeimg.com/460/400/tech" class="w-80 rounded-lg shadow-2xl" />
  </div>
</section>

<div class="p-4">
  <ThemeSelect/>
</div>

<div class="hero py-20 min-h-max bg-base-200">
  <div class="hero-content flex-col gap-10 lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Contact now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
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
