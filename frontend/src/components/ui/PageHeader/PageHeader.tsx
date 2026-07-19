import "./PageHeader.css";

import type { PageHeaderProps } from "./types";

export default function PageHeader({

    title,

    description,

    actions,

    className = "",

    ...props

}: PageHeaderProps){

    return(

        <div
            className={`page-header ${className}`}
            {...props}
        >

            <div>

                <h1>{title}</h1>

                {description && (

                    <p>{description}</p>

                )}

            </div>

            {actions && (

                <div className="page-header__actions">

                    {actions}

                </div>

            )}

        </div>

    )

}