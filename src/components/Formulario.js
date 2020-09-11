import React, {
    useState
} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const Formulario = ({
    busqueda,
    guardarBusqueda,
    guardarConsultar
}) => {

    /* const [busqueda, guardarBusqueda] = useState({
        ciudad:'',
        pais:''
    }); */

    const [error, guardarError] = useState(false);

    //Extraer ciudad y pais
    const {
        ciudad,
        pais
    } = busqueda;


    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);
    }

    return ( <
        form onSubmit = {
            handleSubmit
        } >

        {
            error ? < Error mensaje = "Ambos  campos son obligatorios" / >
            :
                null
        }

        <
        div className = "input-field col s12" >
        <
        input type = "text"
        name = "ciudad"
        id = "ciudad"
        value = {
            ciudad
        }
        onChange = {
            handleChange
        }
        /> <
        label htmlFor = "ciudad" > Cidade: < /label> < /
        div >

        <
        div className = "input-field col s12" >
        <
        select name = "pais"
        id = "pais"
        value = {
            pais
        }
        onChange = {
            handleChange
        } >
        <
        option value = "" > --Selecione um pais-- < /option> <
        option value = "US" > Estados Unidos < /option> <
        option value = "MX" > México < /option> <
        option value = "AR" > Argentina < /option> <
        option value = "CO" > Colombia < /option> <
        option value = "CR" > Costa Rica < /option> <
        option value = "ES" > España < /option> <
        option value = "PE" > Perú < /option> < /
        select > <
        label htmlFor = "pais" > País < /label> < /
        div >

        <
        div className = "input-field col s12" >
        <
        input type = "submit"
        value = "Buscar Clima"
        className = "waves-effect waves-light btn-large btn-block yellow accent-4" /
        >

        <
        /div>

        <
        /form>

    );
}

Formulario.protoType = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
export default Formulario;