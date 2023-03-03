import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "../../styles/About/About.module.scss";

interface Props {
    title: string;
}

const AnimationTitle: React.FC<Props> = ({ title }) => {
    const [state, toggle] = useState(true);
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    });

    return (
        <>
            <animated.h1
                className={styles.about_title}
                onMouseMove={() => toggle(!state)}
                style={{
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),
                }}
            >
                {title}
            </animated.h1>
        </>
    );
};
export default AnimationTitle;
