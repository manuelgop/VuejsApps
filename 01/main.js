var vm = new Vue ({
    el: '#app',

    data: {
        nombre: 'Manuel',
        edad: '',
        sexo: '',
        correo: '',

    },

    methods:{
        saludar: function (_evt) {
         alert("HOLA "+ this.nombre);
         console.log(_evt);
        },
        tecla: function (_evt) {
            console.log(_evt.key);
        }

    },
  

})