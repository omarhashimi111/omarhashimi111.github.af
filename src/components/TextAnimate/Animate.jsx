import "./animate.scss"

const Animate = ({animateClass,index,textArray}) => {
  return (
    <span>
      {
        textArray.map((letter,i) => (
            <span key={letter + i} className={`${animateClass} _${i + index}`}>{letter}</span>
        ))
      }
    </span>
  )
}

export default Animate
