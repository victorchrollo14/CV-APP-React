function Heading({ children, cname }) {
  return <h3 className={`${cname} heading`}>{children}</h3>;
}

export function HeadingUnderLined({ children }) {
  return <Heading cname={"heading-underlined"} children={children} />;
}

export function MainHeading({ children }) {
  return <Heading cname={"main-heading"} children={children} />;
}
