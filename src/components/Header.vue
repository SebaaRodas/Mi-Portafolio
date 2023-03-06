<template>
    <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <RouterLink to="/" class="font-signika text-xl px-4 py-2 leading-none border-4 rounded-full text-white border-teal-500 hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">SR</RouterLink>
        </div>
        <div class="block lg:hidden">
            <button @click="aparecer()" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id="menu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
            <div class="text-sm lg:flex-grow">
            <RouterLink to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-lg hover:text-white mr-4">
                Sobre mi
            </RouterLink>
            <RouterLink to="/proyectos" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-lg hover:text-white mr-4">
                Proyectos
            </RouterLink>
            <RouterLink to="/certificaciones" class="block mt-4 lg:inline-block lg:mt-0 sm:text-lg text-teal-200 hover:text-white mr-4">
                Certificaciones
            </RouterLink>
            <RouterLink to="/contacto" class="block mt-4 lg:inline-block lg:mt-0 sm:text-lg text-teal-200 hover:text-white">
                Contacto
            </RouterLink>
            </div>
            <div>
            <a href="#" class="inline-block text-sm sm:text-lg px-4 py-2 leading-none border rounded-full text-white border-teal-500 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Descargar CV</a>
            </div>
        </div>
    </nav>
    <hr>
</template>
<script>
export default {
    methods: {
        aparecer(){
            menu.classList.toggle('hidden')
        }   
    }
}
</script>
