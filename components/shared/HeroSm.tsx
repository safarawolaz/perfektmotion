
type heroSmprops = {
    header: string,
    subHeader: string
}
const HeroSm = ({header, subHeader}: heroSmprops ) => {
  return (
    <section className='min-h-[80vh]   bg-yellow-50 flex flex-col items-center justify-center  bg-herosm bg-center  pt-10'>
        <h1 className="text-6xl font-bold text-white tracking-tight text-center">
            {header}
        </h1>
        <p className="text-lg font-semibold text-gray-200 mt-4">{subHeader}</p>
    </section>
  )
}

export default HeroSm