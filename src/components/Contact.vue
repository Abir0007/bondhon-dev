<template>
    <div class="bg-white min-h-screen min-w-screen block overflow-hidden" id="body">
        <section class="absolute top-24 lg:top-20 w-full z-10">
            <!-- <svg class="absolute top-0 fill-current text-white h-60 lg:h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,224L1440,64L1440,0L0,0Z"></path></svg> -->
            <!-- <svg class="absolute top-0 fill-current text-white h-60 lg:h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,229.3C672,245,768,235,864,234.7C960,235,1056,245,1152,208C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> -->
            <svg 
            data-aos-duration="500"
            data-aos-easing="ease-in-out" 
            data-aos="fade-down"
            class="absolute top-0 fill-current text-white h-60 lg:h-auto max-w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,149.3C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div class="container mx-auto flex">
                <h1 
                data-aos-duration="1000"
                data-aos-easing="ease-in-out" 
                data-aos="fade-up"
                class="text-red-500 font-bold text-5xl md:text-6xl z-20 mx-5 lg:mx-5 my-8 lg:my-16">Contact Us</h1>
            </div>
        </section>

        <section
        class="text-gray-600 body-font relative z-20 mt-20 lg:mt-28">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                <div 
                class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: contrast(1.2) opacity(0.6);"></iframe>
                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md bg-opacity-80">
                        <div class="lg:w-1/2 px-6">
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a class="text-red-500 leading-relaxed">example@email.com</a>
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p class="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>

                <div 
                class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full rounded-md p-10 md:p-8 mt-8 md:mt-0">
                    <h2 class="text-gray-900 text-4xl mb-1 font-medium title-font">Feedback</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-white rounded caret-red-500 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded caret-red-500 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" class="w-full bg-white rounded caret-red-500 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                    <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#body {
    background-image: url('/img/5559852.jpg');
}
.custom-shape-divider-top-1626336742 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}
</style>