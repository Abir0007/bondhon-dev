<template>
    <div class="bg-white min-h-screen min-w-screen overflow-hidden">
        <section class="text-gray-600 body-font">
            <svg 
            data-aos="fade-down" 
            data-aos-duration="1000" 
            data-aos-easing="ease-in-out" 
            class="absolute h-52 md:h-auto max-w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#EF4444" fill-opacity="1" d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
            <h1 
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="ease-in-out" 
            class="relative text-4xl md:text-5xl font-bold text-center text-white z-20 py-10 lg:py-16">
            Browse Products
            </h1>
            <div class="container px-5 py-10 lg:py-0 mx-auto">
                <div
                data-aos="fade-left" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out"
                class="flex justify-end items-center mb-8">
                      <el-select v-model="value" placeholder="Sort">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div 
                data-aos="fade" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out"
                class="flex flex-wrap -m-4">
                    
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <a href="/productview" class="text-gray-900 title-font text-lg font-medium">The Catalyzer</a>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                    value: 'Name',
                    label: 'Name'
                    },
                    {
                    value: 'Price',
                    label: 'Price'
                    }, 
                    
                    {
                    value: 'Rating',
                    label: 'Rating'
                    }
                ],
                value: ''
            }
        },
    }
</script>

<style scoped>

</style>