import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type contact
import { DisplayContactListPage, DisplayUpdatePage, ProcessUpdatePage, ProcessDeletePage } from '../Controllers/contact';

//import util
import {AuthGuard} from '../Util';
/* GET /contact-list page. */
router.get('/',  DisplayContactListPage);



/* GET - display /contact-list/update/:id page. */
router.get('/update/:id', AuthGuard, DisplayUpdatePage);



/* POST - process /contact list/edit/:id page */
router.post('/update/:id', AuthGuard, ProcessUpdatePage);

/* GET - process /contact list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

