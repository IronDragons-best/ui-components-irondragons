import type { StoryObj } from '@storybook/react';
declare const meta: {
    args: {
        isCaptchaPassed: true;
        setCaptchaToken: () => void;
    };
    parameters: {
        backgrounds: {
            default: string;
            values: {
                name: string;
                value: string;
            }[];
        };
    };
    component: ({ isCaptchaPassed, setCaptchaToken, siteKey, ...rest }: {
        isCaptchaPassed: boolean;
        setCaptchaToken: (token: string) => void;
        siteKey: string;
    }) => import("react").ReactElement;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
/** Example of a standard google ReCaptcha */
export declare const GoogleReCaptcha: Story;
