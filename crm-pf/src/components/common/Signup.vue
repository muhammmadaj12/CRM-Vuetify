<template>
    <div>
  
      <input type="file" @change="handleImageUpload" accept="image/*">
      <img :src="imageUrl" alt="Uploaded Image" v-if="imageUrl">
      

      <button @click="handleSubmit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: null,
        imageFile: null,
      };
    },
    methods: {
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.imageFile = file;
  
          const reader = new FileReader();
          reader.onload = (e) => {
            const blob = new Blob([e.target.result], { type: file.type });
            this.imageUrl = URL.createObjectURL(blob);
          };
          reader.readAsArrayBuffer(file);
        }
      },
      handleSubmit() {
        if (this.imageFile) {
        
          localStorage.setItem('userImage', this.imageUrl);
          
        } else {
          alert("Error occured");
        }
      },
    },
  };
  </script>
  