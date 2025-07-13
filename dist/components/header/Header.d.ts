import '../../styles/index.scss';
type Props = {
    /** **Required**: Indicates if the user is authenticated */
    isAuth: boolean;
    /** Indicates if the user is authenticated */
    isProcessingAuth?: boolean;
    /** **Required**: Current selected localization value */
    localization: string;
    /** Optional number of notifications to display. If not provided, defaults to 0 */
    notificationCount?: number;
};
export declare const Header: ({ isAuth, isProcessingAuth, localization, notificationCount }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
