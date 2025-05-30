import express from 'express';
import { 
    paginaInicio, 
    paginaNosotos, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViajes 
} from '../controllers/paginasController.js';
import { 
    guardarTestimoniales 
} from '../controllers/testimonialController.js';


const router = express.Router();

router.get("/", paginaInicio);

router.get('/nosotros', paginaNosotos);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales)

export default router;
