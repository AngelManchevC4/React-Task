import { useEffect } from 'react';
import useContentAsset from "../hooks/useContentAsset";
import classes from './Footer.module.scss';
import { FOOTER_LINKS_ASSET } from "../constants/content-assets";


const Footer = (props) => {

    const { contentAsset } = useContentAsset(FOOTER_LINKS_ASSET);

    console.log(contentAsset);

    return (
        <div className={classes.footer}>
            <footer>
                <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>
                <section dangerouslySetInnerHTML={{ __html: contentAsset }}></section>
            </footer>
        </div>
    )
}

export default Footer;