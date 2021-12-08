class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class listaCircularDoble{
    constructor(){
        this.primero = null;
    }
    insertar(dato){
        let nuevo_nodo = new nodo(dato);
        if(this.primero == null){
            this.primero = nuevo_nodo;
            

        }else{
            let auxiliar = this.primero;
            while(auxiliar.siguiente != null){
                auxiliar = auxiliar.siguiente;
            };
            auxiliar.siguiente = nuevo_nodo;
            nuevo_nodo.anterior = auxiliar;
            
            
           

        }
    }

    mostrar(){
        let auxiliar = this.primero;
        console.log('------ Lista ------')
        console.log(this.primero.anterior)
        for (let index = 0; index < 4; index++) {
            console.log(auxiliar.dato)
            auxiliar = auxiliar.siguiente
            
        }
        
    }
}

let lista = new listaCircularDoble;

lista.insertar(10);
lista.insertar(12);
lista.insertar(7);
lista.insertar(5);
lista.mostrar();