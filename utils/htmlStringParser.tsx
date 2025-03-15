// utils/htmlStringParser.tsx
import React from 'react';

/**
 * Safely parses a string that may contain HTML anchor tags and converts them to React components
 * This avoids using dangerouslySetInnerHTML while still supporting links in text
 * 
 * @param text - Text that may contain HTML anchor tags
 * @param linkClassName - Optional CSS class to apply to all parsed links
 * @returns React elements with anchor tags properly rendered
 */
export const parseHtmlLinks = (text: string, linkClassName: string = "text-indigo-600 hover:underline"): React.ReactNode => {
  // If no anchor tags, return the text as is
  if (!text.includes('<a href=')) {
    return text;
  }

  // Split the text at anchor tags
  const parts = text.split(/(<a href="[^"]*"[^>]*>.*?<\/a>)/);
  
  return (
    <>
      {parts.map((part: string, i: number) => {
        // Check if this part is an anchor tag
        if (part.startsWith('<a href=')) {
          // Extract href attribute
          const hrefMatch = part.match(/href="([^"]*)"/);
          
          // Extract target attribute or default to _blank
          const targetMatch = part.match(/target="([^"]*)"/);
          const target = targetMatch ? targetMatch[1] : '_blank';
          
          // Extract rel attribute or default to noopener noreferrer
          const relMatch = part.match(/rel="([^"]*)"/);
          const rel = relMatch ? relMatch[1] : 'noopener noreferrer';
          
          // Extract the link text
          const textMatch = part.match(/>([^<]*)</);
          
          // If we successfully extracted the needed parts, return a React anchor
          if (hrefMatch && textMatch) {
            return (
              <a 
                key={i}
                href={hrefMatch[1]}
                target={target}
                rel={rel}
                className={linkClassName}
              >
                {textMatch[1]}
              </a>
            );
          }
        }
        
        // Return regular text segments as is
        return part;
      })}
    </>
  );
};