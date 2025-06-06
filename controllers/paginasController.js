import { Viaje } from "../models/viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio = async (req, res) => {
    // Consultar 3 viajes del model Viaje
    const promiseDB = [];

    promiseDB.push(  Viaje.findAll({ limit: 3}) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );
    try {
        const resultado = await Promise.all( promiseDB)
    
        res.render("inicio", {
        pagina: 'Inicio',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
        });    
    } catch (error) {
        console.log(error)
    }


};

const paginaNosotos = (req, res) => {

    res.render("nosotros", {
      pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {

    const viajes = await Viaje.findAll()
    console.log(viajes)
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });

    } catch (error) {
        console.log(error)
    }


}

// muestra un viaje por su slug
const paginaDetalleViajes = async (req, res) => {
    const { slug } = req.params
    try {
        const viaje = await Viaje.findOne({where : { slug }});
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch(error) {
        console.log(error)
    }
}
export {
    paginaInicio,
    paginaNosotos,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes
}
