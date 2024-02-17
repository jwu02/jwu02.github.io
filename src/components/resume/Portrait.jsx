import { resumePfp } from '../../assets'

export function Portrait({displayLanguage}) {
  const pageText = {
    picAlt: {"en": "Picture of me", "cn": "个人照片"}
  }
  return (
    <section className="px-6 py-2">
      <img className="clip-path-circle" src={resumePfp} alt={pageText.picAlt[displayLanguage]} />
    </section>
  )
}