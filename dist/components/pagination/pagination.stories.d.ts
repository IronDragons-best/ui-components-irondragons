declare const meta: {
    parameters: {
        backgrounds: {
            default: string;
            values: {
                name: string;
                value: string;
            }[];
        };
    };
    tags: string[];
    title: string;
    component: import("react").FC<import("./paginationTypes").PaginationProps>;
};
export default meta;
/** Example of the default pagination */
export declare const Default: () => import("react/jsx-runtime").JSX.Element;
/** Example of the default pagination with two pages */
export declare const DefaultWithTwoPages: () => import("react/jsx-runtime").JSX.Element;
/** Example of the default pagination with one pages */
export declare const DefaultWithOnePages: () => import("react/jsx-runtime").JSX.Element;
