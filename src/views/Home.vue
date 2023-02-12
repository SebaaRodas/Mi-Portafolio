<template>
  <div class="home container mx-auto">
    <h1 class="font-lobster text-6xl">Sebastián Rodas</h1>
    <h1 class="font-lobster text-4xl">Software Developer</h1>
    <!-- <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div class="bg-red-300 auto-rows-auto"><Personal/></div>
      <div class="bg-red-300 col-span-3 "><About /></div>
      <div class="bg-red-300 col-span-3 col-start-2"><Certificaciones /></div>
      <div class="bg-red-300 col-span-3 col-start-2"><Proyectos /></div>
      <div class="bg-red-300 col-span-3 col-start-2"><Contacto /></div>
    </div> -->
    <hr><br>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div class="bg-red-300 col-span-3 sm:col-span-1"><Personal /></div>
      <div class="bg-red-300 col-span-3 "><About /></div>
      <div class="bg-red-300 col-span-4"><Proyectos /></div>
      <div class="bg-red-300 col-span-4"><Certificaciones /></div>
      <div class="bg-red-300 col-span-4"><Contacto /></div>
    </div>
  </div>
  <hr><br>
  <footer>
    <router-link to="/#">Linkedin</router-link> |
    <router-link to="/#">Correo</router-link> | 
    <router-link to="/#">Whatsapp</router-link>
  </footer>
  <br>
</template>

<script>
import About from './About.vue';
import Certificaciones from './Certificaciones.vue';
import Contacto from './Contacto.vue'
import Proyectos from './Proyectos.vue';
import Personal from '@/components/Personal.vue'

export default {
  name: 'Home',
  components: {
    Personal,
    About,
    Contacto,
    Certificaciones,
    Proyectos
}
}
</script>
