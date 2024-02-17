
export function Hobbies({displayLanguage}) {
  const pageText = {
    hobbies: {
      "en": "Hobbies and Interests: Self Improvement, Language Learning, Sports, Gaming, Content Creation",
      "cn": "爱好兴趣：自我提升、语言学习、体育、电竞、内容创作"
    }
  }

  return (
    <section className="mt-2 px-10">
      <div className="font-medium text-center">{pageText.hobbies[displayLanguage]}</div>
    </section>
  )
}