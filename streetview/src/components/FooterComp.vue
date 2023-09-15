<template>

    <footer class="footer">
     
        <div class="container text-center">
          <div class="row align-items-end footer-row">
            <div class="col socialLinks">
                <p><a href="https://github.com/Jason-Barron07" class="bi bi-github"></a></p>
                <p><a href="https://www.instagram.com/jayy_barron07" class="bi bi-instagram"></a></p>
                <p><a href="https://www.instagram.com/jayy_barron07" class="bi bi-facebook"></a></p>
            </div>
            <div class="col contacts">
             <p> <i class="bi bi-telephone-fill"> +27 82 604 2972</i></p>
             <p><i class="bi bi-envelope-fill"> jasonbarronyou222@gmail.com</i></p> 
            </div>
            <div class="col">
              <span>Copyright &copy; 2023</span>
            </div>
          </div>
        </div>
      
    </footer>
 
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 30px;
}

footer {
  background-color: #620a15;
  position: absolute;
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
</style>
