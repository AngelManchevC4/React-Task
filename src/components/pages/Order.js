import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NOTIFICATION_ASSET } from "../constants/content-assets";

import { getContentAsset } from "../services/ocapi-service";

const useContentAsset = (cid) => {
    const [contentAsset, setContentAsset] = useState(null);

    useEffect(() => {
        const fetchAsset = async () => {
            const asset = await getContentAsset(cid);
            setContentAsset(asset);
        };
        fetchAsset();
    }, [cid]);

    return { contentAsset };
};

const Order = () => {
    const { orderId } = useParams();
    const [assetBody, setAssetBody] = useState("");
    const { contentAsset } = useContentAsset(NOTIFICATION_ASSET);

    useEffect(() => {
        if (contentAsset) {
            const body = contentAsset.replace("${order ID}", orderId);
            setAssetBody(body);
        }
    }, [contentAsset, orderId]);

    return (
        <main className="main-order">
            <section className="order-section container mt-5">
                <h1 className="order-heading text-center">{assetBody}</h1>
            </section>
        </main>
    );
};

export default Order;