import { Layout } from 'components/Layout/Layout';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const App = () => {
    return (
        <Layout>
            <ToastContainer />
            <h1 className={css.mainTitle}>Phone book</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactsList />
        </Layout>
    );
};
