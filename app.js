require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log(tareas.listadoArr);
                break;
            case '3':

                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();

    } while (opt != '0');

}

main();