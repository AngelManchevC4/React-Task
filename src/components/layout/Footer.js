import { useEffect } from 'react';
import useContentAsset from "../hooks/useContentAsset";
import classes from './Footer.module.scss';
import { FOOTER_LINKS_ASSET } from "../constants/content-assets";


const Footer = (props) => {

    const { contentAsset } = useContentAsset(FOOTER_LINKS_ASSET);

    return (
        <div className={classes.footer}>
            <footer>
                <p>© 2021 Company, Inc</p>
                {contentAsset && <section dangerouslySetInnerHTML={{ __html: contentAsset }}></section>}
            </footer>
        </div>
    )
}

export default Footer;