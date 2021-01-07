export default{
    namespaced: true,
    state: {
        contador : 0
    },
    mutations:{
        aumetarContador(state,payload){
            state.contador = state.contador + payload
        }
    }
}