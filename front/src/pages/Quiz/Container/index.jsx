import "./styles.css"

export default function Container({children}) {
  return (
    <div className="box">
      {children}
    </div>
  )
}