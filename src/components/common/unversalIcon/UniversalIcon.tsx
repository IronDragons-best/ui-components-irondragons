import React from 'react'

import parse from 'html-react-parser'

export const UniversalIcon = ({ name }: { name: string }) => {
  const [svgElement, setSvgElement] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    fetch(`/dist/assets/icons/${name}.svg`)
      .then(res => res.text())
      .then(svgString => {
        const parsed = parse(svgString)

        setSvgElement(parsed)
      })
  }, [name])

  return svgElement
}
