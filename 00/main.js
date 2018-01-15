var vm = new Vue ({
    el: '#main',

    data: {
        nombre: '',
        edad: '',
        sexo: '',
        correo: '',

    },

    methods:{
        enviardatos: function () {
            if(this.nombre && this.edad && this.sexo && this.correo){
                alert("Estan TODOS los datos");

            }else{
                alert("NO ESTAN TODOS");
            }
        }

    },
    computed:{

        todainfo: function(){

            return this.nombre && this.edad && this.sexo && this.correo;
        }
    }

})