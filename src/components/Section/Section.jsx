import Container from "components/Container/Container";
import css from './Section.module.css';

const Section = ({variant, title, children}) => {
    return (
        <section className={css[variant]}>
            <Container>
                {title && (<h1 className={css.section__title}>{title}</h1>)}
                {children}
            </Container>
        </section>
    )
}

export default Section