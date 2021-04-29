import React, {ComponentType} from "react";
import Preloader from "../components/common/Preloader/Preloader";

export function withSuspense<T>(Component: ComponentType<T>) {

    return (restProps: T) => (
        <React.Suspense fallback={<Preloader/>}>
            <Component {...restProps}/>
        </React.Suspense>
    )
}

