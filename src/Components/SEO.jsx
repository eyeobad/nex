import { useEffect } from "react"

const escapeAttr = (value) => {
  if (typeof value !== "string") return value
  return value.replace(/"/g, '\\"')
}

const ensureHeadElement = (tagName, attributes) => {
  if (typeof document === "undefined") return null
  const selectorSuffix = Object.entries(attributes)
    .map(([key, value]) => {
      const escapedValue = escapeAttr(String(value))
      const escapedKey = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(key) : key
      return `[${escapedKey}="${escapedValue}"]`
    })
    .join("")
  let element = document.head.querySelector(`${tagName}${selectorSuffix}`)
  if (!element) {
    element = document.createElement(tagName)
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }
  return element
}

const updateMeta = (attributes, content) => {
  const element = ensureHeadElement("meta", attributes)
  if (element && typeof content === "string") {
    element.setAttribute("content", content)
  }
}

const updateLink = (attributes, href) => {
  const element = ensureHeadElement("link", attributes)
  if (element && typeof href === "string") {
    element.setAttribute("href", href)
  }
}

const SEO = ({
  title,
  description,
  canonical,
  robots,
  openGraph = {},
  twitter = {},
  schema,
}) => {
  useEffect(() => {
    if (typeof document === "undefined") return undefined

    const previousTitle = document.title
    if (title) {
      document.title = title
    }

    if (description) {
      updateMeta({ name: "description" }, description)
    }

    if (robots) {
      updateMeta({ name: "robots" }, robots)
    }

    if (canonical) {
      updateLink({ rel: "canonical" }, canonical)
    }

    const ogTitle = openGraph.title || title
    const ogDescription = openGraph.description || description
    const ogUrl = openGraph.url || canonical
    const ogImage = openGraph.image
    const ogType = openGraph.type || "website"

    if (ogTitle) updateMeta({ property: "og:title" }, ogTitle)
    if (ogDescription) updateMeta({ property: "og:description" }, ogDescription)
    if (ogUrl) updateMeta({ property: "og:url" }, ogUrl)
    if (ogImage) updateMeta({ property: "og:image" }, ogImage)
    if (ogType) updateMeta({ property: "og:type" }, ogType)
    if (openGraph.siteName) {
      updateMeta({ property: "og:site_name" }, openGraph.siteName)
    }
    if (openGraph.locale) {
      updateMeta({ property: "og:locale" }, openGraph.locale)
    }

    const twitterTitle = twitter.title || title
    const twitterDescription = twitter.description || description
    if (twitter.card) updateMeta({ name: "twitter:card" }, twitter.card)
    if (twitterTitle) updateMeta({ name: "twitter:title" }, twitterTitle)
    if (twitterDescription) {
      updateMeta({ name: "twitter:description" }, twitterDescription)
    }
    if (twitter.image) updateMeta({ name: "twitter:image" }, twitter.image)

    let schemaScript
    if (schema) {
      const data = Array.isArray(schema) ? schema : [schema]
      if (data.length > 0) {
        schemaScript = ensureHeadElement("script", {
          type: "application/ld+json",
          id: "route-structured-data",
        })
        schemaScript.textContent = JSON.stringify(data)
      }
    }

    return () => {
      if (title) document.title = previousTitle
      if (schemaScript && schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript)
      }
    }
  }, [title, description, canonical, robots, openGraph, twitter, schema])

  return null
}

export default SEO
