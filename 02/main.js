var vm = new Vue ({
    el: '#app',

    data: {
        //objeto
        persona:{
        nombre: 'Manuel',
        edad: '12',
        sexo: 'Kasculino',
        correo: 'manuelgop@gmail.com',
        },
        //matriz simple
        numeros: [
            1,2,3,4,5

        ],
        //matrices de objetos
        semana:[
            {nombre: 'Lunes', numero: "1"},
            {nombre: 'Martes', numero: "2"},
            {nombre: 'Miercoles', numero: "3"},
            {nombre: 'Jueves', numero: "4"},
            {nombre: 'Viernes', numero: "5"},
            {nombre: 'Sabado', numero: "6"},
            {nombre: 'Domingo', numero: "7"}

        ],
    },

  

})