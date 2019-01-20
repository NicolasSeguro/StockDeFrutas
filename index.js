const app = new Vue ({
    el:'#app',
    data: {
        titulo: 'Stock de frutas',
        frutas: [
            {nombre:'Pera',cantidad:10},
            {nombre:'Manzana',cantidad:0},
            {nombre:'Banana',cantidad:11},
        ],
        nuevafruta:'',
        total:0,
    
    },
    methods:{
        agregarfruta(){
            this.frutas.push({
            nombre: this.nuevafruta, cantidad:0
            });
            this.nuevafruta = '';
        }
    },
    computed: {
        sumar(){
            this.total=0;
            for(frutas of this.frutas){
            this.total = this.total + frutas.cantidad;
        }

        return this.total;
    }
}
})
