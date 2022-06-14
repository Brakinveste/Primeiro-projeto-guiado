 
var mylist = [
    {
        name: 'Bruno Luiz Ferreira',
        tel: '99999999',
        xp: false
    },

    {
        name: 'Robert Esponja Calças Quadradas',
        tel: '99999999',
        xp: false
    },

    {
        name: 'Doink tha clown',
        tel: '99999999',
        xp: true
    },
];


function desenhaTabela() {

    currentLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')];
    currentLines.forEach((element) => {
    element.remove()
    })


    for (mm in mylist) {
        document.querySelector('table.lista tbody').innerHTML += 
            `<tr class="dinamic-content style="background-color: ${ (mm % 2 == 0) ? '#fff' : '#c6c6c6'}" >
                <td>
                    ${ mylist[mm].name }
                </td>
                <td>
                    ${ mylist[mm].tel }
                </td>
                <td style="background-color: ${(mylist[mm].xp == true) ? 'green' : 'red' }">
                    ${ (mylist[mm].xp ? '<strong style="color:#fff"> sim </strong>' : '<strong style="color:#fff"> não </strong>') }
                </td>
                <td>
                    <button onclick="mylist.splice(${mm}, 1); desenhaTabela();"> Excluir </button>
                </td> 
            </tr>`
    }
}