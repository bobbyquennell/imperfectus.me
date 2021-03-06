import { ColorModeToggle } from "./ColorModeToggle/ColorModeToggle"

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        侘び・寂び　
      </h1>
      <h4 className="text-center md:text-left text-lg md:pl-8">
        There is a crack in my mind, So I can get the light in
      </h4>
      <div className='flex-none'><ColorModeToggle/></div>
    </section>
  )
}

export default Intro
