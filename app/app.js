let users = [
    {
        user: 'Usuario1',
        password: '123',
        saldo: 100,
    },
    {
        user: 'Usuario2',
        password: '123',
        saldo: 90,
    },
    {
        user: 'Usuario3',
        password: '123',
        saldo: 80,
    }
]
function redirect() {
    window.location.href = "index.html";
}
//Variable contador para saber que usuario vamos a trabajar
let contador = localStorage.getItem('contador') ||-1;
function LoginValidate(){
    const userName = document.querySelector('#usernameLogin').value;
    const userPass = document.querySelector('#passLogin').value;

    for(let i = 0; i < users.length; i++){
        contador++;
        if(userName == users[i].user && userPass == users[i].password){
            console.log('Inicio de sesion exitoso');
            alert('Inicio de sesion exitoso');
            contador = i;
            localStorage.setItem('contador', contador);
            redirect();
            return;
        }
    }
    alert('Nombre de usuario o contraseña incorrectos');
    console.log('Nombre de usuario o contraseña incorrectos');
    contador=-1;
}
function consultarSaldo(){
    const saldo = document.querySelector('#monto');
    saldo.innerText = users[contador].saldo;
    console.log(contador);
}
function ingresarMonto(){
    const inputSaldo = document.querySelector('#inputSaldo').value;
    const saldo = document.querySelector('#monto');
    if(users[contador].saldo < 990){
        let sum = users[contador].saldo + parseInt(inputSaldo);
        users[contador].saldo = sum;
        saldo.innerText = users[contador].saldo;
    }
    else{
        alert('Llego al limite de su cuenta.');
    }
}
function retirarMonto(){
    const inputSaldo = document.querySelector('#inputSaldo').value;
    const saldo = document.querySelector('#monto');
    if(users[contador].saldo > 10){
        let resta = users[contador].saldo - parseInt(inputSaldo);
        users[contador].saldo = resta;
        saldo.innerText = users[contador].saldo;
    }
    else{
        alert('Su cuenta debe tener al menos Q 10')
    }
}