<template>

  <div class="footer text-center">
    <p class="foot_info">
      <br />Powered by: Jason Barron
      <br/>Email: jasonbarronyou222@gmail.com
      <br /><i class="bi bi-telephone-fill"> </i> +27 82 604 2972<br />
      &copy;Copright <br />2023 <br/>
      <a href="https://github.com/Jason-Barron07" class="bi bi-github"></a>
      <a href="https://www.instagram.com/jayy_barron07" class="bi bi-instagram"></a>
      <a href="https://www.instagram.com/jayy_barron07" class="bi bi-facebook"></a>
    </p>
</div>
 
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 30px;
}

.footer {
  background-color: #620a15;
  position: relative;
  padding: 1rem;
  width: 100%;
  color: #fff;
}

a{
  text-decoration: none;
  color:#fff;
}
.footer-row {
    display: flex;
    gap: 10rem;
}

.contacts {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 20rem;   
}



.socialLinks {
    display: flex;
  flex-direction: row;
  gap: 1rem;
  float: right;
  margin-top: 5rem;
}

.copyright {
    width: 9rem;
}
.bi{
  padding:0.3rem;
}
</style>
