import { Layout } from 'components/Layout/Layout';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const App = () => {
    return (
        <Layout>
            <h1 className={css.mainTitle}>Phone book</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactsList />
        </Layout>
    );
};
