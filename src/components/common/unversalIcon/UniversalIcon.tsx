import React from 'react'

import parse, {domToReact, HTMLReactParserOptions, Element, DOMNode} from 'html-react-parser'

type Props = {
    name: string,
    dataStatic?: boolean,
    width?: string,
    height?: string,
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
                    replace: (domNode) => {
                        if (domNode.type === 'tag' && (domNode as Element).name === 'svg') {
                            const el = domNode as Element;

                            const attribs = {
                                ...el.attribs,
                                ...(dataStatic ? {'data-static': 'true'} : {'data-static': 'false'}),
                                width: width,
                                height: height,
                                size: size,
                                className: className,
                                ...rest
                            };
                            return (
                                <svg {...attribs}>
                                    {domToReact(el.children as DOMNode[], options)}
                                </svg>
                            );
                        }
                    },
                };

                const parsed = parse(svgString, options)
                setSvgElement(parsed)
            })
    }, [name, dataStatic])

    return svgElement
}
