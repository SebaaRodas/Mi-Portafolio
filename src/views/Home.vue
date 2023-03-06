<template>
  <div class="home container mx-auto clase-con-imagen-de-fondo">
    <hr><br>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div class="col-span-3 sm:col-span-1"><Personal /></div>
      <div class="col-span-3"><About /></div>
      <div class="col-span-4"><Tecnologias /></div>
      <div class="col-span-4"><Proyectos /></div>
      <div class="col-span-4"><Certificaciones /></div>
      <div class="col-span-4"><Contacto /></div>
    </div> 
  </div>
  <br>
  <hr>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import About from './About.vue';
import Certificaciones from './Certificaciones.vue';
import Contacto from './Contacto.vue'
import Proyectos from './Proyectos.vue';
import Personal from '@/components/Personal.vue'
import Tecnologias from '@/components/Tecnologias.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Personal,
    About,
    Contacto,
    Certificaciones,
    Proyectos,
    Tecnologias, 
    Footer
}
}
</script>

<style>


</style>
