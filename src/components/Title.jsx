export default function Title({titleCss, titleText}) {
  return (
    <h2 className={`${titleCss}`}>
        {titleText}
    </h2>
  )
}
