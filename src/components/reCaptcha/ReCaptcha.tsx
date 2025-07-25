import { ReactElement } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { clsx } from 'clsx'

import styles from './ReCaptcha.module.scss'

type Props = {
  /** **Required**: Tracks if captcha verification was completed successfully */
  isCaptchaPassed: boolean
  /** **Required**: Callback that receives the verification token string */
  setCaptchaToken: (token: string) => void
  siteKey: string
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

export const ReCaptcha = ({ isCaptchaPassed, setCaptchaToken, siteKey, ...rest }: Props): ReactElement => {
  const submitHandler = (token: string | null) => {
    if (isCaptchaPassed && token) {
      setCaptchaToken(token)
    }
  }

  const classNames = clsx(styles.reCaptchaWrapper, !isCaptchaPassed && styles.reCaptchaError)

  return (
    <div className={classNames}>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={submitHandler}
        theme={'dark'}
        {...rest}
      />
      {!isCaptchaPassed && (
        <span className={styles.reCaptchaText}>Please verify that you are not a robot</span>
      )}
    </div>
  )
}
