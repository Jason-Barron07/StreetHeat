<template>
    <div>

        <footer>
            <div>
            <div class="socialLinks">
                <p><i class="bi bi-github"></i></p>
                <p><i class="bi bi-instagram"></i></p>
                <p><i class="bi bi-facebook"></i></p>
                <p><i class="bi bi-linkedin"></i></p>
            </div>
            <div class="phone"><i class="bi bi-telephone-fill"> +27 82 604 2972</i></div>
            <div class="email"><i class="bi bi-envelope-fill"> jasonbarronyou222@gmail.com</i></div>
            <div> Copyright &copy; 2023</div>
            </div>
           


            
        </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

footer{
    background-color:#620A15;
    bottom:0;
    position: absolute;
    width:100%;
    padding:1rem;
    color:#fff;
}

.email{
    text-align: center;
}

.phone{
    text-align: center;
}

.socialLinks {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end; 
    gap: 1rem;
    float: right;
}




</style>