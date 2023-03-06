<template>
    <div class="contenedor col-span-1">  
          <div class="circular-image">
               <img class="inline margen" src="@/assets/mi-foto.png.jpeg" alt="foto">
          </div>
    </div>
</template>
<style>
.contenedor{
  display: flex;
  justify-content:flex-start;
  align-items:center;
}
.circular-image {
  width: 275px;
  height: 275px;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
}

.circular-image img {
  width: 100%;
}

.circular-image {
  border: 5px solid transparent;
  animation: animate-border 2s linear infinite;
}

@keyframes animate-border {
  from {
    border-color: #ebe5e5;
  }
  to {
    border-color: #008cff;
  }
}

</style>