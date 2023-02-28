import Link from "next/link";
import { FC } from "react";
import { SocailItemWrapperType } from "../types";

const SocailItemWrapper: FC<SocailItemWrapperType> = ({ route, children }) => {
    return (
        <div>
            <Link href={route}>{children}</Link>
        </div>
    );
};
export default SocailItemWrapper;
