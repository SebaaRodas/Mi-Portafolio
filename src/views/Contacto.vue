<template>
  <div>
    <h1 class="font-signika font-semibold text-3xl sm:text-4xl text-white">Contactame!</h1>
    <div class="card">
      <form action="https://formsubmit.co/sebastianrodas11@gmail.com" method="POST">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico:</label>
          <input type="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" name="mensaje" cols="8" rows="4"></textarea>
        </div>  
        <button type="submit">Enviar</button>
        <input type="hidden" name="_next" value="http://localhost:8080/">
        <input type="hidden" name="_captcha" value="false">
      </form>
    </div>
    <br><hr>
  </div>  
</template>

<style>
  .card {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    border: 2px solid rgb(87, 158, 170);
    border-radius: 10px;
  }
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  label {
    font-weight: bold;
    margin-bottom: 10px;
  }
  input,
  textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  button[type="submit"] {
    padding: 10px 20px;
    background-color: rgb(141, 222, 245);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>

