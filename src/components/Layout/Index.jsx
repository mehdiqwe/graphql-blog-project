import Footer from "./Footer"
import Header from "./Header"

const Index = ({ children }) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Index