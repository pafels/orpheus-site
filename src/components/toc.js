import React from "react"

export function Toc({ items }) {
  return (
    <div>
      <ul>
        {items.map(item => {
          return (
            <li key={item.url}>
              {item.title}
              {item.items && <Toc items={item.items} />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
