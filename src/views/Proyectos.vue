<template>
    <div class="container">
        <h1 class="font-signika font-semibold text-3xl sm:text-4xl text-white">Mis Proyectos</h1>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <CardProyecto v-for="proyecto in proyectos" :key="proyecto.id" :proyecto="proyecto"/>
        </div>
    </div>
</template>
<script>
import CardProyecto from '@/components/CardProyecto.vue';
import { computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Proyectos',
    components: {
    CardProyecto
},
    setup() {
        const store = useStore()
        onUnmounted(async()=>{
            store.dispatch('fetchData')
        })
        const proyectos = computed(()=> store.state.proyectos)
        return {proyectos}
    }
    }
    
</script>