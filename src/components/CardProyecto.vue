<template>
    
        <div class="card shadow-inner">
            <img class="inline" :src="proyecto.img" alt="logo">
            <h4>{{proyecto.titulo}}</h4>
            <h4>{{proyecto.descripcion}}</h4>
            <button>Ver Proyecto</button>
        </div>
    
</template>
<script>
export default {
    name: 'CardProyecto',
    props: ['proyecto'],
    components: {

    }
}
    
</script>