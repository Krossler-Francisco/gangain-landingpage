import Facebook from "./components/Face";
import Instagram from "./components/Instagram"
import "./Links.css"

const Links = () => {
    return(
        <section className="links-section">
            <span>@Gangain by <a href=""> Krossler Francisco</a></span>
            <div className="links-icons">
                <Instagram/>
                <Facebook/>
            </div>
        </section>
    )
};

export default Links;