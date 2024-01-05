import { useEffect } from 'react';
import useContentAsset from "../hooks/useContentAsset";
import classes from './Footer.module.scss';
import { FOOTER_LINKS_ASSET } from "../constants/content-assets";
import { parseContentAsset } from '../utils/contentAssetUtils';

const Footer = (props) => {

    const { contentAsset } = useContentAsset(FOOTER_LINKS_ASSET);

    if(!contentAsset){
        return;
    }
    
    const parsedAsset = parseContentAsset(contentAsset);

    return (
        <div className={classes.footer}>
            <footer>
                <p>© 2021 Company, Inc</p>
                {contentAsset && <div>{parsedAsset}</div>}
            </footer>
        </div>
    )
}

export default Footer;