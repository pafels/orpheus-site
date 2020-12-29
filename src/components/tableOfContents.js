import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

export function TableOfContents({ tableOfContents }) {
  const headingIds = getIds(tableOfContents.items)

  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    headingIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      headingIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [headingIds])

  return <NavList items={tableOfContents.items} activeId={activeId} />
}

function NavList({ items, activeId, depth = 0 }) {
  const ulClass = `nav flex-column ${depth > 0 ? "pl-3" : ""}`

  return (
    <div>
      <ul className={ulClass}>
        {items.map(item => {
          return (
            <li key={item.url} className="nav-item">
              <Link
                to={item.url}
                className={`nav-link ${
                  item.url.slice(1) === activeId ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
              {item.items && (
                <NavList
                  items={item.items}
                  activeId={activeId}
                  depth={depth + 1}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}
