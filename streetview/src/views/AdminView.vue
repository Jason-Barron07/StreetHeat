<template>
    <div>
        <h1 style="text-align:center" >Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Catergory</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.prodID" >
                        <td class="text">{{product.prodID}}</td>
                        <td><img :src="product.prodUrl" :alt="product.prodName" style="width: 10rem;"></td>
                        <td class="text">{{product.prodName}}</td>
                        <td class="text">{{product.prodPrice}}</td>
                        <td class="text">{{product.prodCatergory}}</td>
                        <td class="text">{{product.prodQuan}}</td>  
                        <td><button  type="button" class="btn btn-danger"  @click="deleteProduct(product.prodID)" fdprocessedid="vr45c">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
            </svg>
                            Button
                          </button></td>
                    </tr>
                </tbody>
            </table>

            <h1 style="text-align:center">Users</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Gender</th>
                        <th>User Password</th>
                        <th>User Profile</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="user in users" :key="user.userID">
                        <td class="text">{{ user.userID }}</td>
                        <td><img :src="user.userProfile" :alt="user.userProfile" style="width: 10rem;"></td>
                        <td class="text">{{ user.firstName }}</td>
                        <td class="text">{{ user.lastName }}</td>
                        <td class="text">{{ user.userAge }}</td>
                        <td class="text">{{ user.emailAdd }}</td>
                        <td class="text">{{ user.userRole }}</td>
                        <td class="text">{{ user.gender }}</td>     
                        <td><button  type="button" class="btn btn-danger" @click="deleteUser(user.userID)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
            </svg>
                            Button
                          </button></td>
                    </tr>
                </tbody>
            </table>
        

    </div>
</template>

<script>

   export default {
  computed: {
      products() {
          return this.$store.state.products
        },
        users(){
            return this.$store.state.users
            // console.log(this.users)
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts'); 
        this.$store.dispatch('fetchUsers');
  },
  methods: {
    deleteProduct(prodID) {
        this.$store.dispatch("DeleteProducts", prodID)
      },
    deleteUser(userID) {
          this.$store.dispatch('DeleteUsers', userID)
      }
    },  


  
};

</script>

<style scoped>

table {
    border-collapse: collapse;
    width: 100%;
}
th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
th {
    background-color: #620A15;
    color: white;
}

.text{
    font-size:30px;
}



</style>