import { FC } from "react";
import styles from "../../styles/Contact/Map.module.scss";

const Map: FC = () => {
    return (
        <div className={styles.map}>
            <iframe
                width="800"
                height="800"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=600&amp;height=800&amp;hl=en&amp;q=%20Kyiv+(location)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        </div>
    );
};

export default Map;
