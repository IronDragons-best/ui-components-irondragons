import ReCAPTCHA from "react-google-recaptcha";
import styles from './ReCaptcha.module.scss'
import {clsx} from "clsx";
import {ReactElement} from "react";

type Props = {
	/** **Required**: Tracks if captcha verification was completed successfully */
	isCaptchaPassed: boolean,
	/** **Required**: Callback that receives the verification token string */
	setCaptchaToken: (token: string) => void
}

/**
 * ReCaptcha component that integrates Google reCAPTCHA v2
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isCaptchaPassed - Flag indicating if captcha was successfully passed
 * @param {function(string): void} props.setCaptchaToken - Callback function to set the captcha token
 * @returns {JSX.Element} - Rendered reCAPTCHA component
 *
 * @example
 * // Basic usage
 * <ReCaptcha
 *   isCaptchaPassed={isVerified}
 *   setCaptchaToken={(token) => setToken(token)}
 * />
 */

export const ReCaptcha = ({isCaptchaPassed, setCaptchaToken}: Props): ReactElement => {
	const submitHandler = (token: string | null) => {
		if (isCaptchaPassed && token) {
			setCaptchaToken(token)
		}
	}
	
	const classNames = clsx(styles.reCaptchaWrapper, !isCaptchaPassed && styles.reCaptchaError)
	
	return (
		<div className={classNames}>
			<ReCAPTCHA
				sitekey="6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o"
				onChange={submitHandler}
				theme={'dark'}
			/>
			{!isCaptchaPassed && <span className={styles.reCaptchaText}>Please verify that you are not a robot</span>}
		</div>
	)
};


