import React from 'react'

import parse, { domToReact, HTMLReactParserOptions, Element, DOMNode } from 'html-react-parser'

type Props = {
  name: string
  dataStatic?: boolean
  width?: string
  height?: string
  size?: number
  className?: string
}

export const UniversalIcon = ({
  name,
  dataStatic = false,
  width = '24px',
  height = '24px',
  size,
  className,
  ...rest
}: Props) => {
  const [svgElement, setSvgElement] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    fetch(`/assets/icons/${name}.svg`)
      .then(res => res.text())
      .then(svgString => {
        const options: HTMLReactParserOptions = {
          replace: domNode => {
            if (domNode.type === 'tag' && (domNode as Element).name === 'svg') {
              const el = domNode as Element

              const attribs: Record<string, any> = {
                ...el.attribs,
                ...(dataStatic ? { 'data-static': 'true' } : { 'data-static': 'false' }),
                width: width,
                height: height,
                size: size,
                className: className,
                ...rest,
              }

              // Правильно преобразуем XML-атрибуты
              if ('xmlnsxlink' in el.attribs) {
                attribs.xmlnsXlink = el.attribs.xmlnsxlink
                delete attribs.xmlnsxlink
              }

              // Преобразуем xlink:href в xlinkHref
              if ('xlink:href' in el.attribs) {
                attribs.xlinkHref = el.attribs['xlink:href']
                delete attribs['xlink:href']
              }

              Object.keys(el.attribs).forEach(key => {
                if (key.includes(':')) {
                  const reactKey = key.replace(/:([a-z])/g, (_, letter) => letter.toUpperCase())
                  attribs[reactKey] = el.attribs[key]
                  delete attribs[key]
                }
              })

              return <svg {...attribs}>{domToReact(el.children as DOMNode[], options)}</svg>
            }
          },
        }

        const parsed = parse(svgString, options)
        setSvgElement(parsed)
      })
  }, [name, dataStatic])

  return svgElement
}
